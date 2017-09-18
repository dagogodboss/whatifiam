(function (scope) {
           // 'use strict';

            var Fingerprint = function (options) {
                var nativeForEach, nativeMap;
                nativeForEach = Array.prototype.forEach;
                nativeMap = Array.prototype.map;

                this.each = function (obj, iterator, context) {
                    if (obj === null) {
                        return;
                    }
                    if (nativeForEach && obj.forEach === nativeForEach) {
                        obj.forEach(iterator, context);
                    } else if (obj.length === +obj.length) {
                        for (var i = 0, l = obj.length; i < l; i++) {
                            if (iterator.call(context, obj[i], i, obj) === {}) return;
                        }
                    } else {
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (iterator.call(context, obj[key], key, obj) === {}) return;
                            }
                        }
                    }
                };

                this.map = function (obj, iterator, context) {
                    var results = [];
                    // Not using strict equality so that this acts as a
                    // shortcut to checking for `null` and `undefined`.
                    if (obj == null) return results;
                    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
                    this.each(obj, function (value, index, list) {
                        results[results.length] = iterator.call(context, value, index, list);
                    });
                    return results;
                };

                if (typeof options == 'object') {
                    this.hasher = options.hasher;
                    this.screen_resolution = options.screen_resolution;
                    this.canvas = options.canvas;
                    this.ie_activex = options.ie_activex;
                } else if (typeof options == 'function') {
                    this.hasher = options;
                }
            };

            Fingerprint.prototype = {
                get: function (args) {
                    var keys = [];
                    keys.push(navigator.userAgent);
                    keys.push(navigator.language);
                    keys.push(screen.colorDepth);
                    if (this.screen_resolution) {
                        var resolution = this.getScreenResolution();
                        if (typeof resolution !== 'undefined') { // headless browsers, such as phantomjs
                            keys.push(this.getScreenResolution().join('x'));
                        }
                    }
                    keys.push(new Date().getTimezoneOffset());
                    keys.push(this.hasSessionStorage());
                    keys.push(this.hasLocalStorage());
                    keys.push(!!window.indexedDB);
                    keys.push(typeof (document.body.addBehavior));
                    keys.push(typeof (window.openDatabase));
                    keys.push(navigator.cpuClass);
                    keys.push(navigator.platform);
                    keys.push(navigator.doNotTrack);
                    keys.push(this.identify_plugins());
                    //keys.push(this.getPluginsString());
                    if (this.canvas && this.isCanvasSupported()) {
                        keys.push(this.getCanvasFingerprint());
                    }
                    keys.push(args);
                    keys.push("");
                    keys.push("");

                    if (this.hasher) {
                        return [this.hasher(keys.join('###'), 31), keys];
                    } else {
                        return [this.murmurhash3_32_gc(keys.join('###'), 31), keys];
                    }
                },

                murmurhash3_32_gc: function (key, seed) {
                    var remainder, bytes, h1, h1b, c1, c2, k1, i;

                    remainder = key.length & 3; // key.length % 4
                    bytes = key.length - remainder;
                    h1 = seed;
                    c1 = 0xcc9e2d51;
                    c2 = 0x1b873593;
                    i = 0;

                    while (i < bytes) {
                        k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);
                        ++i;

                        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
                        k1 = (k1 << 15) | (k1 >>> 17);
                        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

                        h1 ^= k1;
                        h1 = (h1 << 13) | (h1 >>> 19);
                        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
                        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
                    }

                    k1 = 0;

                    switch (remainder) {
                        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                        case 1: k1 ^= (key.charCodeAt(i) & 0xff);

                            k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                            k1 = (k1 << 15) | (k1 >>> 17);
                            k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                            h1 ^= k1;
                    }

                    h1 ^= key.length;

                    h1 ^= h1 >>> 16;
                    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= h1 >>> 13;
                    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
                    h1 ^= h1 >>> 16;

                    return h1 >>> 0;
                },

                identify_plugins: function(){
                  // fetch and serialize plugins
                  var plugins = "";
                  // in Mozilla and in fact most non-IE browsers, this is easy
                  if (navigator.plugins) {
                    var np = navigator.plugins;
                    var plist = new Array();
                    // sorting navigator.plugins is a right royal pain
                    // but it seems to be necessary because their order
                    // is non-constant in some browsers
                    for (var i = 0; i < np.length; i++) {
                      plist[i] = np[i].name + "; ";
                      plist[i] += np[i].description + "; ";
                      plist[i] += np[i].filename + ";";
                      for (var n = 0; n < np[i].length; n++) {
                        plist[i] += " (" + np[i][n].description +"; "+ np[i][n].type +
                                   "; "+ np[i][n].suffixes + ")";
                      }
                      plist[i] += ". ";
                    }
                    plist.sort(); 
                    for (i = 0; i < np.length; i++)
                      plugins+= "Plugin "+i+": " + plist[i];
                  }
                  // in IE, things are much harder; we use PluginDetect to get less
                  // information (only the plugins listed below & their version numbers)
                  if (plugins == "") {
                    var pp = new Array();
                    pp[0] = "Java"; pp[1] = "QuickTime"; pp[2] = "DevalVR"; pp[3] = "Shockwave";
                    pp[4] = "Flash"; pp[5] = "WindowsMediaplayer"; pp[6] = "Silverlight"; 
                    pp[7] = "VLC";
                    var version;
                    for ( p in pp ) {
                      version = PluginDetect.getVersion(pp[p]);
                      if (version) 
                        plugins += pp[p] + " " + version + "; "
                    }
                    plugins += this.ieAcrobatVersion();
                  }
                  return plugins;
                },

                ieAcrobatVersion: function() {
                  // estimate the version of Acrobat on IE using horrible horrible hacks
                  if (window.ActiveXObject) {
                    for (var x = 2; x < 10; x++) {
                      try {
                        oAcro=eval("new ActiveXObject('PDF.PdfCtrl."+x+"');");
                        if (oAcro) 
                          return "Adobe Acrobat version" + x + ".?";
                      } catch(ex) {}
                    }
                    try {
                      oAcro4=new ActiveXObject('PDF.PdfCtrl.1');
                      if (oAcro4)
                        return "Adobe Acrobat version 4.?";
                    } catch(ex) {}
                    try {
                      oAcro7=new ActiveXObject('AcroPDF.PDF.1');
                      if (oAcro7)
                        return "Adobe Acrobat version 7.?";
                    } catch (ex) {}
                    return "";
                  }
                },

                hasLocalStorage: function () {
                    try {
                        return !!scope.localStorage;
                    } catch (e) {
                        return true; // SecurityError when referencing it means it exists
                    }
                },

                hasSessionStorage: function () {
                    try {
                        return !!scope.sessionStorage;
                    } catch (e) {
                        return true; // SecurityError when referencing it means it exists
                    }
                },

                isCanvasSupported: function () {
                    var elem = document.createElement('canvas');
                    return !!(elem.getContext && elem.getContext('2d'));
                },

                isIE: function () {
                    if (navigator.appName === 'Microsoft Internet Explorer') {
                        return true;
                    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {// IE 11
                        return true;
                    }
                    return false;
                },

                getPluginsString: function () {
                    if (this.isIE()) {
                        return this.getIEPluginsString();
                    } else {
                        return this.getRegularPluginsString();
                    }
                },

                getRegularPluginsString: function () {
                    return this.map(navigator.plugins, function (p) {
                        var mimeTypes = this.map(p, function (mt) {
                            return [mt.type, mt.suffixes].join('~');
                        }).join(',');
                        return [p.name, p.description, mimeTypes].join('::');
                    }, this).join(';');
                },

                getIEPluginsString: function () {
                    var names = ['ShockwaveFlash.ShockwaveFlash', //flash plugin
                                    'AcroPDF.PDF', // Adobe PDF reader 7+
                                    'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
                                    'QuickTime.QuickTime', // QuickTime
                                             // 5 versions of real players
                                    'rmocx.RealPlayer G2 Control',
                                    'rmocx.RealPlayer G2 Control.1',
                                    'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
                                    'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
                                    'RealPlayer',
                                    'SWCtl.SWCtl', // ShockWave player
                                    'WMPlayer.OCX', // Windows media player
                                    'AgControl.AgControl', // Silverlight
                                    'Skype.Detection'];
                    if (this.ie_activex && scope.ActiveXObject) {
                        // starting to detect plugins in IE
                        return this.map(names, function (name) {
                            try {
                                new ActiveXObject(name);
                                return name;
                            } catch (e) {
                                return null;
                            }
                        }).join(';');
                    } else {
                        return ""; // behavior prior version 0.5.0, not breaking backwards compat.
                    }
                },

                getScreenResolution: function () {
                    return [screen.height, screen.width];
                },

            };


            if (typeof module === 'object' && typeof exports === 'object') {
                module.exports = Fingerprint;
            }
            scope.Fingerprint = Fingerprint;
        })(window);