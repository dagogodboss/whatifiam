// JS for dropdown menu
var instance,nid,nto,client;
var dbtreeObj = [];
instance=null;

createClient();



if (!Array.prototype.push) {
    Array.prototype.push = function(elem) {
        this[this.length] = elem;
    }
}

var b64s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function decode(encStr) {
  var bits, decOut = '', i = 0;
  for(; i<encStr.length; i += 4){
    bits = (b64s.indexOf(encStr.charAt(i)) & 0xff) <<18 | (b64s.indexOf(encStr.charAt(i +1)) & 0xff) <<12 | (b64s.indexOf(encStr.charAt(i +2)) & 0xff) << 6 | b64s.indexOf(encStr.charAt(i +3)) & 0xff;
    decOut += String.fromCharCode((bits & 0xff0000) >>16, (bits & 0xff00) >>8, bits & 0xff);
    }
  if(encStr.charCodeAt(i -2) == 61)
    undecOut=decOut.substring(0, decOut.length -2);
  else if(encStr.charCodeAt(i -1) == 61)
    undecOut=decOut.substring(0, decOut.length -1);
  else undecOut=decOut;
  return unescape(undecOut);		//line add for chinese char
}

var dbTree = {
    init: function(){
        var uls = document.getElementsByTagName('ul');
        for(var i = 0; i < uls.length; i++){
            if(uls[i].className.search(/\bdbtree\b/) ==-1) continue;
            var menu = uls[i];
			if(menu.className.search(/\bedit\b/) !=-1){
            var suba = menu.getElementsByTagName('a');
            for(var j = 0; j < suba.length; j++){
				Evt.addEvent(suba[j], 'mousedown', dragPress, false);
				Evt.addEvent(suba[j], 'contextmenu', contextMenu, false);
				Evt.addEvent(suba[j], 'selectstart', PreventDefault,false);
				suba[j].href='javascript:void(0)';
				}
			}
           var subMenus = menu.getElementsByTagName('ul');
            for(var j = 0; j < subMenus.length; j++){
                var pLI = subMenus[j].parentNode;
                pLI.hasSubMenu = true;
                if(menu.className.search(/\bonclick\b/) !=-1){
					Evt.addEvent(pLI, 'click', dbTree.click, false);
                    if(menu.className.search(/\blinkparent\b/)==-1){pLI.getElementsByTagName('a')[0].href='javascript:void(0)';}
				}else{
					var t=menu.className.match(/to(.*)to/);
					t=t?t[1]:null;
                    Evt.addEvent(pLI, 'mouseout', dbTree.getMoutFor(pLI,t), false);
                    Evt.addEvent(pLI, 'mouseover', dbTree.getMoverFor(pLI), false);
                }
                pLI.getElementsByTagName('a')[0].className += ' subMenu';
            }
			if(menu.className.search(/\bexpand\b/) != -1) dbTree.mExp(menu.id);
        }
    },
    
	mExp:function(mObj){
		var li = document.getElementById(mObj+'_active');
		if(li){
			dbTree.mOver(li);
			li = li.parentNode;
			while (!!li && (li.id != mObj)){
				if((!li.className) || (li.className=='')){
						li.className='click';
				}else{
						li.className += ' click';
				}
				if(li.firstChild.nodeName.toLowerCase()=='a') li.firstChild.className += ' click';
				li = li.parentNode;
			}
		}
	},
	
	getMoverFor:function(node){
        return function(){dbTree.mOver(node);};
    },
    
    getMoutFor:function(node,time){
        return function(){dbTree.mTimeout(node,time);};
    },
    
    mOver: function(targetElement){
        var target = targetElement;
        clearTimeout(target.timeout);
        for(var i = 0; i < target.childNodes.length; i++){
            var node = target.childNodes[i];
            if(node.nodeName.toLowerCase() == 'ul'){
                target.getElementsByTagName('a')[0].className += ' click';
                target.className += ' click';
                node.className += ' click';
            }
        }
    },
    
    mTimeout: function(targetElement,time){
        var target = targetElement;
        target.timeout = setTimeout(function(){dbTree.mOut(target);}, time);
    },
    
    mOut:function(target){
		for(var i = 0; i < target.childNodes.length; i++){      
			var node = target.childNodes[i];
            if(node.nodeName.toLowerCase() == 'ul'){
                target.getElementsByTagName('a')[0].className = target.getElementsByTagName('a')[0].className.replace(/click/g, '');
                node.className = node.className.replace(/click/g, '');
                target.className = target.className.replace(/click/g, '');
			}
        }
    },
    
    click:function(e){
        if(window.event){
            window.event.cancelBubble = true;
        }
        if(e && e.stopPropagation){
            e.stopPropagation();
        }
        var target = (window.event)? window.event.srcElement : (e)? e.target : null;
        
        if(!target || !(target = dbTree.getTarget(target, 'li')))return;
        
		if(target.getElementsByTagName('a')[0].className.search(/\bclick\b/)==-1){
			var tM=getObj(target);
			if(isNaN(tM)){
				if(document.getElementById(tM).className.search(/\bmultiple\b/)==-1){				
					for(n=0; n < target.parentNode.childNodes.length; n++){
						node=target.parentNode.childNodes[n];
						if(node.nodeName.toLowerCase() == 'li'){
							if(node.className.search(/\bclick\b/)!=-1) dbTree.mOut(target.parentNode.childNodes[n]);
						}
					}					
				}
			}
			dbTree.mOver(target);
        }else{
            dbTree.mOut(target);
        }
        // wenn dbtree Edit false, sonst true:
		if(isNaN(getObj(target))){
			return true;
		}else{
			return false;
		}
    },
    
	getTarget: function(target, elm){
        if(target.nodeName.toLowerCase() != elm && target.nodeName.toLowerCase() != 'body'){
            return dbTree.getTarget(target.parentNode, elm);
        }else if(target.nodeName.toLowerCase() == 'body'){
            return null;
        }else{
            return target;
        }
    }
};

function createClient() {
try {
client = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
} catch (e) { 
	alert('DBTree Error: Your browser is not Ajax-enabled!'); //!!!!!!!!! nur prÃ¼fen, wenn DBTree action is edit/advanced !!!!!!!!
	}
}

function setX(node,x) {
node.style.left = x + 'px';
}

function setY(node,y) {
node.style.top = y + 'px';
}

function getObj(node){
	while(node.className.search(/\bdbtree\b/) == -1){
		node=node.parentNode;
	}
	if((node.className.search(/\bdbtree\b/) != -1) && (node.className.search(/\bedit\b/) != -1)){
		for(i=0;i<dbtreeObj.length;i++){
			if(node.id==dbtreeObj[i].instanceName) return i;
		}	
	}
	return node.id;
}

function contextMenu(evt){
	evt = new Evt(evt);
	nid=evt.source.parentNode.parentNode.id;
	var nida=nid.split('_');
	nid=nida[1];
	instance=dbtreeObj[getObj(evt.source)];
	var tmp=document.getElementById(instance.instanceName+'_options').cloneNode(true);
	var alt=document.getElementById(instance.instanceName+'_options');
	alt.parentNode.removeChild(alt);
	tmp.id=instance.instanceName+'_options';
	document.body.appendChild(tmp);
	setX(tmp,evt.x);
	setY(tmp,evt.y);
	tmp.style.display='block';
	evt.consume();
	Evt.addEvent(document,'mouseup',contextAction,false);
	return false;
}

function contextAction(evt){
evt = new Evt(evt);
var url;
var a=evt.source;
var b=a;
	while((b!=null) && (b.nodeName.toLowerCase()!='body')){
		if(b.id==instance.instanceName+'_options') break;
		b=b.parentNode;
	}
	if((b!=null) && (b.id==instance.instanceName+'_options')){
		switch(a.parentNode.className){
		  case 'addroot':
			a.href=instance.editpage+'action=add&node='+instance.rootnode;
			break;
		  case 'add':
			a.href=instance.editpage+'action=add&node='+nid;
			break;
		  case 'edit':
			a.href=instance.editpage+'action=edit&node='+nid;
			break;
		  default:
			url=instance.tagpath+'?instanceName='+instance.instanceName;
			url+='&rootnode='+instance.rootnode;
			if(a.parentNode.className=='moveroot'){
			url+='&action=move&node='+nid+'&nodeto='+instance.rootnode;
			}else{
			url+='&action='+a.parentNode.className+'&node='+nid;
			}
			var d=new Date();
			var time=d.getTime();
			url+='&time='+time;
			url+='&type='+instance.type;
			url+='&query='+instance.query;
			url+='&datasource='+instance.datasource;
			url+='&username='+instance.username;
			url+='&password='+instance.password;
			url+='&table='+instance.table;
			url+='&id='+instance.id;
			url+='&parent='+instance.parent;
			url+='&contentfield='+instance.contentfield;
			url+='&editpage='+instance.editpage;			
			client.onreadystatechange = callback;
			client.open('get',url,true);
			client.setRequestHeader('Pragma', 'no-cache');
			client.setRequestHeader('Cache-Control', 'must-revalidate');
			client.setRequestHeader('If-Modified-Since', document.lastModified);
			client.send(null);
			//break;
		}
	}
	var Node = document.getElementById(instance.instanceName+'_options');
	if(Node){Node.style.display='none'};

	Evt.removeEvent(document,'mouseup',contextAction,false);

//return false;
}

function dragPress(evt){
	evt = new Evt(evt);
	nid=evt.source.parentNode.parentNode.id;
	var nida=nid.split('_');
	nid=nida[1];
	instance=dbtreeObj[getObj(evt.source)];
	if(!document.getElementById(instance.instanceName+'_tip')){
	var pointer=(!document.getElementById(instance.instanceName+'_tip')) ? document.createElement('div') : document.getElementById(instance.instanceName+'_tip');
	pointer.id=instance.instanceName+'_tip';
	pointer.innerHTML=evt.source.firstChild.nodeValue;
	document.body.appendChild(pointer);
	}
	Evt.addEvent(document,'mousemove', dragMove,false);
	Evt.addEvent(document,'mouseup', dragRelease,false);
	Evt.addEvent(document,'selectstart', PreventDefault,false);
	//== Firefox
	evt.consume();
	return false;
}

function PreventDefault(evt){
	// *** Cross browser function to prevent the default action from occuring.
	if (!evt && window.event) evt=window.event;
	if (evt!=null){
		if (typeof(evt.preventDefault)=='function') evt.preventDefault();
		else evt.returnValue=false;
	}
	return false;
}

function dragMove(evt){
	evt = new Evt(evt);
	var pointer = document.getElementById(instance.instanceName+'_tip');
	setX(pointer,evt.x);
	setY(pointer,evt.y);
	pointer.style.display='block';
	//== IE
	evt.consume();
	return false;
}

function dragRelease(evt){
evt = new Evt(evt);
var al=evt.source.parentNode;
  if(al.nodeName.toLowerCase() == 'a'){
	 nid=instance.instanceName+'_'+nid;
	 if(nid!=al.parentNode.id){
		var allowed=true;
		var el = al.parentNode;
		while ( !!el && (el.id != instance.instanceName) ) {
			if(el.id==nid){
				allowed=false;
				break;
			}else{
				el = el.parentNode;
			}
		}
		if(allowed==true){
			var nida=nid.split('_');
			nid=nida[1];
			nto=al.parentNode.id;
			var ntoa=nto.split('_');
			nto=ntoa[1];
			//alert(nid+' --> '+nto);
			dragBoxDropped(evt);
			}
		}
  }
var Node = document.getElementById(instance.instanceName+'_tip');
if(Node){Node.parentNode.removeChild(Node)};
Evt.removeEvent(document,'mousemove',dragMove,false);
Evt.removeEvent(document,'mouseup',dragRelease,false);
Evt.removeEvent(document,'selectstart', PreventDefault,false);
}

function dragBoxDropped(evt){
var d=new Date();
var time=d.getTime();
var url;
url=instance.tagpath+'?instanceName='+instance.instanceName+'&action=move&rootnode='+instance.rootnode+'&node='+nid+'&nodeto='+nto+'&time='+time;
url+='&type='+instance.type;
url+='&query='+instance.query;
url+='&datasource='+instance.datasource;
url+='&username='+instance.username;
url+='&password='+instance.password;
url+='&table='+instance.table;
url+='&id='+instance.id;
url+='&parent='+instance.parent;
url+='&contentfield='+instance.contentfield;
url+='&editpage='+instance.editpage;			
client.onreadystatechange = callback;
client.open('get',url,true);
client.setRequestHeader('Pragma', 'no-cache');
client.setRequestHeader('Cache-Control', 'must-revalidate');
client.setRequestHeader('If-Modified-Since', document.lastModified);
client.send(null);
}

function expandtree(){
	var li = (!!nto)?nto:nid;
	li = instance.instanceName+'_'+li;
	li = document.getElementById(li);
    if(li){
		li = li.getElementsByTagName('ul')[0];
		while (!!li && (li.className.search(/\bdbtree\b/) == -1) && (li.className.search(/\bedit\b/) == -1)){
			if((!li.className) || (li.className=='')){
					li.className='click';
			}else{
					li.className += ' click';
			}
			if(li.firstChild.nodeName.toLowerCase()=='a') li.firstChild.className += ' click';
			li = li.parentNode;
		}
	}
}

function jumpTo(targ,selObj){
  if(targ!='blank'){
  	eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  }else{
	window.open(selObj.options[selObj.selectedIndex].value);
	}
}

function reinit(wich){
	var tme = document.getElementById(wich);
   var subMenus = tme.getElementsByTagName('ul');
	for(var j = 0; j < subMenus.length; j++){
		var pLI = subMenus[j].parentNode;
		pLI.hasSubMenu = true;
		Evt.addEvent(pLI, 'click', dbTree.click, false);
		pLI.getElementsByTagName('a')[0].className += ' subMenu';
	}
	var tmea = tme.getElementsByTagName('a');
	for(var j = 0; j < tmea.length; j++){
		Evt.addEvent(tmea[j], 'mousedown', dragPress, false);
		Evt.addEvent(tmea[j], 'contextmenu', contextMenu, false);
		Evt.addEvent(tmea[j], 'selectstart', PreventDefault,false);
		tmea[j].href='javascript:void(0)';
		}
}

function callback() {
	if (client.readyState == 4) {
		if (client.status == 200) {
			document.getElementById(instance.instanceName+'_edit').innerHTML=client.responseText;
			reinit(instance.instanceName);
			expandtree();
			createClient();
		} else {
			alert('DBTree Error: Sorry, there seems to be a problem retrieving the response:\n' +client.statusText);
			createClient();
		}
	}
}

function Evt(evt) {
this.evt = evt ? evt : window.event; 
this.source = evt.target ? evt.target : evt.srcElement;
this.x = evt.pageX ? (evt.pageX)  : (evt.clientX + Math.max(document.body.scrollLeft,document.documentElement.scrollLeft));
this.y = evt.pageY ? (evt.pageY)  : (evt.clientY + Math.max(document.body.scrollTop,document.documentElement.scrollTop));
}

Evt.prototype.toString = function () {
return 'Evt [ x = ' + this.x + ', y = ' + this.y + ' ]';
};

Evt.prototype.consume = function () {
if (this.evt.stopPropagation) {
this.evt.stopPropagation();
this.evt.preventDefault();
} else if (this.evt.cancelBubble) {
this.evt.cancelBubble = true;
this.evt.returnValue = false;
}
};

Evt.addEvent = function (target,type,func,bubbles) {
if (document.addEventListener) {
target.addEventListener(type,func,bubbles);
} else if (document.attachEvent) {
target.attachEvent('on'+type,func,bubbles);
} else {
target['on'+type] = func;
}
};

Evt.removeEvent = function (target,type,func,bubbles) {
if (document.removeEventListener) {
target.removeEventListener(type,func,bubbles);
} else if (document.detachEvent) {
target.detachEvent('on'+type,func,bubbles);
} else {
target['on'+type] = null;
}
};

Evt.addEvent(window, 'load', dbTree.init, false);