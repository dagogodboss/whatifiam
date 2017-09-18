// JavaScript Document

//variables used for showMenuItem function
mainMenu = new Array();

//function getLogo
//This function will read the "logo" property from the 
//properties.txt file and return the value
function getLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("logo");
	return current[0];
}

function getLogoEAM()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("logo_eam");
	return current[0];
}

//function writeHeaderLogo
//This function will write the <img> tag to the header
//This function calls the getLogo function which returns the image
//to be used as the header image
function writeHeaderLogo()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getLogo();
	third = '" border="0" name="main_banner" title="Visit the Bank Home page" alt="Bank Logo" style="padding-left:13px;padding-top:2px;padding-bottom:0px;"\/>	';
			
	document.write(first + second + third);

} // end writerHeaderLogo


function writeHeaderLogoeam()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getLogoEAM();
	third = '"class="mainContainerLeftBrandImage" border="0" name="main_banner" title="Visit the Bank Home page" alt="Bank Logo" \/>	';
			
	return(first + second + third);

} // end writerHeaderLogo


//function to load the CDS logo dynamically on Rewrdpoints.html
function writeRewardsLogo() {
    var first, second, third;

    first = '<img src="..\/images\/';
    second = getLogo();
    third = '" border="0" name="main_banner" \/>	';

    document.write(first + second + third);

} // end writerHeaderLogo

//function getBillPayLogo
//This function will read the "billpaylogo" property from the 
//properties.txt file and return the value
function getBillPayLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("billpaylogo");
	return current[0];
}

//function writeBillPayLogo
//This function will write the <img> tag to the header
function writeBillPayLogo()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getBillPayLogo();
	third = '" name="main_banner" title="Visit the Bank Home Web Page" align="top" alt="Bank Logo" style="border-width:0px;border-style:None;"\/>	';
			
	document.write(first + second + third);

}// end writeBillPayLogo

//function getRDCLogo
//This function will read the "rdclogo" property from the 
//properties.txt file and return the value
function getRDCLogo()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("billpaylogo");
	return current[0];
}

//function writeRDCLogo
//This function will write the <img> tag to the header
function writeRDCLogo()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getRDCLogo();
	third = '" name="main_banner" title="Visit the Merchant Home Web Page" align="top" alt="Bank Logo" style="border-width:0px;border-style:None;"\/>	';
			
	document.write(first + second + third);

}// end writeBillPayLogo

//function getProductName
//This function will read the "product" property from the 
//properties.txt file and return the value
function getProductName()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("product");
	return current[0];
}

//function writeProductName
//This function will write the product name to the header
//This function calls the getProductName function which returns the text
//to be used in the header
function writeProductName()
{
	var prodname;
	
 	prodname = getProductName();
				
	document.write(prodname);

}// end writerProductName

function writeProductNameEam()
{
	var prodname;
	
 	prodname = getProductName();
				
	return(prodname);

}

//function getBanner
//This function will read the "banner" property from the 
//properties.txt file and return the value
function getBanner()
{
	//Read data from the text file properties.txt and store into any variable
	var current = eval("banner");
	return current[0];
}

//function writeLeftBanner
//This function will write the <img> tag to the header
//This function calls the getBanner function which returns the image
//to be used as the header image
function writeLeftBanner()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getBanner();
	third = '" name="main_banner" align="top" alt="" style="border-width:0px;border-style:None;"\/>	';
			
	document.write(first + second + third);

}// end writerLeftBanner

//function getGraph0
//This function will read the "graph0" property from the 
//properties.txt file and return the value
function getGraph0()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph0");
	return current[0];
}

//function writeGraph0
//This function will write the <img> tag 
//This function calls the getGraph0 function which returns the image
//to be used as the first graphic image on the landing page (modules_main.html)
function writeGraph0()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getGraph0();
	third = '" name="graph_0" border = "0"\/>	';

			
	document.write(first + second + third);

}// end writeGraph0


//function getText0
//This function will read the "text0" property from the 
//properties.txt file and return the value
function getText0()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text0");
	document.write(current);

}// end getText0


//function getGraph1
//This function will read the "graph1" property from the 
//properties.txt file and return the value
function getGraph1()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph1");
	return current[0];
}

//function writeGraph1
//This function will write the <img> tag 
//This function calls the getGraph1 function which returns the image
//to be used as the second graphic image on the landing page (modules_main.html)
function writeGraph1()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getGraph1();
	third = '" name="graph_1" border = "0"\/>	';
	
			
	document.write(first + second + third);

}// end writeGraph1


//function getText1
//This function will read the "text1" property from the 
//properties.txt file and return the value
function getText1()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text1");
	document.write(current);

}// end getText1


//function getGraph2
//This function will read the "graph2" property from the 
//properties.txt file and return the value
function getGraph2()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph2");
	return current[0];
}

//function writeGraph2
//This function will write the <img> tag 
//This function calls the getGraph2 function which returns the image
//to be used as the third graphic image on the landing page (modules_main.html)
function writeGraph2()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getGraph2();
	third = '" name="graph_2" border = "0"\/>	';
	
			
	document.write(first + second + third);

}// end writeGraph2


//function getText2
//This function will read the "text0" property from the 
//properties.txt file and return the value
function getText2()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text2");
	document.write(current);

}// end getText2


//function getGraph3
//This function will read the "graph0" property from the 
//properties.txt file and return the value
function getGraph3()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("graph3");
	return current[0];
}

//function writeGraph3
//This function will write the <img> tag 
//This function calls the getGraph3 function which returns the image
//to be used as the first graphic image on the landing page (modules_main.html)
function writeGraph3()
{
	var first,second,third;
	
	first = '<img src="..\/images\/';
	second = getGraph3();
	third = '" name="graph_3" border = "0"\/>	';
	
			
	document.write(first + second + third);

}// end writeGraph3


//function getText3
//This function will read the "text0" property from the 
//properties.txt file and return the value
function getText3()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("text3");
	document.write(current);

}// end getText3


//function getLogin
//This function will read the "loginpage" property from the 
//properties.txt file in the /includes directory and return the value
function getLogin()
{
	//Read data from the text file modules.txt and store into any variable
	var current = eval("loginpage");
	
	return current[0];
}

//function redirectSA
//This function will redirect the user
//to either the signup for SA page or main landing page
//this will be determined by the "loginpage" variable in the properites.txt file
//in the includes/.
function redirectSA()
{
	
	var temp = getLogin();
	if (temp == "../modules_main/modules_main.html")	
	{	
		redirectSplash();
	}
	else 
	{
	window.location.href = temp;
	}
}//end write index

//function isRegistered
//This function will read the "isreg" property from the 
//properties.txt file in the /includes directory and return the value
function isRegistered()
{
    //Read data from the text file properties.txt and store into an variable
	var current = eval("isreg");
	return current[0];
}//end isRegistered

//function signinReg
//This function will redirect the user
//to either the regular password, SA password w/Registered Computer or SA password w/Non-Registered Computer
//for BiB login this will be determined by the "isreg" variable in the properites.txt file
//in the includes/.
function signinReg()
{
	var temp = isRegistered();
	window.location.href = temp;
}//end signinReg

//function siginToken
//This function will redirect the user 
//to the Set Up Secure Token page ie signin_active_token.html
//if token approval service is present for the user in modules.txt 
//else it will call the function signinReg()
//To use this function we must include the js page menu_scripts.js and
//add the variable mainMenu=new Menu()
//in the page where we call this function 
function siginToken()
{   
    
    getMenu();
    if(showMenuItem('tokenapproval') == "1")
    {
        window.location.href = "signin_active_passcode.html";
    }
    else
    {
        signinReg();
    }
}

//function redirectSplash
//This function will redirect the user
//to the Welcome page with splash page ie modules_main_splash.html
//if splash page service is present for the user in modules.txt 
//else it will call the function signinReg()
//To use this function we must include the js page menu_scripts.js and
//add the variable mainMenu=new Menu()
//in the page where we call this function
function redirectSplash()
{   
    getMenu();
	
	var titleBranding = eval("title_branding");
	var required_update = eval("requiredupdate");
	var success,tsuccess;
	
	if(required_update == "yes")
	{
		window.location.href = "../modules_main/required_update_company.html";	
	}
	
	if(required_update == "no")
	{
		if(showMenuItem('dashboardsetup') == "1")
			success = "1";
		else
			success = "0";
			
		if(titleBranding=="yes")
			tsuccess = "1";
		else
			tsuccess = "0";
			
		if(showMenuItem('dashboard') == "1" && showMenuItem('splashpage') != "1" )
		{
			window.location.href = "../modules_main/modules_main_widgets.html?splash=0&tbrand="+tsuccess+"&dsetup="+success;
		}
	
		else if(showMenuItem('dashboard') == "1" && showMenuItem('splashpage') == "1" )
		{
			window.location.href = "../modules_main/modules_main_widgets.html?splash=1&tbrand="+tsuccess+"&dsetup="+success;
		}
	
		else  if(showMenuItem('dashboard') != "1" && showMenuItem('splashpage') == "1")
		{
			window.location.href = "../modules_main/modules_main.html?splash=1&tbrand=0";
		}
		else
		{
			window.location.href = "../modules_main/modules_main.html?splash=0&tbrand=0";
		}
	}
}

function GetQstringVal(url,container)
{
	var splashPage= getqstring('splash');
	var titleBranding= getqstring('tbrand');
	var dashboardSetup = getqstring('dsetup');
	
	if(showMenuItem('dashboard') == "1")
	{
		if(splashPage=="1")
			openMyWelcomeModalSplash(url+"?dashboardSetup="+dashboardSetup);
		else
		{
			if(dashboardSetup=="1")
			{
				tb_show('', '../splash_pages/dashboard_setup.html?width=770', '');
			}
		}
		
		if(titleBranding=="1")
		{
			showBrandedMessage_titlebranding(container);
		}
		else
		{
			showBrandedMessage(container);
		}
	}
	else
	{
		if(splashPage=="1")
		{
			openMyWelcomeModal(url);
		}
	}
}

function eamLeftMenu()
{
	var str = '';
	str+='<div id="mainContainerLeftWrapper" class="roundCorner5pxE">';
	str+='<span class="padding45S block"></span>';
	str+='<div style="height: 433px;" id="mainContainerLeft">';
	str+='<div id="mainContainerLeftContent">';
	str+='<div id="mainContainerLeftContentImage">';
	str+='<a id="_brandImageLink" title="ebanking">';
	str+=writeHeaderLogoeam();
	str+='</a>';
	str+='</div>';
	str+='<div id="mainContainerLeftContentMessageItems">';
	//str += '<p><b>Need help?</b><br>Contact us at 1-800-555-1234.</p>';
	if (eval("enroll_config") == "show") {
	    str += '<p><b>Care to enroll?</b><br>Visit the <a href="enrollment1.html?ref=on" target="_blank">Enrollment Page</a> to sign up today.</p>';
	}
	str += '<p><a href="javascript:void(0)">View our privacy policy</a>.</p><p><a href="javascript:void(0)">Visit our home page!</a></p>';
	str+='</div>';
	str+='</div>';
	str+='</div>';
	str+='</div>';
	document.write(str);
}

function eamProductName()
{
	var str = '';
	str+='<div id="_title" class="mainContainerRightContentHeaderTitle" brandID="Login_Title">Sign in to <span id="content_title_text" style="font-size:22px;font-weight:normal">';
	str+=writeProductNameEam();
	str+='</span></div>';
	document.write(str);
}

function eamredirecttoPage(url)
{
	var ref = getqstring('ref');
	if(ref=="on")
		location.href=url+"?ref=on";
	else
		location.href=url;		
}

/*var panels = [
{ "panelName":"Balance Snapshot" , "panelDesc":"Compare and analyze account balances over time.", "recommended":"no" },
{ "panelName":"Balance Trends" , "panelDesc":"Graph and compare account balance history for trends or fluctuation.", "recommended":"no"  },
{ "panelName":"Calendar" , "panelDesc": "A calendar view of upcoming transactions and custom alerts.", "recommended":"yes"  },
{ "panelName":"Important Account Balances" , "panelDesc": "The latest balance for key accounts.", "recommended":"yes"  },
{ "panelName":"Next Scheduled Requests" , "panelDesc": "A list of upcoming transactions to aid in forecasting cash position.", "recommended":"no"  },
{ "panelName":"Other Account Balances" , "panelDesc": "The latest balance for escrow, rewards, and other accounts.", "recommended":"no"  },
{ "panelName":"Recent Transactions" , "panelDesc": "Specific types of transactions for up to 30 days.", "recommended":"yes"  },
{ "panelName":"Shortcuts" , "panelDesc": "Create links to frequently used pages.", "recommended":"yes"  },
{ "panelName":"Templates Approval" , "panelDesc": "Approve new and changed templates.", "recommended":"no"  },
{ "panelName":"Transfers & Payments Approval" , "panelDesc": "Approve transactions and files.", "recommended":"yes"  },
{ "panelName":"User Profiles Approval" , "panelDesc": "Approve new or changed user profiles.", "recommended":"no"  },
{ "panelName":"Exceptions Decision" , "panelDesc": "Make decisions on and approve positive pay exceptions.", "recommended":"yes"  },
{ "panelName":"Issue and Issue File Approval" , "panelDesc": "Approve positive pay issues.", "recommended":"no"  }
];*/

var panels = [];

var available = 0;
var current = 0;
var current_dashboard = new Array();	
var available_dashboard = new Array();
var available_str='';var current_str='';

function writeDashboardPanels()
{	
	getWidgetMenu();
	getMenu();
	
	var largerep = showMenuItem('largereporting');
	var midrep = showMenuItem('midreporting');
	var cardpay = showMenuItem('cardpay');
	var cardrpt = showMenuItem('cardrpt');
	var loan = showMenuItem('loan');
	var investment = showMenuItem('investmentaccount');
	var cdaccount = showMenuItem('cdaccount');
	var desa = showMenuItem('desa');
	var rewards = showMenuItem('rewards');
	var dmarketing = showMenuItem('dmarketing');
	var microreporting = showMenuItem('microreporting');
	var positive = showMenuItem('positive');
	var pospayexception = showMenuItem('pospayexception');
	var payeepospay = showMenuItem('payeepospay');
	var achpospay = showMenuItem('achpospay');
	var revpospay = showMenuItem('revpospay');
	var admin = showMenuItem('admin');
	var pospayissue = showMenuItem('pospayissue');
	var fullrecon = showMenuItem('fullrecon');
	var express = showMenuItem('express');
	var fullrecon = showMenuItem('fullrecon');
	var stoppay = showMenuItem('stop');
	var ach = showMenuItem('ach');
	var wire = showMenuItem('wire');
	var book = showMenuItem('book');
	var fund = showMenuItem('funds');
	var achreporting = showMenuItem('achreporting');
	var Imagingreturns = showMenuItem('Imagingreturns');
	var dashboardsetup = showMenuItem('dashboardsetup');
	var integratedpayables = showMenuItem('integratedpayables');
	
		panels.push({ "panelName":"Calendar" , "panelDesc": "A calendar view of upcoming transactions and custom alerts.", "recommended":"yes"  });
	
	if(largerep==1 || midrep==1 || cardpay==1 || cardrpt==1 || loan==1 || investment==1 || cdaccount==1)
		panels.push({ "panelName":"Balance Snapshot" , "panelDesc":"Compare and analyze account balances over time.", "recommended":"no"});
	
	if(largerep==1 || midrep==1 || investment==1 || microreporting==1)	
		panels.push({"panelName":"Balance Trends" , "panelDesc":"Graph and compare account balance history for trends or fluctuation.", "recommended":"no"});
		
	if(largerep==1 || midrep==1 || cardpay==1 || cardrpt==1 || loan==1 || investment==1 || cdaccount==1 || microreporting==1)
		panels.push({ "panelName":"Important Account Balances" , "panelDesc": "The latest balance for key accounts.", "recommended":"yes"  });
	
	if(ach==1 || wire==1 || cardpay==1)
		panels.push({ "panelName":"Next Scheduled Requests" , "panelDesc": "A list of upcoming transactions to aid in forecasting cash position.", "recommended":"no"  });
	
	if(desa==1 || rewards==1)	
		panels.push({ "panelName":"Other Account Balances" , "panelDesc": "The latest balance for escrow, rewards, and other accounts.", "recommended":"no"  });
		
	if(largerep==1 || midrep==1 || cardpay==1 || cardrpt==1)
		panels.push({ "panelName":"Recent Transactions" , "panelDesc": "Specific types of transactions for up to 30 days.", "recommended":"yes"  });
	
	if(largerep==1 || express==1 || stoppay==1)	
		panels.push({ "panelName":"Shortcuts" , "panelDesc": "Create links to frequently used pages.", "recommended":"yes"  });
		
	if(ach==1 || wire==1 || book==1)
		panels.push({ "panelName":"Templates Approval" , "panelDesc": "Approve new and changed templates.", "recommended":"no"  });
	
	if(ach==1 || wire==1 || express==1 || cardpay==1 || book==1 || fund==1 || loan==1 || integratedpayables==1)	
		panels.push({ "panelName":"Transfers & Payments Approval" , "panelDesc": "Approve transactions and files.", "recommended":"yes"  });
	
	if(admin==1)	
		panels.push({ "panelName":"User Profiles Approval" , "panelDesc": "Approve new or changed user profiles.", "recommended":"no"  });
		
	if(positive==1 || pospayexception==1 || achpospay==1)
		panels.push({ "panelName":"Exceptions Decision" , "panelDesc": "Make decisions on and approve positive pay exceptions.", "recommended":"yes"  });
	
	if((positive==1 || pospayissue==1) && (fullrecon==1))
		panels.push({ "panelName":"Issues and Issue File Approval" , "panelDesc": "Approve positive pay issues.", "recommended":"no"  });
	
		
	for (var i = 0; i < widgetMenu.length; i++) 
	{
		switch(widgetMenu[i])
		{
			case 'recenttransaction':
				if(widgetMenu[i]=='recenttransaction')
				{
					if(largerep!=1 && midrep!=1 && cardpay!=1 && cardrpt!=1)
						break;
					else
					{
						current_dashboard.push("Recent Transactions");
						current++;
					}
					
				}
				break;
				
			case 'balancesnapshot':
				if(widgetMenu[i]=='balancesnapshot')
				{
					if(largerep!=1 && midrep!=1 && cardpay!=1 && cardrpt!=1 && loan!=1 && investment!=1 && cdaccount!=1)
						break;
					else
					{
						current_dashboard.push("Balance Snapshot");
						current++;
					}
				}
				break;
			
			case 'otheraccountbalance':
				if(widgetMenu[i]=='otheraccountbalance')
				{
					if(desa!=1 && rewards!=1)
						break;
					else
					{
						current_dashboard.push("Other Account Balances");
						current++;
					}
				}
				break;
			
			case 'importantbalance':
				if(widgetMenu[i]=='importantbalance')
				{
					if(largerep!=1 && midrep!=1 && cardpay!=1 && cardrpt!=1 && loan!=1 && investment!=1 && cdaccount!=1 && microreporting!=1)
						break;
					else
					{
						current_dashboard.push("Important Account Balances");
						current++;
					}
				}
		
			case 'exceptiondecision':
				if(widgetMenu[i]=='exceptiondecision')
				{
					if(positive!=1 && pospayexception!=1 && achpospay!=1)
						break;
					else
					{
						current_dashboard.push("Exceptions Decision");
						current++;
					}
				}
				
			case 'admin1':
				if(widgetMenu[i]=='admin1')
				{
					if(admin!=1)
						break;
					else
					{
						current_dashboard.push("User Profiles Approval");
						current++;
					}
				}
			
			case 'issuefiles':
				if(widgetMenu[i]=='issuefiles')
				{
					if((positive!=1 || pospayissue!=1) && (fullrecon!=1))
						break;
					else
					{
						current_dashboard.push("Issue and Issue File Approval");
						current++;
					}
				}
		
			case 'shortcut':
				if(widgetMenu[i]=='shortcut')
				{
					if(largerep!=1 && express!=1 && stoppay!=1)
						break;
					else
					{
						current_dashboard.push("Shortcuts");
						current++;
					}
				}
		
			case 'templateapproval':
				if(widgetMenu[i]=='templateapproval')
				{
					if(ach!=1 && wire!=1 && book!=1)
						break;
					else
					{
						current_dashboard.push("Templates Approval");
						current++;
					}
				}
		
			case 'nextscheduled':
				if(widgetMenu[i]=='nextscheduled')
				{
					if(ach!=1 && wire!=1 && cardpay!=1)
						break;
					else
					{
						current_dashboard.push("Next Scheduled Requests");
						current++;
					}
				}
				
			case 'paymenttransfer':
				if(widgetMenu[i]=='paymenttransfer')
				{
					if(ach!=1 && wire!=1 && express!=1 && cardpay!=1 && book!=1 && fund!=1 && loan!=1 && integratedpayables!=1)
						break;
					else
					{
						current_dashboard.push("Transfers & Payments Approval");
						current++;
					}
				}
		
			case 'calendar':
				if(widgetMenu[i]=='calendar')
				{
					current_dashboard.push("Calendar");
					current++;
				}
		
			case 'balancetrend':
				if(widgetMenu[i]=='balancetrend')
				{
					if(largerep!=1 && midrep!=1 && investment!=1 && microreporting!=1)
						break;
					else
					{
						current_dashboard.push("Balance Trends");
						current++;
					}
				}
			}
	}
	
	for(var j=0;j<panels.length;j++)
	{
		if(jQuery.inArray(panels[j].panelName, current_dashboard, 0)==-1)
		{	//alert(current_dashboard[j]);
			available_dashboard.push(panels[j].panelName);
			available++;
		}
	}
	
	writePanels("available_str",available_dashboard,"availablepanels");
	writePanels("current_str",current_dashboard,"currentpanels");
	//alert("current="+current);
	//alert("available="+available);
}

function writePanels(state,dashboard,outputID)
{
	var state='';
	var desc='';
	state+='<table width="100%" cellspacing="2" cellpadding="0" border="0">';
	if(outputID=="availablepanels")
	{
		state+='<tr id="recoEntitlement" style="display:none;">';
		state+='<td colspan="3" style="padding-bottom:8px">';
		state+='The panels checked below are recommended based on your current entitlements';
		state+='<td>';
		state+='</tr>';
	}
	if(dashboard.length > 0)
	{
		for(var i=0;i<dashboard.length;i++)
		{
			state+='<tr>';
			state+='<td width="4%" align="center">';
			if(outputID=="availablepanels")
			{
				var dashboardid = dashboard[i].replace(/ /gi,"_");
				state+='<input type="checkbox" class="availablepanels" id='+dashboardid+'>';
			}
			else
				state+='<img src="../images/checksmall.gif" style="padding-bottom:6px">';
			state+='</td>';
			state+='<td width="33%" style="font-weight:bold" class="paneldescription">'+dashboard[i];
			if(outputID=="availablepanels")
			{
				for(var l=0;l<panels.length;l++)
				{
					if(panels[l].panelName==dashboard[i])
					{
						if(panels[l].recommended=="yes")
							state+=' <img src="../images/star.png">';
					}
				}
			}
			state+='</td>';
			state+='<td>';
			for(var k=0;k<panels.length;k++)
			{
				if(panels[k].panelName==dashboard[i])
				{
					desc = panels[k].panelDesc;
					break;
				}
			}
			state+=desc;
			state+='</td>';
			state+='</tr>';
		}
		state+='<tr>';
		state+='</tr>';
		state+='</table>';
		
		$("#"+outputID).html(state);
		
		if(outputID=="availablepanels")
		{
			$("#"+outputID).find("td.paneldescription").each(function(i){
				var getHTML = $(this).html();
				if((getHTML.indexOf("Important Account Balances")!=-1) || (getHTML.indexOf("Calendar")!=-1) || (getHTML.indexOf("Transfers &amp; Payments Approval")!=-1) || (getHTML.indexOf("Recent Transactions")!=-1) || (getHTML.indexOf("Exceptions Decision")!=-1) || (getHTML.indexOf("Shortcuts")!=-1))
				{
					$("#recoEntitlement").show();
					$(this).prev().find("input").attr('checked','checked');
				}
			});
		}
	}
	else
	{
		if(outputID=="availablepanels")
			$("#availablepanels").html('<strong>All panels are currently enabled.</strong>');
		if(outputID=="currentpanels")
			$("#currentpanels").html('<strong>No panels are currently enabled.</strong>');
	}
}