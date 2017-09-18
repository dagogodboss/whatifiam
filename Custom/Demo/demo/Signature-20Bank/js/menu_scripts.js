// JavaScript Document
var subMenustr = "";
currentcolumn = 0;
finalsubMenucount = 0;
maxItemsadded = 0;
addedItems = 0;
Submenucount = 0;
count = 0;
//This function will read from record1 of the modules.txt file  
//the menu options that were selected to be present in the demo. 
//The values are stored in the var mainMenu, defined in modules_....html
function getMenu() {

    var current = eval("record1");
    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record1.length; i++) {
        mainMenu[i] = current[i];
    }
} //end getMenu

function showMenuItem(id) {
    var check = 0;

    for (var i = 0; i < mainMenu.length; i++) {
        if (mainMenu[i] == id) {
            check = 1;
            i = mainMenu.length;
        } //if
    } //for
    return check;
} //end showMenuItem

//This function will read from record2 of the modules.txt file  
//the Loan options that were selected to be present in the demo. 
//The values are stored in the var loanMenu, defined in modules_....html
function getLoanMenu() {

    var current = eval("record2");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record2.length; i++) {

        loanMenu[i] = current[i];

    }

} //end getLoanMenu

function showLoanItem(id) {
    var check = 0;

    for (var i = 0; i < loanMenu.length; i++) {
        if (loanMenu[i] == id) {
            check = 1;
            i = loanMenu.length;
        } //if
    } //for
    return check;
} //end showLoanItem



//This function will read from record3 of the modules.txt file  
//the Wire options that were selected to be present in the demo. 
//The values are stored in the var wireMenu, defined in modules_....html
function getWireMenu() {
    var current = eval("record3");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record3.length; i++) {
        wireMenu[i] = current[i];
    }
} //end getWireMenu

function showWireItem(id) {
    var check = 0;

    for (var i = 0; i < wireMenu.length; i++) {
        if (wireMenu[i] == id) {
            check = 1;
            i = wireMenu.length;
        } //if
    } //for
    return check;
} //end showWireItem

//This function will read from record4 of the modules.txt file  
//the ACH options that were selected to be present in the demo. 
//The values are stored in the var achMenu, defined in modules_....html
function getACHMenu() {
    var current = eval("record4");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record4.length; i++) {
        achMenu[i] = current[i];
    }
} //end getACHMenu

function showACHItem(id) {
    var check = 0;

    for (var i = 0; i < achMenu.length; i++) {
        if (achMenu[i] == id) {
            check = 1;
            i = achMenu.length;
        } //if
    } //for
    return check;
} //end showACHItem

function getReportDownloadMenu() {

    var current = eval("Report_download");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < Report_download.length; i++) {
        reportMenu[i] = current[i];
    }
}
function showReportDownloadItem(id) {

    var check = 0;

    for (var i = 0; i < reportMenu.length; i++) {

        if (reportMenu[i] == id) {
            check = 1;
            i = reportMenu.length;
        } //if
    } //for
    return check;
}

function getBillPayType() {

    var billpayURL = '';
    var billpaytypevalue = eval("billpaytype");
    if (billpaytypevalue == 'oldbillpay')
        billpayURL = '../billpay/billpay.html';
    else if (billpaytype == 'entity')
        billpayURL = '../bill-pay/entity.html';
    /*else if(billpaytype == 'nonentity')
       billpayURL = '../bill-pay/main.html';*/

    return billpayURL;
}

function getSeparateEntryFromApproval() {

    var seperateEntry = eval("seperate_entry");
    if (seperateEntry == 'enable') {
        $("#seperateentrymsg").show();
        $("#seperateentrysubmitapproval").hide();
        $("#seperateentrybtn1").hide();
        $("#seperateentrybtn2").show();
        $("#content_title_text").html('ACH Collect Money - Request Verification');
        $("#seperateentrymsg1").html('Review the payment information for this request. Click "Submit for approval" to place the request into the transmit queue. To select a different template, go to  <a href="../ach/collect.html" class="default">Collect Money - ACH</a>.');
    }

}

function getbackgroundimage() {
    var current = eval("Demo_background");
    if (current == 'yes')
        return true;
    else
        return;
}

//The below function is to be called onload of the pages which do not call Writemainmenu function onload of the body

function Demo_backgroundimage() {
    var background = false;
    background = getbackgroundimage();

    if (background == true) {
        document.body.style.background = 'url(../images/newimages/watermark-demo.gif)';

        if (document.getElementById('cell_content_content') != null) {
            document.getElementById('cell_content_content').id = 'cell_content_content_opacity';

        }
    }
}

//Start menu Section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//function writeMainMenu
//This function will write the <ul> tag in the menu tabs
//This function calls the get...Menu and showMenuItem functions  
//to determine if the tab should be displayed
function writeMainMenu(id) {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var mainMenuStr = '';
    var testWireRpt = false; var testStmt = false; var testDown = false; var testCard = false;
    var testLoanRpt = false; var temainMenuStrpt = false; var testAcct = false;
    var testExpr = false; var testBook = false; var testFunds = false; var testLoans = false;
    var testBpmnt = false; var testBpay = false; var testCred = false; var testACH = false;
    var testUp = false; var testWires = false; var testSchd = false;
    var testStop = false; var testPP = false; var testEnhPP = false; var testFAR = false;
    var testPAR = false; var testDAR = false; var testChk = false; var temainMenuStrDC = false; var testImageSearch = false;
    var testMicro = false; var testIntegratedpayables = false; var testLarge = false; var testMid = false; var testAchPP = false;
    var testDesa = false; var testLockBox = false;

    getMenu(); getLoanMenu(); getWireMenu(); getACHMenu();


    //Code for Background demo watermark
    Demo_backgroundimage();

    var titleBranding = eval("title_branding");
    //Reporting Section #################################################################

    rc = showMenuItem('inwirerpt');
    if (rc == '1') {
        testWireRpt = true;

    }
    rc = showMenuItem('statements');
    if (rc == '1') {
        testStmt = true;

    }
    rc = showMenuItem('filedown');
    if (rc == '1') {
        testDown = true;

    }
    rc = showMenuItem('cardrpt');
    if (rc == '1') {
        testCard = true;

    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        testLoanRpt = true;

    }
    rc = showMenuItem('microreporting');
    if (rc == '1') {
        testMicro = true;

    }
    rc = showMenuItem('reporting');
    if (rc == '1') {
        temainMenuStrpt = true;
    }
    rc = showMenuItem('account');
    if (rc == '1') {
        testAcct = true;

    }
    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;

    }
    rc = showMenuItem('midreporting');
    if (rc == '1') {
        testMid = true;

    }

    rc = showMenuItem('desa');
    if (rc == '1') {
        testDesa = true;
    }
    //End Reporting Section #################################################################

    //Transfers and Payments Section #################################################################
    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('repetitive');
        rc2 = showWireItem('freeform');
        if ((rc1 == '1') || (rc2 == '1')) {
            testWires = true;
            testSchd = true;
        } //end wire and at least one type
    }
    rc = showMenuItem('fileup');
    if (rc == '1') {
        testUp = true;
    }
    rc = showMenuItem('ach');

    if (rc == '1') {
        rc1 = showACHItem('payment');
        rc2 = showACHItem('federal');
        rc3 = showACHItem('state');
        rc4 = showACHItem('collection');
        rc5 = showACHItem('child');
        rc6 = showACHItem('stp820');
        rc7 = showACHItem('ppdcoll');
        rc8 = showACHItem('ccdpay');
        rc9 = showACHItem('iat');
        rc10 = showACHItem('iatcoll');
        rc11 = showACHItem('ctx');
        rc12 = showACHItem('ctxcoll');
        rc13 = showACHItem('webcoll');
        rc14 = showACHItem('telcoll');

        if ((rc == '1') && ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1') || (rc7 == '1') || (rc8 == '1') || (rc9 == '1') || (rc10 == '1') || (rc11 == '1') || (rc12 == '1') || (rc13 == '1') || (rc14 == '1'))) {
            testACH = true;
            testSchd = true;
        } //end both ACH and at least one type
    }
    rc = showMenuItem('cardpay');
    if (rc == '1') {
        testCred = true;
        testSchd = true;
    }
    rc = showMenuItem('billpay');
    if (rc == '1') {
        testBpay = true;
    }
    rc = showMenuItem('bill');
    if (rc == '1') {
        testBpmnt = true;
    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        testLoans = true;
        rc1 = showLoanItem('payment');
        rc2 = showLoanItem('advance');
        if ((rc1 == '1') || (rc2 == '1')) {

            testSchd = true;
        } //end both Loan and at least one type
    }
    rc = showMenuItem('funds');
    if (rc == '1') {
        testFunds = true;
    }
    rc = showMenuItem('book');
    if (rc == '1') {
        testBook = true;
        testSchd = true;
    }
    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
        testSchd = true;
    }
    rc = showMenuItem('integratedpayables')
    if (rc == '1') {
        testIntegratedpayables = true;
    }
    rc = showMenuItem('schedule');
    if (rc == '1') {
        testSchd = true;
    }

    //End Transfers and Payments Section #################################################################

    //Accout Services Section #################################################################
    rc = showMenuItem('chkreorder');
    if (rc == '1') {
        if ((temainMenuStrpt) || (testLarge) || (testMid)) {
            testChk = true;
        } //end Check Reorder requires one of the reporting modules
    }
    rc = showMenuItem('deprecon');
    if (rc == '1') {
        testDAR = true;
    }
    rc = showMenuItem('partrecon');
    if (rc == '1') {
        testPAR = true;
    }
    rc = showMenuItem('fullrecon');
    if (rc == '1') {
        testFAR = true;
    }
    rc = showMenuItem('positive');
    if (rc == '1') {
        testEnhPP = true;
    }

    rc = showMenuItem('achpospay');
    if (rc == '1') {
        testAchPP = true;
    }

    /*rc = showMenuItem('opositive');
    if (rc == '1') {
        testPP = true;
    }*/
    rc = showMenuItem('stop');
    if (rc == '1')
        testStop = true;
    rc = showMenuItem('image');
    if (rc == '1')
        testImageSearch = true;
    rc = showMenuItem('Lockbox');
    if (rc == '1')
        testLockBox = true;
    //End Accout Services Section #################################################################

    //AdminimainMenuStration Section #################################################################
    testSelfAdm = true;
    lastItem = "self_admin";

    testSeAdmin = (showMenuItem('admin') && (showMenuItem('positive') || showMenuItem('fullrecon')));
    rc = showMenuItem('admin');
    if (rc == '1') {
        testCoAdm = true;
        if (lastItem == '')
            lastItem = "admin";
    }
    testComm = true;
    if (lastItem == '')
        lastItem = "comm";

    //End AdminimainMenuStration Section #################################################################

    mainMenuStr += '<div id="royal-nav">';
    mainMenuStr += '<ul class="sf-menu sf-beb sf-js-enabled sf-shadow">';

    // Check If  welcome Tab is selected $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

    mainMenuStr += '<li id="welcome_li" class="top-item-text">';
    if (showMenuItem('dashboard') == "1") {
		mainMenuStr += '<a href="..\/modules_main\/modules_main_widgets.html';
        mainMenuStr += '?splash=0&';
        mainMenuStr += (titleBranding == "yes") ? 'tbrand=1"' : 'tbrand=0"';
    }
	else
	{
		mainMenuStr += '<a href="..\/modules_main\/modules_main.html"';
	}
    mainMenuStr += ' menuItem="wc" class="menuItem">Welcome<\/a><\/li>';

    if ((testLarge) || (testMid) || (temainMenuStrpt) || (testMicro) || (testLoanRpt) || (testCard) || (testDown) || (testStmt) || (testWireRpt) || (testDesa)) {
        mainMenuStr += '<li id="menu_reports_li" class="top-item"><a href="..\/modules_main\/modules_reports.html" class="top-item-text  sf-with-ul" ><span class="menuItem" menuItem="rep">Reports<\/span><span class="sf-sub-indicator"> »</span><\/a>';
        mainMenuStr += writeReportsSubContent(mainMenuStr);
        mainMenuStr += '<\/li>';
    }

    if ((testSchd) || (testExpr) || (testBook) || (testFunds) || (testLoans) || (testBpmnt) || (testBpay) || (testCred) ||
            (testACH) || (testIntegratedpayables) || (testUp) || (testWires)) {
        mainMenuStr += '<li id="menu_tranpay_li" class="top-item"><a href="..\/modules_main\/modules_tranpay.html"  class="top-item-text  sf-with-ul" ><span class="menuItem" menuItem="tranNpay">Transfers and Payments<\/span><span class="sf-sub-indicator"> »</span><\/a>';
        mainMenuStr += writeTransfersSubContent(mainMenuStr);
        mainMenuStr += '<\/li>';
    }
    if ((testStop) || (testPP) || (testAchPP) || (testEnhPP) || (testFAR) || (testPAR) || (testDAR) || (testChk) || (temainMenuStrDC) || (testImageSearch) || (testLockBox)) {

        mainMenuStr += '<li id="menu_acctserv_li" class="top-item"><a href="..\/modules_main\/modules_acctserv.html"  class="top-item-text  sf-with-ul"><span class="menuItem"  menuItem="acctServ">Account Services<\/span><span class="sf-sub-indicator"> »</span><\/a>';
        mainMenuStr += writeAccountServicesSubContent(mainMenuStr);
        mainMenuStr += '<\/li>';
    }
    if ((testComm) || (testSeAdmin) || (testSelfAdm) || (testCoAdm)) {

        mainMenuStr += '<li id="menu_admin_li" class="top-item"><a href="..\/modules_main\/modules_admin.html"  class="top-item-text  sf-with-ul"><span class="menuItem"  menuItem="admin">Administration<\/span><span class="sf-sub-indicator"> »</span><\/a>';
        mainMenuStr += writeAdministrationSubContent(mainMenuStr);
        mainMenuStr += '<\/li>';
    }

    helpwriteContent(id, mainMenuStr);
    liId = id + "_li";
    $('#' + liId).attr("class", "top-item  current-page-item");


    // End AdminimainMenuStration Tab  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //  $('#reports_ul').attr({ style: 'width: 55em' });
    mainpage();

}//end writeMainMenu


// Functions to get the maximum number of columns in a menu tab div
function GetMaxColumns(max_columns, total_items, items_per_column) {
    if (max_columns <= 1 || (items_per_column > total_items))
        return 1;

    var calculatedColumns = parseInt(total_items / items_per_column);

    if (total_items > (items_per_column * calculatedColumns))
        calculatedColumns++;

    if (calculatedColumns < max_columns)
        return calculatedColumns;

    return max_columns;
}
// Writes  the  sub menu items for the Reports tab                                                                                     
function writeReportsSubContent() {
    var maxColumns = 3; var maxSubmenuitems = 10;
   var remainingItems = 0;
    initializeVars();
    CountServicesInMenu("largereporting");
    CountServicesInMenu("midreporting");
    CountServicesInMenu("Imagingreturns");
    CountServicesInMenu("microreporting");
    CountServicesInMenu("reporting");
    CountServicesInMenu("achreporting");
    CountServicesInMenu("investmentreporting");
    CountServicesInMenu("loanrpt");
    CountServicesInMenu("cardrpt");
    CountServicesInMenu("filedownrpt");
    CountServicesInMenu("statementsrpt");
    CountServicesInMenu("inwirerpt");
    CountServicesInMenu("desarpt");
    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);
    avgSubmenu = Math.round(count / maxColumns);
    createMenuHeader('reports_ul')
    currentcolumn++;
    createMenu(maxColumns, GetDepositAcntRepMenuItems());
    createMenu(maxColumns, GetDepositRepMenuItems());
    createMenu(maxColumns, GetRetItemsMenuItems());
    createMenu(maxColumns, GetAccountReportsMenuItems());
    createMenu(maxColumns, GetDepositReportsMenuItems());
    createMenu(maxColumns, GetAchReportsMenuItems());
    createMenu(maxColumns, GetInvReportMenuItems());
    createMenu(maxColumns, GetLoanRepMenuItems());
    createMenu(maxColumns, GetCreditCardRepMenuItems());
    createMenu(maxColumns, GetDownloadableRepMenuItems());
    createMenu(maxColumns, GetStatemntNDocMenuItems());
    createMenu(maxColumns, GetWireRepMenuItems());
    createMenu(maxColumns, GetEscrowRepMenuItems());
    subMenustr += '<\/td><\/tr><\/table><\/li><\/ul>';
    return subMenustr;
}
// Writes  the  sub menu items for the Transfers and Payments tab    
function writeTransfersSubContent() {
    var maxColumns = 3; var maxSubmenuitems = 10;
    var remainingItems = 0;
    initializeVars();
    CountServicesInMenu("wire");
    CountServicesInMenu("surePayroll");
    CountServicesInMenu("fileUpload");
    CountServicesInMenu("intPay");
    CountServicesInMenu("ach");
    CountServicesInMenu("creditCard");
    CountServicesInMenu("billPay");
    CountServicesInMenu("billPayment");
    CountServicesInMenu("loan");
    CountServicesInMenu("fundsTrans");
    CountServicesInMenu("bookTrans");
    CountServicesInMenu("expressTrans");
    CountServicesInMenu("schReq");
    CountServicesInMenu("escrowTrans");
    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);
    avgSubmenu = Math.round(count / maxColumns);
    createMenuHeader('transfers_ul')
    currentcolumn++;
    createMenu(maxColumns, GetSchReqMenuItems());
    createMenu(maxColumns, GetExpressTransMenuItems());
    createMenu(maxColumns, GetBookTransMenuItems());
    createMenu(maxColumns, GetFundsTransMenuItems());
    createMenu(maxColumns, GetLoanMenuItem());
    createMenu(maxColumns, GetBillPaymentMenuItems());
    createMenu(maxColumns, GetBillPayMenuItems());
    createMenu(maxColumns, GetCreditCardMenuItems());
    createMenu(maxColumns, GetAchMenuItems());
    createMenu(maxColumns, GetIntPayMenuItems());
    createMenu(maxColumns, GetFileUploadMenutItems());
    createMenu(maxColumns, GetWireMenuItems());
    createMenu(maxColumns, GetSurePayrollMenuItem());
    createMenu(maxColumns, GetEscrowAccountTransferMenuItem());
    subMenustr += '<\/td><\/tr><\/table><\/li><\/ul>';
    return subMenustr;
}
// Writes  the  sub menu items for the Account services tab    
function writeAccountServicesSubContent() {
    var maxColumns = 3; var maxSubmenuitems = 10;
   var remainingItems = 0;
    initializeVars();
    CountServicesInMenu("depreconAcntServ");
    CountServicesInMenu("partreconAcntSer");
    CountServicesInMenu("fullreconAcntSer");
    CountServicesInMenu("achPosPayAcntServ");
    CountServicesInMenu("stopAcntSer");
    CountServicesInMenu("posPayAcntSer");
    CountServicesInMenu("bcmAcntSer");
    CountServicesInMenu("capturerdcAcntSer");
    CountServicesInMenu("LockboxAcntSer");
    CountServicesInMenu("imageAcntSer");
    CountServicesInMenu("chkreorderAcntSer");
    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);
    avgSubmenu = Math.round(count / maxColumns);
    createMenuHeader('acctserv_ul');
    currentcolumn++;
    createMenu(maxColumns, GetStopPayMenuItems());
    createMenu(maxColumns, GetAchPosPayMenuItems());
    createMenu(maxColumns, GetPosPayMenuItems());
    createMenu(maxColumns, GetFullReconMenuItems());
    createMenu(maxColumns, GetPartialReconMenuItems());
    createMenu(maxColumns, GetDepositReconMenuItems());
    createMenu(maxColumns, GetCheckOrderMenuItems());
    createMenu(maxColumns, GetImageSrchMenuItems());
    createMenu(maxColumns, GetRDCMenuItems());
    createMenu(maxColumns, GetLockBoxMenuItems());
    createMenu(maxColumns, GetezBusinessCardMgmtMenuItems());
    subMenustr += '<\/td><\/tr><\/table><\/li><\/ul>';
    return subMenustr;
}

function configureMenuItems(maxColumns, length) {
    var flag = false;
    if (finalsubMenucount >= avgSubmenu)
        flag = true;
    else
        if (((avgSubmenu - finalsubMenucount) == 1) || (((finalsubMenucount + length - avgSubmenu) >Math.round( avgSubmenu/2))))
            flag = true;
   
    if (flag && currentcolumn < (maxColumns)) {
        // Is this any column besides the first column?
        // If it is, see if the remaining items should be put here based on previous column items
        if (currentcolumn > 0 && maxColumns > 2) {
            remainingItems = count - addedItems;

            if ((remainingItems + finalsubMenucount) > maxItemsadded && remainingItems >= 4) // 4 is just an arbitrary number here
            {
                avgSubmenu = addedItems;
                if ((currentcolumn + 1) == maxColumns)
                    subMenustr += '<\/td><td valign="top" class="last-sub-menu">';
                else
                    subMenustr += '<\/td><td valign="top">';
                currentcolumn++;
                finalsubMenucount = 0;
            }
        }
        else {
            avgSubmenu = addedItems;
            // Start a new column
            if ((currentcolumn + 1) == maxColumns)
                subMenustr += '<\/td><td valign="top" class="last-sub-menu">';
            else
                subMenustr += '<\/td><td valign="top">';
            currentcolumn++;
            finalsubMenucount = 0;
        }
    }
    if (finalsubMenucount > 0)
        subMenustr += "<div class=\"royal-sub-menu-divider-wrapper\"><hr class=\"royal-sub-menu-divider\" /></div>";

    if (finalsubMenucount > maxItemsadded)
        maxItemsadded = finalsubMenucount;
}
// Writes  the  sub menu items for the Administration tab    
function writeAdministrationSubContent() {
    initializeVars();
    var maxColumns = 3; var maxSubmenuitems = 10;
    var remainingItems = 0;
    CountServicesInMenu("communication");
    CountServicesInMenu("companyAdmin");
    CountServicesInMenu("servAdmin");
    CountServicesInMenu("selfAdmin");
    maxColumns = GetMaxColumns(maxColumns, count, maxSubmenuitems);
    avgSubmenu = Math.round(count / maxColumns);
    if (avgSubmenu < 10)
        avgSubmenu = 10;
    createMenuHeader('administration_ul');
    currentcolumn++;
    createMenu(maxColumns, GetCommunicationMenuItem());
    createMenu(maxColumns, GetCompAdminMenuItem());
    createMenu(maxColumns, GetServiceAdminMenuItems());
    createMenu(maxColumns, GetSelfAdminMenuItems());
    subMenustr += '<\/td><\/tr><\/table><\/li><\/ul>';
    return subMenustr;
}

function createMenu(maxColumns, Elements_Array) {
    if (Elements_Array.length > 1) {
        configureMenuItems(maxColumns, Elements_Array.length);
        subMenustr = addMenuItmes(Elements_Array, subMenustr);
        finalsubMenucount += Elements_Array.length;
        addedItems += Elements_Array.length;
    }
}
function createMenuHeader(id) {
    subMenustr += '<ul class="sub-menu" id="' + id + '" >';
    subMenustr += '<li> <div style="background:url(../images/newimages/GradientImageDiv.png)  repeat-x scroll #c0c0c0;background-size:100% 100%;" class="royal-sub-menu-wrapper" id="transfers_submenu_div">';
    subMenustr += '<table cellspacing="0" cellpadding="0" border="0" style="border-style: none; border-collapse: collapse;" >';
    subMenustr += '<tr><td valign="top" width="33%">';

}
//End Menu Section++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function initializeVars() {
    subMenustr = "";
    currentcolumn = 0;
    finalsubMenucount = 0;
    maxItemsadded = 0;
    addedItems = 0;
    Submenucount = 0;
    count = 0;
    avgSubmenu = 0;
}
function addMenuItmes(Elements_Array, str) {
    var k= 2;
    subMenustr += '<div class="royal-sub-menu-header ';
    if (Elements_Array[0].menuItem != "")
        subMenustr += 'menuItem" menuItem="' + Elements_Array[0].menuItem;

    subMenustr += '">' + Elements_Array[0].linkText + '</div>';
    for (var i = 1; i < Elements_Array.length; i++) {
        subMenustr += '<div class="royal-sub-menu-item"><a target=';
        if (Elements_Array[i].target!="") {
            subMenustr += '"' + Elements_Array[i].target + '"';
        }
        else
            subMenustr += '"_self"';
        subMenustr += ' href="' + Elements_Array[i].href + '"><span class="function-item-anchor'
        if (Elements_Array[i].menuItem != "")
            subMenustr += ' menuItem" menuItem="' + Elements_Array[i].menuItem;
        subMenustr += '" onMouseOver="this.style.textdecoration =\'underline\';" onMouseOut="this.style.textdecoration =\'none\';">' + Elements_Array[i].linkText + '</span></a></div>';
    }
    return subMenustr;
}
function CountServicesInMenu(service) {
    var length = 0;
    switch (service) {
        case "escrowTrans":
            length = GetEscrowAccountTransferMenuItem().length;
            break;
        case "schReq":
            length = GetSchReqMenuItems().length;
            break;
        case "expressTrans":
            length = GetExpressTransMenuItems().length;
            break;
        case "bookTrans":
            length = GetBookTransMenuItems().length;
            break;
        case "fundsTrans":
            length = GetFundsTransMenuItems().length;
            break;
        case "loan":
            length = GetLoanMenuItem().length;
            break;
        case "billPayment":
            length = GetBillPaymentMenuItems().length;
            break;
        case "billPay":
            length = GetBillPayMenuItems().length;
            break;
        case "creditCard":
            length = GetCreditCardMenuItems().length;
            break;
        case "ach":
            length = GetAchMenuItems().length;
            break;
        case "intPay":
            length = GetIntPayMenuItems().length;
            break;
        case "fileUpload":
            length = GetFileUploadMenutItems().length;
            break;
        case "surePayroll":
            length = GetSurePayrollMenuItem().length;
            break;
        case "wire":
            length = GetWireMenuItems().length;
            break;
        case "largereporting":
            length = GetDepositAcntRepMenuItems().length;
            break;
        case "midreporting":
            length = GetDepositRepMenuItems().length;
            break;
        case "Imagingreturns":
            length = GetRetItemsMenuItems().length;
            break;
        case "microreporting":
            length = GetAccountReportsMenuItems().length;
            break;
        case "reporting":
            length = GetDepositReportsMenuItems().length;
            break;
        case "investmentreporting":
            length = GetInvReportMenuItems().length;
            break;
        case "achreporting":
            length = GetAchReportsMenuItems().length;
            break;
        case "loanrpt":
            length = GetLoanRepMenuItems().length;
            break;
        case "cardrpt":
            length = GetCreditCardRepMenuItems().length;
            break;
        case "filedownrpt":
            length = GetDownloadableRepMenuItems().length;
            break;
        case "statementsrpt":
            length = GetStatemntNDocMenuItems().length;
            break;
        case "inwirerpt":
            length = GetWireRepMenuItems().length;
            break;
        case "desarpt":
            length = GetEscrowRepMenuItems().length;
            break;
        case "communication":
            length = GetCommunicationMenuItem().length;
            break;
        case "companyAdmin":
            length = GetCompAdminMenuItem().length;
            break;
        case "servAdmin":
            length = GetServiceAdminMenuItems().length;
            break;
        case "selfAdmin":
            length = GetSelfAdminMenuItems().length;
            break;
        case "bcmAcntSer":
            length = GetezBusinessCardMgmtMenuItems().length;
            break;
        case "LockboxAcntSer":
            length = GetLockBoxMenuItems().length;
            break;
        case "capturerdcAcntSer":
            length = GetRDCMenuItems().length;
            break;
        case "imageAcntSer":
            length = GetImageSrchMenuItems().length;
            break;
        case "chkreorderAcntSer":
            length = GetCheckOrderMenuItems().length;
            break;
        case "posPayAcntSer":
            length = GetPosPayMenuItems().length;
            break;
        case "fullreconAcntSer":
            length = GetFullReconMenuItems().length;
            break;
        case "depreconAcntServ":
            length = GetDepositReconMenuItems().length;
            break;
        case "partreconAcntSer":
            length = GetPartialReconMenuItems().length;
            break;
        case "stopAcntSer":
            length = GetStopPayMenuItems().length;
            break;
        case "achPosPayAcntServ":
            length = GetAchPosPayMenuItems().length;
            break;
    }
    if (length > 1) {
        Submenucount++;
        count += length;
    }

}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//function writeFavorites
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function  
//to determine if the favorite should be displayed
function writeFavorites(id) {

    var rc;
    var str = '';
    var testExpr = false; var testStop = false;

    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
    }

    str += '<span class="leftContentListHeader">Favorites: (<a href="..\/customer_support\/favorites.html">Edit<\/a>)';
    str += '<\/span><ul class="leftContentList">';
    if (testExpr) {
        str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer entry<\/a><\/li>';
    }
    if (testStop) {
        str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
    }
    str += '<\/ul>';

    helpwriteContent(id, str);


}
//end writeFavorites
function writeFavoritesWidgets(id) {
    var rc;
    var str = '';
    var testExpr = false; var testStop = false;

    rc = showMenuItem('express');
    if (rc == '1') {
        testExpr = true;
    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        testStop = true;
    }

    str = '<table cellspacing="0" cellpadding="4s" border="0"><tr>';
    if (testExpr) {
        str += '<td width="5%" valign="top">><\/td>';
        str += '<td width="48%" valign="top"> <a href="..\/express_transfer\/express_entry.html" style="text-decoration:none; color:#000;"><span menuitem="expTransReq" class="menuItem">Express transfer entry</span> <\/a>';
    }
    str += '<\/td>';
    if (testStop) {
        str += '<td  width="5%" valign="top">><\/td>';
        str += '<td width="45% valign="top"><a href="..\/stop_payment\/stoppay_request.html" style="text-decoration:none; color:#000;"><span menuitem="stopPayReq" class="menuItem">Stop payment request</span><\/a>';
    }
    str += '<\/td><\/tr><\/table>';

    if (!testExpr && !testStop) {
        str = '';
        document.getElementById('no_favorites').style.display = '';
    }

    helpwriteContent(id, str);
}
//end writeFavorites

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//function writeSavedReports
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function  
//to determine if the saved reports should be displayed
function writeSavedReports(id) {
    var rc;
    var str1 = '', str = '';
    var testAcct = false;
    var testLarge = false;
    var testControlled = false;
    var testoperating_ach = false;
    var testoperating_checks = false;
    var testscheduled = false;

    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
    }
    rc = get_savedreports('controlled');

    if (rc == '1') {
        testControlled = true;
    }
    rc = get_savedreports('operating_ach');
    if (rc == '1') {
        testoperating_ach = true;
    }
    rc = get_savedreports('operating_checks');
    if (rc == '1') {
        testoperating_checks = true;
    }
    rc = get_savedreports('scheduled');
    if (rc == '1') {
        testscheduled = true;
    }

    if (testLarge && testControlled)
        str += '<li><a href="..\/large_reporting\/controlled.html">Controlled <br\/> Disbursement Report<\/a><\/li>';
    else if (testAcct && testControlled)
        str += '<li><a href="..\/account_reporting\/controlled.html">Controlled <br\/> Disbursement Report<\/a><\/li>';
    if (testLarge && testoperating_ach)
        str += '<li><a href="..\/large_reporting\/operating.html">Operating Account <br\/> ACH/WT Credits<\/a><\/li>';
    else if (testAcct && testoperating_ach)
        str += '<li><a href="..\/account_reporting\/operating.html">Operating Account <br\/> ACH/WT Credits<\/a><\/li>';
    if (testLarge && testoperating_checks)
        str += '<li><a href="..\/large_reporting\/operating_check.html">Operating Account <br\/> Checks Paid<\/a><\/li>';
    else if (testAcct && testoperating_checks)
        str += '<li><a href="..\/account_reporting\/operating_check.html">Operating Account <br\/> Checks Paid<\/a><\/li>';
    if (testLarge && testscheduled)
        str += '<li><a href="..\/large_reporting\/account_activity.html">Scheduled <br\/> Deposit Account Report<\/a><\/li>';
    else if (testAcct && testscheduled)
        str += '<li><a href="..\/account_reporting\/account_activity.html">Scheduled <br\/> Deposit Account Report<\/a><\/li>';
    str += '<\/ul>';

    if (testAcct || testLarge) {
        str1 += '<span class="leftContentListHeader">Saved Reports: ';
        if (testLarge)
            str1 += '(<a href="..\/large_reporting\/manage_saved_reports.html">Edit<\/a>)';
        else if (testAcct)
            str1 += '(<a href="..\/account_reporting\/manage_saved_reports.html">Edit<\/a>)';
        str1 += '<\/span><ul class="leftContentList">';
        str = str1 + str;
        helpwriteContent(id, str);
        mainpage();
        $("#" + id).attr('class', 'divContentList');
    } //end testAcct	and testLarge	
} //end writeSavedReports
function writeSavedReportsWidgets(id) {
    var rc;
    var str1 = '', str = '';
    var testAcct = false;
    var testLarge = false;
    var testControlled = false;
    var testoperating_ach = false;
    var testoperating_checks = false;
    var testscheduled = false;


    var link1 = ' <a href="..\/large_reporting\/controlled.html" style="text-decoration:none; color:#000;" >Controlled  Disbursement Report<\/a>';
    var link2 = ' <a href="..\/account_reporting\/controlled.html" style="text-decoration:none; color:#000;" >Controlled  Disbursement Report<\/a>';
    var link3 = ' <a href="..\/large_reporting\/operating.html" style="text-decoration:none; color:#000;">Operating Account ACH/WT Credits<\/a>';
    var link4 = ' <a href="..\/account_reporting\/operating.html" style="text-decoration:none; color:#000;">Operating Account ACH/WT Credits<\/a>';
    var link5 = ' <a href="..\/large_reporting\/operating_check.html" style="text-decoration:none; color:#000;">Operating Account Checks Paid<\/a>';
    var link6 = ' <a href="..\/account_reporting\/operating_check.html" style="text-decoration:none; color:#000;">Operating Account Checks Paid<\/a>';
    var link7 = ' <a href="..\/large_reporting\/account_activity.html" style="text-decoration:none; color:#000;">Scheduled Deposit  Account Report<\/a>';
    var link8 = ' <a href="..\/account_reporting\/account_activity.html" style="text-decoration:none; color:#000;">Scheduled <br\/> Deposit Account Report<\/a>';
    rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
    }
    rc = get_savedreports('controlled');

    if (rc == '1') {
        testControlled = true;
    }
    rc = get_savedreports('operating_ach');
    if (rc == '1') {
        testoperating_ach = true;
    }
    rc = get_savedreports('operating_checks');
    if (rc == '1') {
        testoperating_checks = true;
    }
    rc = get_savedreports('scheduled');
    if (rc == '1') {
        testscheduled = true;
    }
    str += '<table cellpadding="3" cellspacing="0"  ><tr>';
    //	for (p=0;p<4;p++)//loop through rows
    //{

    var cond = '';
    count = 0;
    if (testLarge && testControlled) {
        //	cond=testLarge && testControlled;
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link1 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    else if (testAcct && testControlled) {
        //	cond=testAcct && testControlled;
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link2 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    if (testLarge && testoperating_ach) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link3 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testoperating_ach) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link4 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }

    if (testLarge && testoperating_checks) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link5 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testoperating_checks) {
        str += '<td  valign="top" >><\/td>';
        str += '<td >' + link6 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }


    if (testLarge && testscheduled) {
        str += '<td  valign="top">><\/td>';
        str += '<td >' + link7 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }
    else if (testAcct && testscheduled) {
        str += '<td valign="top" >><\/td>';
        str += '<td >' + link8 + '<\/td>';
        count = count + 1;
        if (count == 2) {
            str += '<\/tr><tr>';
            count = 0;
        }
    }

    if (testLarge && (!testscheduled && !testoperating_checks && !testoperating_ach && !testControlled)) {
        str = '';
        document.getElementById('hidden_saved').style.display = '';
    }

    str += '<\/table>';




    if ((testControlled || testoperating_checks || testoperating_ach || testscheduled) && testLarge) {
        document.getElementById('saved_reports_section').style.display = '';

        helpwriteContent(id, str);
    }
    else {
        document.getElementById('saved_reports_section').style.display = 'none';
    } //end testAcct	and testLarge	
    mainpage();
} //end writeSavedReports
function get_condition(cond) {
}
//This function will read from saved_reports record of the modules.txt file  
function get_savedreports(id) {

    var current = eval("saved_reports");



    var check = 0;

    for (var i = 0; i < saved_reports.length; i++) {

        if (saved_reports[i] == id) {
            check = 1;
            i = saved_reports.length;
        }
    }
    return check;
}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//function writeQuickLinks
//This function will write the title and the <ul> tag in the left nav
//This function calls the showMenuItem function  
//to determine if the QuickLink should be displayed
function writeQuickLinks(id) {
    var rc;
    var str = '';
    var testPPay = false; var testInvRep = false; var testStop = false; var testAcct = false; var testRpt = false;
    var testLoan = false; var testAdv = false; var testPay = false; var testWire = false;
    var testRep = false; var testFree = false; var testAdmin = false;
    var testUp = false; var testCC = false; var testLPay = false; var testSchd = false; testImageSearch = false;
    var testMicro = false; var testStatements = false; var testACHPPException = false; var testPPException = false;
    var testpremium = false; var testExpress = false; var testFunds = false; var testBook = false; var testACH = false;
    var testACHsend = false; var testACHcollect = false, testAchRep = false;

    if (id == 'q_acct_mid_large') {

        rc = showMenuItem('positive');
        if (rc == '1') { testPPay = true; }

        rc = showMenuItem('stop');
        if (rc == '1') { testStop = true; }

        rc = showMenuItem('statements');
        if (rc == '1') { testStatements = true; }

        rc = showMenuItem('image');
        if (rc == '1') { testImageSearch = true; }

        if (testPPay || testStop || testStatements || testImageSearch) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testPPay)
                str += '<li><a href="..\/positive_pay\/except.html">Positive pay <br/>exceptions manager<\/a><\/li>';
            if (testStop)
                str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment <br/>request<\/a><\/li>';
            if (testStatements)
                str += '<li><a href="..\/statements\/statements.html">Statements and <br/>documents - account <br/>selection<\/a><\/li>';
            if (testImageSearch)
                str += '<li><a href="..\/image_search\/image_search_criteria.html"> Image search<br/><\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end if
    } //end q_acct_mid_large

    if (id == 'q_wlc_schd') {
        rc = showMenuItem('schedule');
        if (rc == '1') {
            testSchd = true;
        }
        rc = showMenuItem('express');
        if (rc == '1') { testExpress = true; }

        rc = showMenuItem('funds');
        if (rc == '1') { testFunds = true; }

        rc = showMenuItem('book');
        if (rc == '1') { testBook = true; }

        rc = showMenuItem('loan');
        if (rc == '1') { testLoan = true; }

        rc = showLoanItem('payment');
        if (rc == '1') { testPay = true; }

        rc = showMenuItem('cardpay');
        if (rc == '1') { testCC = true; }

        rc = showMenuItem('ach');
        if (rc == '1') { testACH = true; }



        if (showACHItem('collection') == '1' || showACHItem('ppdcoll') == '1' || showACHItem('iatcoll') == '1' || showACHItem('ctxcoll') == '1' || showACHItem('webcoll') == '1' ||
        showACHItem('telcoll') == '1')
        { testACHcollect = true; }

        (showACHItem('payment') == '1' || showACHItem('ccdpay') == '1' || showACHItem('iat') == '1' || showACHItem('ctx') == '1' ||
        showACHItem('stp820') == '1' || showACHItem('federal') == '1' || showACHItem('state') == '1' || showACHItem('child') == '1')
        { testACHsend = true; }

        rc = showMenuItem('wiremain');
        if (rc == '1') { testWire = true; }

        rc = showWireItem('repetitive');
        if (rc == '1') { testRep = true; }

        rc = showWireItem('freeform');
        if (rc == '1') { testFree = true; }

        if (testSchd) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testExpress)
                str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer request<\/a><\/li>';
            if (testFunds)
                str += '<li><a href="..\/funds_transfer\/funds_entry.html">Funds transfer request<\/a><\/li>';
            if (testBook)
                str += '<li><a href="..\/book_transfer\/entry.html">Book transfer<\/a><\/li>';
            if (testLoan && testPay)
                str += '<li><a href="..\/loan\/payment.html">Loan payment request<\/a><\/li>';
            if (testCC)
                str += '<li><a href="..\/credit_card\/entry.html">Credit card payment entry<\/a><\/li>';
            if (testACH && testACHsend)
                str += '<li><a href="..\/ach\/send.html">Send money<\/a><\/li>';
            if (testACH && testACHcollect)
                str += '<li><a href="..\/ach\/collect.html">Collect money<\/a><\/li>';
            if (testWire && testFree)
                str += '<li><a href="..\/wire\/free_form_entry_header.html?pg=trf2">One time wire entry<\/a><\/li>';
            if (testWire && testRep)
                str += '<li><a href="..\/wire\/rep_entry.html">Template based wire transfer - single request<\/a><\/li>';

            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testSchd
    } //end q_wlc_schd

    if (id == 'q_Return_Items') {
        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/large_reporting\/account_activity_search.html">Account activity<\/a><\/li>';
        str += '<\/ul>';

        helpwriteContent(id, str);
    }

    if (id == 'q_rep_invrep') {
        rc = showMenuItem('investmentreporting');
        if (rc == '1') {
            testInvRep = true;
        }

        if (testInvRep) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/statements\/statements.html">Statements and documents - account selection<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testSchd
    }
    rc = showMenuItem('achreporting');
    if (rc == '1') {
        testAchRep = true;
    }

    if (id == 'q_rep_achrep' || id == 'q_rep_achrep1') {
        
        if (testAchRep) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            // str += '<li><a href="..\/ach\/send.html">Send Money – ACH <\/a><\/li>';
            //str += '<li><a href="..\/ach\/collect.html">Collect Money – ACH <\/a><\/li>';
            if (showMenuItem('multipleapprovals') == "1" && id == 'q_rep_achrep')
                str += '<li><a href="..\/ach\/template_approval.html">ACH Template Approval <\/a><\/li>';
            str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage Alerts<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testAchRep
    }

    if ((id == 'q_acct_qbr') || (id == 'q_acct_sr') || (id == 'q_acct_cr') || (id == 'q_rpt_qbr')) {
        rc = showMenuItem('positive');
        if (rc == '1') {
            testPPay = true;
        }
        if (testPPay) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/positive_pay\/except.html">Positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_acct_qbr or q_acct_sr or q_acct_cr or q_rpt_qbr

    if ((id == 'q_acct_ts') || (id == 'q_acct_tr') || (id == 'q_rpt_ts') || (id == 'q_rpt_adr')) {
        rc = showMenuItem('positive');
        if (rc == '1') {
            testPPay = true;
        }
        rc = showMenuItem('stop');
        if (rc == '1') {
            testStop = true;
        }
        if ((testPPay) || (testStop)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testPPay) {
                str += '<li><a href="..\/positive_pay\/except.html">Ppositive pay exceptions manager<\/a><\/li>';
            }
            if (testStop) {
                str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_acct_ts or q_acct_tr or q_rpt_ts or q_rpt_adr

    if ((id == 'q_loan_sr') || (id == 'q_loan_ar')) {
        rc = showMenuItem('loan');

        if (rc == '1') {
            testLoan = true;
            var rc1 = showLoanItem('advance');
            if (rc1 == '1') {
                testAdv = true;
            }
            var rc2 = showLoanItem('payment');
            if (rc2 == '1') {
                testLPay = true;
            }

        }
        if (testLoan) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testLPay) {
                str += '<li><a href="..\/loan\/payment.html">Loan payment request<\/a><\/li>';
            }
            if (testAdv) {
                str += '<li><a href="..\/loan\/advance.html">Loan advance request<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_sr or q_loan_ar

    if (id == 'q_stmt_sas') {

    } //end q_stmt_sas

    if (id == 'q_cc_ccar') {
        rc = showMenuItem('cardpay');
        if (rc == '1') {
            testCC = true;
        }
        if (testCC) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testCC) {
                str += '<li><a href="..\/credit_card\/entry.html">Credit card payment entry<\/a><\/li>';
                str += '<li><a href="..\/credit_card\/transmit.html">Credit card payment transmit<\/a><\/li>';
                str += '<li><a href="..\/credit_card\/history.html">Credit card payment history<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_cc_ccar

    if (id == 'q_wire_iwr') {
        rc = showMenuItem('wiremain');
        if (rc == '1') {
            rc = showWireItem('repetitive');
            if (rc == '1') {
                testRep = true;
            }
            rc = showWireItem('freeform');
            if (rc == '1') {
                testFree = true;
            }
            if ((testRep) || (testFree)) {
                testWire = true;
            } //end wire and at least one type
        }
        if (testWire) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/wire\/history.html">Wire history<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_wire_iwr

    if (id == 'q_wire_h') {
        rc = showMenuItem('inwirerpt');
        if (rc == '1') {
            testWire = true;
        }
        if (testWire) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/wire\/incoming.html">Incoming wire report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_wire_h

    if (id == 'q_ach_afu') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        if ((testAcct) || (testRpt)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_ach_afu

    if ((id == 'q_et_ete') || (id == 'q_bt_bte') || (id == 'q_ft_fte') || (id == 'q_ach_sm') ||
		(id == 'q_ach_cm') || (id == 'q_ach_t') || (id == 'q_ach_h') || (id == 'q_wire_rwe') ||
		(id == 'q_wire_fwe') || (id == 'q_wire_t')) {

        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }

            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_et_ete or q_bt_bte or q_ft_fte or q_wire_rwe or q_wire_fwe or q_wire_t or all ach 
    if ((id == 'q_ach_sm') || (id == 'q_ach_cm') || (id == 'q_ach_t'))
    {
        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        if (testAchRep)
        {
            str += '<li><a href="../ach/ACH_NOC_Report_Criteria.html">ACH notice of change report<\/a><\/li>';
        }
        str += '<\/ul>';

        helpwriteContent(id, str);
    }

    if ((id == 'q_et_ett') || (id == 'q_et_eth') || (id == 'q_bt_btt') || (id == 'q_bt_bth') ||
		(id == 'q_ft_ftt') || (id == 'q_ft_fth')) {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/account_report.html">Account detail report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_et_ett or q_et_eth or q_bt_btt or q_bt_bth or q_ft_ftt or q_ft_fth

    if (id == 'q_loan_lpr') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testLoan) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lpr

    if (id == 'q_loan_lar') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
        }
        if ((testAcct) || (testRpt) || (testLoan)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/quick.html">Quick balance account report<\/a><\/li>';
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/quick.html">Quick balance report<\/a><\/li>';
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lar

    if (id == 'q_loan_lt') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
            testSchd = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
            testSchd = true;
        }
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
            testSchd = true;
        }
        if ((testAcct) || (testRpt) || (testLoan) || (testSchd)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/treport.html">Transaction report<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/account.html">Account detail report<\/a><\/li>';
            }
            if (testLoan) {
                str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            }
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lt

    if (id == 'q_loan_lh') {
        rc = showMenuItem('loan');
        if (rc == '1') {
            testLoan = true;
        }
        if (testLoan) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/loan\/activity.html">Loan activity report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lh

    if ((id == 'q_cc_ccpe') || (id == 'q_cc_ccpt') || (id == 'q_cc_ccph')) {
        rc = showMenuItem('cardrpt');
        if (rc == '1') {
            testCC = true;
        }
        if (testCC) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/credit_card\/activity.html">Credit card activity report<\/a><\/li>';
            str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_cc_ccpe or q_cc_ccpt or q_cc_ccph

    if ((id == 'q_stop_scr') || (id == 'q_stop_mcr') || (id == 'q_stop_sph')) {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }
        rc = showMenuItem('reporting');
        if (rc == '1') {
            testRpt = true;
        }
        if ((testAcct) || (testRpt)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAcct) {
                str += '<li><a href="..\/account_reporting\/tsearch.html">Account transaction search<\/a><\/li>';
            }
            if (testRpt) {
                str += '<li><a href="..\/reporting\/transaction.html">Transaction search<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_stop_scr or q_stop_mcr or q_stop_sph

    if (id == 'q_opos_e') {
        rc = showMenuItem('admin');
        if (rc == '1') {
            testAdmin = true;
        }
        rc = showMenuItem('fileup');
        if (rc == '1') {
            testUp = true;
        }
        if ((testAdmin) || (testUp)) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testAdmin) {
                str += '<li><a href="..\/customer_support\/send_message.html">Contact us<\/a><\/li>';
            }
            if (testUp) {
                str += '<li><a href="..\/file_upload\/upload_file.html">Upload file<\/a><\/li>';
            }
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_opos_e

    if (id == 'q_ppay_dr') {
        rc = showMenuItem('stop');
        if (rc == '1') {
            testStop = true;
        }
        if (testStop) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/stop_payment\/stoppay_request.html">Stop payment request<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_ppay_dr

    if (id == 'q_acct_act') {
        rc = showMenuItem('microreporting');
        if (rc == '1') {
            testMicro = true;
        }
        rc = showMenuItem('image');
        if (rc == '1') {
            testImageSearch = true;
        }
        if (testMicro) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/statements\/statements.html">Statement account selection<\/a><\/li>';
            str += '<li><a href="..\/express_transfer\/express_entry.html">Express transfer request<\/a><\/li>';
            if (testImageSearch)
                str += '<li><a href="..\/image_search\/image_search_criteria.html">Image search<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testMicro
    } //end q_acct_act

    if (id == 'q_wire_schd') {
        str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
        str += '<\/ul>';

        helpwriteContent(id, str);
    } //end q_wire_schd
    if (id == 'q_wire_schd_Escrow_Rep') {
        str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
        str += '<\/ul>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/desa_reporting\/desa_activity_search.html">Escrow account activity report<\/a><\/li>';
        str += '<\/ul>';

        helpwriteContent(id, str);
    } //end q_wire_schd

    if (id == 'q_ach_pp_exception') {
        rc = showMenuItem('positive');
        rc1 = showMenuItem('pospayexception');
        if (rc == '1' && rc1 == '1') {
            testPPException = true;
        }
        if (testPPException) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/positive_pay\/except.html">Positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testPPException
        else {
            document.getElementById(id).style.display = 'none';
        }
    } //end q_ach_pp_exception


    if (id == 'q_image_search') {
        rc = showMenuItem('image');

        if (rc == '1') {
            testImageSearch = true;
        }
        if (testImageSearch) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/account_reporting\/account_activity_search.html">Account activity<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testImageSearch
    } //end q_image_search

    if (id == 'q_pp_exception') {
        rc = showMenuItem('achpospay');
        if (rc == '1') {
            testACHPPException = true;
        }
        if (testACHPPException) {
            str += '<span class="leftContentListHeader">QuickLinks:</\/span>';
            str += '<ul class="leftContentList">';
            str += '<li><a href="..\/ach_positive_pay\/exception_manager.html">ACH positive pay exceptions manager<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end testACHPPException
        else {
            document.getElementById(id).style.display = 'none';
        }
    } //end q_pp_exception

    //Added By Ashwini on 10th May 2010
    if ((id == 'q_admin_administration') || (id == 'q_pp_issueapproval') || (id == 'q_recon_issueapproval') || (id == 'q_pp_decisionapproval')) {

        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage alerts<\/a><\/li>';
        str += '<\/ul>';

        helpwriteContent(id, str);

    } //end q_pp_administration
    if ((id == 'q_ach_sm')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_wire_t') || (id == 'q_wire_fwe') || (id == 'q_wire_rwe') || (id == 'q_wire_setup') || (id == 'q_wire_h')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_ach_t') || (id == 'q_ach_cm') || (id == 'q_ach_h') || (id == 'q_ach_afu')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_bt_btt') || (id == 'q_bt_bte') || (id == 'q_bt_bth')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_cc_ccpt') || (id == 'q_cc_ccpe') || (id == 'q_cc_ccph')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_loan_lt') || (id == 'q_loan_lpr') || (id == 'q_loan_lar') || (id == 'q_loan_lh')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_et_ett') || (id == 'q_et_ete') || (id == 'q_et_eth')) {
        GetDivForQuickLinks(id);
    }
    if ((id == 'q_ft_ftt') || (id == 'q_ft_fte') || (id == 'q_ft_fth')) {
        GetDivForQuickLinks(id);
    }


    if (id == 'q_loan_tr') {

        rc = showMenuItem('loan');
        if (rc == '1') {

            testSchd = true;
        }
        if (testSchd) {
            str += '<span class="leftContentListHeader">Quick Links:<\/span>';
            str += '<ul class="leftContentList">';
            if (testSchd) {
                str += '<li><a href="..\/scheduled_requests\/next_scheduled_requests.html">Next scheduled requests<\/a><\/li>';
            }
            str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage alerts<\/a><\/li>';
            str += '<\/ul>';

            helpwriteContent(id, str);
        } //end test
    } //end q_loan_lt

    mainpage();
} //end writeQuickLinks

function GetDivForQuickLinks(id) {
    if ((document.getElementById(id).innerHTML.indexOf('</UL>') > 0) || (document.getElementById(id).innerHTML.indexOf('</ul>') > 0)) {

        str = document.getElementById(id).innerHTML;
        str = str.replace('</UL>', '');
        str = str.replace('</ul>', '');
        str += '<li><a href="..\/consumer_support\/manage_alerts.html">Manage alerts<\/a><\/li></UL>';
        helpwriteContent(id, str);
    }

    else {
        var str = '';
        str += '<span class="leftContentListHeader">Quick Links:<\/span>';
        str += '<ul class="leftContentList">';
        str += '<li><a href="..\/customer_support\/manage_alerts.html">Manage alerts<\/a><\/li>';
        str += '<\/ul>';
        helpwriteContent(id, str);
    }
}


// Function for left navigation on Service Administration pages

function testRecon(id, service) {
    var rc;
    rc = showMenuItem(service);
    if (rc != '1') {
        document.getElementById(id).style.display = 'none';
    }
}

function getEAM() {
    var eamoptions = eval("eam_options");
    if (eamoptions == 'hideeam')
        location.href = 'signIn/signin_sa.html';
    else
        location.href = 'signIn/eam_signin_sa.html';
}

function signinEAM() {
    var eamoptions = eval("eam_options");
    if (eamoptions == 'pwd')
        location.href = 'eam_signin_password.html';
    else if (eamoptions == 'passcode')
        location.href = 'eam_signin_token.html';
    else if (eamoptions == 'passcodeooba' || eamoptions == 'pwdooba')
        location.href = 'one_time_security_code.html';
}
