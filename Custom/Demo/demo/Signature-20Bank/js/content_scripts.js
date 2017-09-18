// JavaScript Document

//functions writeWelcomeAccounts, writeWelcomeLoans, writeWelcomeCard and writeWelcomeRewards
//are used to write the summary account reports on the Welcome page
function getAccounttype() {
    //Read data from the text file modules.txt and store into any variable
    var current = eval("accounttype");
    return current[0];
} //end getAccounttype

function writeWelcomeAccounts(id) {
    var account = getAccounttype();

    if (account == 'reporting')
        writeReporting(id);
    else
        writeAccountReporting(id);

} //end writeWelcomeAccounts
function writeWelcomeAccountsWidgets(id) {
    var account = getAccounttype();

    if (account == 'reporting')
        writeReportingWidgets(id);
    else
        writeAccountReportingWidgets(id);

} //end writeWelcomeAccounts

function helpwriteContent(id, html) {
    if (document.getElementById(id)) {
        document.getElementById(id).innerHTML = html;

    } //if
} //end helpwriteContent


function checkreporting() {
    var largerep = showMenuItem('largereporting');
    var midrep = showMenuItem('midreporting');
    var microreport = showMenuItem('microreporting');

    if (largerep != 1 && midrep != 1) {
        if (microreport != 1) {
            document.getElementById('depositheader').style.display = 'none';
            document.getElementById('accountcontent').style.display = 'none';
        }
    }
}

function checkreportingwidget() {
    var largerep = showMenuItem('largereporting');
    var midrep = showMenuItem('midreporting');
    var microreport = showMenuItem('microreporting');

    if (largerep != 1 && midrep != 1) {
        if (microreport != 1) {
            document.getElementById('checkingacc').style.display = 'none';
            document.getElementById('accountcontent').style.display = 'none';
            document.getElementById('seperator').style.display = 'none';
            document.getElementById('saving_header').style.display = 'none';
            document.getElementById('savingcontent').style.display = 'none';
        }
    }
}

function writeReporting(id) {
    checkreporting();
    var str = '';

    var testLarge = false;
    var testMid = false;
    var testRegDD = false;
    var testMicro = false;

    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }

    var rc = showMenuItem('microreporting');
    if (rc == '1')
        testMicro = true;

    var rc = showMenuItem('regdd');
    if (rc == '1') {
        testRegDD = true;
    }

    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding="4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader">';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>ABA/TRC<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>Account<BR>Number<\/th>';
    str += '<th align="left" scope="col" class=';
    str += '\'dgSortLink royal_grid_sorted\'>Description';

    str += '<\/th>';
    str += '<th align="right" scope="col">Balance<\/th><\/tr>';
    str += '<tr class="tableInnerHeader">';
    str += '<td colspan="4">';
    str += 'Checking Accounts<\/td><\/tr>';
    str += '<tr class="dgItem1">';
    str += '<td align="left">';
    str += '081203790<\/td>';
    str += '<td align="left">';
    if (testMicro)
        str += '<a class="default" href="..\/account_reporting\/account_activity.html">';
    else if (testLarge)
        str += '<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
    else if (testMid)
        str += '<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';

    str += '*4511<\/a><\/td>';
    str += '<td align="left">';
    str += 'PRESTIGE OPERATING ACCOUNT<\/td>';
    str += '<td align="right">';
    if (testRegDD) {
        str += '<a href="javascript:openRegddModal(\'..\/splash_pages\/balance_checking.html\')" class="default">';
        str += '$173,474.72</a>';
    }
    else
        str += '$173,474.72';
    str += ' <\/td><\/tr>';
    str += '<tr class="dgItem0">';
    str += '<td align="left">';
    str += '081203790<\/td>';
    str += '<td align="left" class="inactive_link">';
    str += '*4512<\/td>';
    str += '<td align="left">';
    str += 'PRESTIGE PAYROLL ACCOUNT<\/td>';
    str += '<td align="right">';
    str += '$26,628.11<\/td><\/tr>';
    str += '<\/table>';

    helpwriteContent(id, str);
    mainpage();

} //end writeReporting

function writeReportingWidgets(id) {
    checkreportingwidget();
    document.getElementById('saving_header').style.display = 'none';
    var str = '';

    var testLarge = false;
    var testMid = false;
    var testRegDD = false;
    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }

    var rc = showMenuItem('regdd');
    if (rc == '1') {
        testRegDD = true;
    }

    str += '<table  cellspacing="0" cellpadding="0" border="0" width="100%" >';
    str += '<tr class="imp_balances" id="cont1" style="display:none;">';
    str += '<td >CONTROL DISB OPERATING ACCOUNT, <span class="inactive_link">*5337<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="cont2" style="display:none;">';
    str += '<td >CONTROL DISB PAYROLL ACCOUNT, <span class="inactive_link" >*5344<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="east1" style="display:none;">';
    str += '<td align="left" >EASTWOOD NATIONAL BANK CONSTR ACCT, <span class="inactive_link">*1359<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="mark1" style="display:none;">';
    str += '<td align="left" >MARK OR MARY SPENCER ACCOUNT, <span class="inactive_link">*9999<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="pres_disb1" style="display:none;">';
    str += '<td align="left" >PRESTIGE DISBURSING ACCOUNT, <span class="inactive_link">*2790<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="pres_oper1">';



    str += '<td align="left">';
    str += 'PRESTIGE OPERATING ACCOUNT, ';
    if (testLarge)
        str += '<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
    else
        if (testMid)
            str += '<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';
        else
            str += '<a class="default" href="..\/account_reporting\/account_activity.html">';
    str += '*4511<\/a>';
    str += '<\/td><td align="right">';
    if (testRegDD) {
        var current = eval("regDD_calculations");
        if (current == 'yes') {

            str += '$173,474.72<br\/> <a href="javascript:openRegddModalWidgets(\'..\/splash_pages\/balance_checking_detail.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';

        }
        else {

            str += '$173,474.72<br\/> <a href="javascript:openRegddModalWidgetsPartial(\'..\/splash_pages\/balance_checking_partial.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
        }
    }
    else
        str += '$173,474.72<br\/> <span style="font-size:10px;">Available&nbsp;Balance<\/span>';
    str += ' <\/td><\/tr>';

    helpwriteContent(id, str)

} //end writeReportingWidgets

function writeAccountReporting(id) {

    checkreporting();

    var str = '';

    var testLarge = false;
    var testMid = false;
    var testRegDD = false;
    var testMicro = false;

    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }


    var rc = showMenuItem('microreporting');
    if (rc == '1')
        testMicro = true;


    var rc = showMenuItem('regdd');
    if (rc == '1') {
        testRegDD = true;
    }

    str += '<span class="message_detail">';
    str += '<br><table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader"><th align="left" scope="col" class=\'dgSortLink\'>ABA/TRC<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>Account<BR>Number<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description<\/th>';
    str += '<th align="right" scope="col"> Balance<\/th><\/tr>';
    str += '<tr class="tableInnerHeader"><td colspan="4">Checking Accounts<\/td><\/tr>';
    str += '<tr class="dgItem0"><td align="left">081203790 <\/td>';
    str += '<td align="left" class="inactive_link">*4512<\/td>';
    str += '<td align="left">PRESTIGE PAYROLL ACCOUNT<\/td>';
    str += '<td align="right">';
    if (testRegDD)
        str += '<span class="inactive_link">$26,628.11</span>';
    else
        str += '$26,628.11';
    str += '<\/td><\/tr>';
    str += '<tr class="dgItem1"><td align="left">081203790<\/td>';
    str += '<td align="left">';
    if (testMicro)
        str += '<a class="default" href="..\/account_reporting\/account_activity.html">';
    else if (testLarge)
        str += '<a class="default" href="..\/large_reporting\/account_activity_checking.html">';
    else if (testMid)
        str += '<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';


    str += '*4511<\/a> <\/td>';
    str += '<td align="left">PRESTIGE OPERATING ACCOUNT<\/td>';
    str += '<td align="right">';
    if (testRegDD)
        str += '<a href="javascript:openRegddModal(\'..\/splash_pages\/balance_checking.html\')" class="default">$173,474.72</a>';
    else
        str += '$173,474.72';
    str += ' <\/td><\/tr>';
    str += '<tr class="dgItem0"><td align="left">550000576<\/td>';
    str += '<td align="left" class="inactive_link">*1359<\/td>';
    str += '<td align="left">EASTWOOD NATIONAL BANK CONSTR ACCT<\/td>';
    str += '<td align="right">';
    if (testRegDD)
        str += '<span class="inactive_link">$186,097.97</span>';
    else
        str += '$186,097.97'
    str += '<\/td><\/tr>';
    str += '<tr class="tableInnerHeader"><td colspan="4">';
    str += 'Savings Accounts<\/td><\/tr>';
    str += '<tr class="dgItem0"><td align="left"> 081203790<\/td>';
    str += '<td align="left" class="inactive_link">*2470<\/td>';
    str += '<td align="left">PRESTIGE HEALTH ACCOUNT <\/td>';
    str += '<td align="right">';
    if (testRegDD)
        str += '<span class="inactive_link">$170,000.00</span>';
    else
        str += '$170,000.00';
    str += '<\/td><\/tr>';
    str += '<\/table>';
    if (showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') == '0' && showMenuItem('loan') == '0' && showMenuItem('investmentaccount') == '0' && showMenuItem('cdaccount') == '0') {

        str += '<table width="100%" cellspacing="0" cellpadding=';
        str += '"0" border="0" ';
        str += '<tr><td id="cell_button_area" width+95%">';
        str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
        str += '<\/div><\/td><\/tr><\/table>';
    }

    helpwriteContent(id, str);
    mainpage();
} //end writeAccountReporting

function writeAccountReportingWidgets(id) {

    checkreportingwidget();
    var str = '';

    var testLarge = false;
    var testMid = false;
    var testRegDD = false;
    var testMicro = false;

    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }

    var rc = showMenuItem('microreporting');
    if (rc == '1') {
        testMicro = true;
    }

    var rc = showMenuItem('regdd');
    if (rc == '1') {
        testRegDD = true;
    }


    str += '<table cellspacing="0" cellpadding=';
    str += '"0" border="0" width="100%" >';
    str += '<tr class="imp_balances" id="cont1" style="display:none;">';
    str += '<td width="65%">CONTROL DISB OPERATING ACCOUNT, <span class="inactive_link" >*5337<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="cont2" style="display:none;">';
    str += '<td >CONTROL DISB PAYROLL ACCOUNT, <span class="inactive_link" >*5344<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="east1">';
    str += '<td align="left" >EASTWOOD NATIONAL BANK CONSTR ACCT, <span  class="inactive_link">*1359<\/span><\/td>';
    str += '<td align="right" >';
    if (testRegDD) {
        str += '$186,097.97<br\/> <span class="inactive_link" style="font-size:10px;">';
        str += 'Available&nbsp;Balance</span>';
    }
    else
        str += '$186,097.97<br\/> <span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="mark1" style="display:none;">';
    str += '<td>MARK OR MARY SPENCER ACCOUNT, <span class="inactive_link" >*9999<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="pres_disb1" style="display:none;">';
    str += '<td >PRESTIGE DISBURSING ACCOUNT, <span class="inactive_link" >*2790<\/span><\/td>';
    str += '<td align="right" >';
    str += 'Data not available';
    str += '<\/td><\/tr>';
    str += '<tr class="imp_balances" id="pres_oper1">';
    str += '<td align="left">';
    str += 'PRESTIGE OPERATING ACCOUNT, ';
    if (testMicro)
        str += '<a class="default" href="..\/account_reporting\/account_activity.html">';
    else if (testLarge)
        str += ' <a class="default" href="..\/large_reporting\/account_activity_checking.html">';
    else if (testMid)
        str += '<a class="default" href="..\/mid_reporting\/account_activity_checking.html">';


    str += '*4511<\/a><\/td>';
    str += '<td align="right">';
    if (testRegDD) {

        var current = eval("regDD_calculations");
        if (current == 'yes') {
            str += '$173,474.72<br\/> <a href="javascript:openRegddModalWidgets(\'..\/splash_pages\/balance_checking_detail.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
        }
        else {

            str += '$173,474.72 <br\/><a href="javascript:openRegddModalWidgetsPartial(\'..\/splash_pages\/balance_checking_partial.html\')" class="default" style="font-size:10px;">Available&nbsp;Balance</a>';
        }
    }
    else
        str += '$173,474.72<br\/> <span style="font-size:10px;">Available&nbsp;Balance<\/span>';
    str += ' <\/td><\/tr>';

    str += '<tr class="imp_balances" id="pres_pay1">';
    str += '<td style="border-bottom:none;">PRESTIGE PAYROLL ACCOUNT, <span class="inactive_link" >*4512<\/span><\/td>';
    str += '<td align="right" style="border-bottom:none;">';
    if (testRegDD) {
        str += '$26,628.11<br\/> <span class="inactive_link" style="font-size:10px;">';
        str += 'Available&nbsp;Balance</span>';
    }
    else
        str += '$26,628.11 <br\/><span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
    str += '<\/td><\/tr>';
    str += '<\/table>';
    str += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';


    var str1 = '';
    str1 += '<table cellspacing="0" cellpadding=';
    str1 += '"0" border="0" width="100%" >';
    str1 += '<tr class="imp_balances" id="contsav1">';
    str1 += '<td align="left" style="border-bottom:none;">PRESTIGE HEALTH ACCOUNT, <span class="inactive_link" onclick="return false;">*2470<\/span> <\/td>';
    str1 += '<td align="right" style="border-bottom:none;">';
    if (testRegDD) {
        str1 += '$170,000.00 <br\/><span class="inactive_link" style="font-size:10px;">';
        str1 += 'Available&nbsp;Balance</span>';
    }
    else
        str1 += '$170,000.00 <br\/><span  style="font-size:10px;">Available&nbsp;Balance<\/span>';
    str1 += '<\/td><\/tr>';
    str1 += '<\/table>';
    str1 += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';
    helpwriteContent(id, str)
    helpwriteContent('savingcontent', str1)

} //end writeAccountReportingWidgets

function writeWelcomeCDAccounts(id) {
    var cdaccounts = showMenuItem('cdaccount');

    if (cdaccounts == '1')
        writeCDAccounts(id);

} //end writeWelcomeCDAccounts

function writeWelcomeCDAccountsWidgets(id) {
    var cdaccounts = showMenuItem('cdaccount');

    if (cdaccounts == '1')
        writeCDAccountsWidgets(id);
    else {
        document.getElementById('cdaccount_header').style.display = 'none';
        document.getElementById('cdaccountcontent').style.display = 'none';
    }

} //end writeWelcomeCDAccounts

function writeCDAccounts(id) {
    var str = '';

    var testLarge = false;
    var testMid = false;
    var testMicro = false;
    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }

    var rc = showMenuItem('microreporting');
    if (rc == '1')
        testMicro = true;

    str += '<br>';
    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader"><th align="left" scope="col" width="16%">ABA/TRC<\/th>';
    str += '<th align="left" scope="col" width="13%">Account<BR>Number<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description<\/th>';
    str += '<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
    str += '<tr class="dgItem0"><td align="left">081203790<\/td>';
    str += '<td align="left" class="inactive_link">*4390<\/td>';
    str += '<td align="left">PRESTIGE CD2<\/td>';
    str += '<td align="right">$6,643.21<\/td><\/tr>';
    str += '<tr class="dgItem1"><td align="left">081203790<\/td>';
    str += '<td align="left">';
    if (testMicro)
        str += '<a class="default" href="..\/account_reporting\/treport_report_cd.html">';
    else if (testLarge)
        str += '<a class="default" href="..\/large_reporting\/account_activity_cd.html">';
    else if (testMid)
        str += '<a class="default" href="..\/mid_reporting\/account_activity_cd.html">';

    str += '*4370<\/a> <\/td>';
    str += '<td align="left">PRESTIGE CD1<\/td>';
    str += '<td align="right">$150,000.00<\/td><\/tr>';
    str += '<\/table>';
    if (showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') == '0' && showMenuItem('loan') == '0' && showMenuItem('investmentaccount') == '0') {
        str += '<table width="100%" cellspacing="0" cellpadding=';
        str += '"0" border="0" ';
        str += '<tr><td id="cell_button_area" width+95%">';
        str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
        str += '<\/div><\/td><\/tr><\/table>';
    }

    helpwriteContent(id, str);
    mainpage();

} //end writeCDAccounts

function writeCDAccountsWidgets(id) {
    var str = '';

    var testLarge = false;
    var testMid = false;
    var testMicro = false;

    var rc = showMenuItem('largereporting');
    if (rc == '1') {
        testLarge = true;
    }
    else {
        rc = showMenuItem('midreporting');
        if (rc == '1')
            testMid = true;
    }

    var rc = showMenuItem('microreporting');
    if (rc == '1') {
        testMicro = true;
    }

    str += '<table  width="100%" cellspacing="0" cellpadding=';
    str += '"0" border="0" >';

    str += '<tr class="imp_balances" id="contcd1">';


    str += '<td align="left" >PRESTIGE CD1, ';
    if (testMicro)
        str += '<a class="default" href="..\/account_reporting\/treport_report_cd.html">';
    else if (testLarge)
        str += '<a class="default" href="..\/large_reporting\/account_activity_cd.html">';
    else if (testMid)
        str += '<a class="default" href="..\/mid_reporting\/account_activity_cd.html">';


    str += '*4370<\/a> <\/td>';
    str += '<td align="right" >$150,000.00<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
    /*str+='<tr class="imp_balances"  id="contcd2">';
    str+='<td align="left" style="border-bottom:none;">PRESTIGE CD2, <span class="inactive_link" >*4390<\/span> <\/td>';
    str+='<td align="right" style="border-bottom:none;">$6,643.21<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';*/
    str += '<\/table>';
    str += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

    helpwriteContent(id, str)

} //end writeCDAccounts

function writeWelcomeInvestmentAccounts(id) {
    var investmentAccounts = showMenuItem('investmentaccount');

    if (investmentAccounts == '1')
        writeInvestmentAccounts(id);


} //end writeWelcomeCDAccounts

function writeWelcomeInvestmentAccountsWidgets(id) {
    var investmentAccounts = showMenuItem('investmentaccount');

    if (investmentAccounts == '1')
        writeInvestmentAccountsWidgets(id);
    else {
        document.getElementById('investment_header').style.display = 'none';
        document.getElementById('investmentcontent').style.display = 'none';
    }

} //end writeWelcomeCDAccountsWidgets

function writeInvestmentAccounts(id) {
    var str = '';
    str += '<br>';
    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader"><th align="left" scope="col" width="16%">ABA/TRC<\/th>';
    str += '<th align="left" scope="col" width="13%">Account<BR>Number<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description<\/th>';
    str += '<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
    str += '<tr class="dgItem0"><td align="left">081203790<\/td>';
    str += '<td align="left"><a class="default" href="..\/investment_reporting\/investment_activity_report1.html">*1028<\/a><\/td>';
    str += '<td align="left">PRESTIGE INVESTMENT ACCOUNT<\/td>';
    str += '<td align="right">$250,000.00<\/td><\/tr>';
    str += '<tr class="dgItem1"><td align="left">081203790<\/td>';
    str += '<td align="left" class="inactive_link">';
    str += '*0740<\/td>';
    str += '<td align="left">PRESTIGE HIGH YIELD INVESTMENT FUND<\/td>';
    str += '<td align="right">$6,643.21<\/td><\/tr>';
    str += '<\/table>';
    if (showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') == '0' && showMenuItem('loan') == '0') {
        str += '<table width="100%" cellspacing="0" cellpadding=';
        str += '"0" border="0" ';
        str += '<tr><td id="cell_button_area" width+95%">';
        str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
        str += '<\/div><\/td><\/tr><\/table>';
    }

    helpwriteContent(id, str);
    mainpage();

} //end writeInvestmentAccounts

function writeInvestmentAccountsWidgets(id) {
    var str = '';

    str += '<table  width="100%" cellspacing="0" cellpadding=';
    str += '"0" border="0" >';
    /*str+='<tr class="imp_balances" id="continv1">';
    str+='<td align="left" >PRESTIGE HIGH YIELD INVESTMENT FUND, <span class="inactive_link">*0740<\/span><\/td>';
    str+='<td align="right" >$6,643.21<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';	*/
    str += '<tr class="imp_balances" id="continv2">';
    str += '<td align="left" style="border-bottom:none;">PRESTIGE INVESTMENT ACCOUNT, <a class="default" href="..\/investment_reporting\/investment_activity_report1.html">*1028<\/a><\/td>';
    str += '<td align="right" style="border-bottom:none;">$250,000.00<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';

    str += '<\/table>';
    str += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

    helpwriteContent(id, str)

} //end writeInvestmentsAccountsWidgets

function checkLoanHeader(id) {
    var rc;
    var temp;

    rc = showMenuItem('loan');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkLoanHeader

function checkCDAccountHeader(id) {
    var rc;
    var temp;

    rc = showMenuItem('cdaccount');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
}

function checkInvestmentAccountHeader(id) {
    var rc;
    var temp;

    rc = showMenuItem('investmentaccount');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
}

function writeWelcomeLoans(id) {
    var loans = showMenuItem('loan');

    if (loans == '1')
        writeLoans(id);


} //end writeWelcomeLoans

function writeWelcomeLoansWidgets(id) {
    var loans = showMenuItem('loan');

    if (loans == '1')
        writeLoansWidgets(id);
    else {
        document.getElementById('loan_header').style.display = 'none';
        document.getElementById('loancontent').style.display = 'none';
    }

} //end writeWelcomeLoans

function writeLoans(id) {

    var str = '';
    str += '<br>';
    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader"><th align="left" scope="col" class=\'dgSortLink\'>ABA/TRC<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>Account Number<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description<\/th>';
    str += '<th align="left" colspan="3">Current Balance<\/th><\/tr>';

    str += '<tr class="dgItem0"><td align="left">770110000<\/td>';
    str += '<td align="left"><a href="../loan/actions.html?referrer=trf&row=0009" class="default">*0009</a> <a href="javascript:void(0)"><img border="0" id="down_img_payments" src="../images/arrow-down.gif"  style="cursor:hand;"onmouseover="document.getElementById(\'down_img_payments\').src=\'../images/arrow-down-hover.gif\';" onmouseout="document.getElementById(\'down_img_payments\').src=\'../images/arrow-down.gif\';" align="top" onclick="openLoanDropdown(\'down_img_payments\')"></a><\/td>';
    str += '<td align="left">PRESTIGE LOAN 2<\/td>';
    str += '<td align="left">$45,747.70<\/td>';
    //str += '<td align="left"><a class="default" href="..\/loan\/summary_note.html">Note<BR>Summary<\/a><\/td>';
    //str += '<td align="left"><a class="default" href="..\/loan\/summary_commit.html">Commitment<BR>Summary<\/a><\/td><\/tr>';

    str += '<tr class="dgItem1"><td align="left">770110000<\/td>';
    str += '<td align="left">*2013<\/td>';
    str += '<td align="left">PRESTIGE LOAN 3<\/td>';
    str += '<td align="left">$882,125.03<\/td></tr>';
    str += '<tr class="dgItem0"><td align="left">770110000<\/td>';
    str += '<td align="left">*0006<\/td>';
    str += '<td align="left">PRESTIGE LOAN 1<\/td>';
    str += '<td align="left">$179,512.50 <\/td>';
    str += '<\/table><\/td><\/tr>';
    str += '<tr><td id="cell_button_area" width+95%">';
    str += '<\/td><\/tr>';
    if (showMenuItem('cardrpt') == '0' && showMenuItem('cardpay') == '0' && showMenuItem('rewards') == '0') {
        str += '<tr><td id="cell_button_area" width+95%">';
        str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
        str += '<\/div><\/td><\/tr>';
    }
    str += '<\/table>';

    helpwriteContent(id, str);
    mainpage();
} //end writeLoans

function writeLoansWidgets(id) {

    var str = '';

    str += '<table  width="100%" cellspacing="0" cellpadding=';
    str += '"0" border="0" >';
    /*str+='<tr class="imp_balances" id="contloan1">';
    str+='<td align="left" >PRESTIGE LOAN 1, <span class="inactive_link">*0006<\/span><\/td>';
    str+='<td align="right" >$179,512.50<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span> <\/td><\/tr>';*/

    str += '<tr class="imp_balances" id="contloan2">';
    str += '<td align="left">PRESTIGE LOAN 2, <span><a href="../loan/actions.html?referrer=trf&row=0009" class="default">*0009</a><\/span><\/td>';
    str += '<td align="right">$45,747.70<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';
    /*str+='<tr class="imp_balances" id="contloan3">';
    str+='<td align="left"style="border-bottom:none;">PRESTIGE LOAN 3, <span class="inactive_link">*2013<\/span><\/td>';
    str+='<td align="right" style="border-bottom:none;">$882,125.03<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span><\/td><\/tr>';*/
    str += '<\/table>';
    str += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';
    helpwriteContent(id, str)

} //end writeLoansWidgets

function checkCardHeader(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('cardrpt');
    rc1 = showMenuItem('cardpay');
    if ((rc == '0') && (rc1 == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCardHeader
function writeWelcomeCard(id) {
    var cardrpt = showMenuItem('cardrpt');
    var cardpay = showMenuItem('cardpay');

    if ((cardrpt == '1') || (cardpay == '1'))
        writeCard(id);


} //end writeWelcomeCard
function writeWelcomeCardWidgets(id) {
    var cardrpt = showMenuItem('cardrpt');
    var cardpay = showMenuItem('cardpay');

    if ((cardrpt == '1') || (cardpay == '1'))
        writeCardWidgets(id);
    else {
        document.getElementById('card_header').style.display = 'none';
        document.getElementById('cardcontent').style.display = 'none';
    }

} //end writeWelcomeCardWidgets
function writeCard(id) {

    var str = '';
    str += '<br>';
    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader"><th align="left" scope="col" class=\'dgSortLink\'>Account<BR>Number<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description<\/th>';
    str += '<th align="left">Current&nbsp;Balance<\/th><th align="left">Available Credit<\/th><\/tr>';
    str += '<tr class="dgItem0"><td align="left"><a href="..\/credit_card\/activity_report.html"';
    str += ' class="default">*1691<\/a><\/td>';
    str += '<td align="left">PRESTIGE CREDIT CARD ACCT<\/td>';
    str += '<td align="left" >$11,497.25 <\/td>';
    str += '<td align="left">20,000.00<\/td><\/tr>';
    str += '<\/table><\/td><\/tr>';
    if (showMenuItem('rewards') == '0') {
        str += '<tr><td id="cell_button_area" width+95%">';
        str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
        str += '<\/div><\/td><\/tr>';
    }
    str += '<\/table>';

    helpwriteContent(id, str);
    mainpage();

} //end writeCard
function writeCardWidgets(id) {

    var str = '';

    str += '<table width="100%" cellspacing="0" cellpadding=';
    str += '"0" border="0" >';
    str += '<tr class="imp_balances" id="contcc1">';
    str += '<td align="left" style="border-bottom:none;">PRESTIGE CREDIT CARD ACCT, <a href="..\/credit_card\/activity_report.html"';
    str += ' class="default">*1691<\/a><\/td>';
    str += '<td align="right" style="border-bottom:none;">$11,497.25<br\/><span style="font-size:10px; font-weight:bold;">Current&nbsp;balance <\/span> <\/td>';
    str += '<\/tr>';
    str += '<\/table>';
    str += '<tr colspan="2"><td>&nbsp;<\/td><\/tr>';

    helpwriteContent(id, str)

} //end writeCardWidgets
function checkRewardsHeader(id) {
    var rc;
    var temp;

    rc = showMenuItem('rewards');
    if ((rc == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkRewardsHeader
function checkDesaHeader(id) {
    var rc;
    var temp;

    rc = showMenuItem('desa');
    if ((rc == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkDesaHeader
function writeWelcomeRewards(id) {
    var rewards = showMenuItem('rewards');

    if (rewards == '1')
        writeRewards(id);

} //end writeWelcomeRewards
function writeWelcomeDesa(id) {
    var rewards = showMenuItem('desa');

    if (rewards == '1')
        writeDesa(id);

} //end writeWelcomeDesa
function writeCIS(id) {
    var rc;
    var temp;
    var str = '';

    rc = showMenuItem('otheraccounts');
    if ((rc == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = '';
        //str += '<br><br>';
        str += '<span class="subheader">Other Accounts as of ';
        str += theDateCustomised(0);
        str += '</span><br><br>';
        str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=4 border="0" style="border-collapse:collapse;">';
        str += '<tr class="dgHeader">';
        str += '<th align="left" scope="col" class=\'dgSortLink\' width="20%">Account Type<\/th>';
        str += '<th align="left" scope="col" class=\'dgSortLink\'>';
        str += 'Account Number<\/th>';
        str += '<th align="left" scope="col" class=\'dgSortLink\'><\/th>';
        str += '<th align="right" scope="col" class=\'dgSortLink\'><\/th><\/tr>';
        str += '<tr class="dgItem0">';
        str += '<td>Mortgage</td>';
        str += '<td>*1234</td>';
        str += '<td align="right">Remaining Balance</td>';
        str += '<td align="center">$2456.00</td>';
        str += '</tr>';
        str += '<tr class="dgItem1">';
        str += '<td>Mortgage</td>';
        str += '<td>*3254</td>';
        str += '<td align="right">Remaining Balance</td>';
        str += '<td align="center">$1456.00</td>';
        str += '</tr>';
        str += '</table>';

        helpwriteContent(id, str);
    }
}
function writeDesa(id) {

    var str = '';

    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=4 border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader">';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>Main Account<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink\'>';
    str += 'Master ID<\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>Description<\/th>';
    str += '<th align="right" scope="col" class=\'dgSortLink\'>Aggregate Balance<\/th><\/tr>';
    str += '<tr class="dgItem0">';
    str += '<td>*8588</td>';
    str += '<td><a class="default" href="../desa_reporting/desa_summary_report.html?subacc=">ChardWBld1</a></td>';
    str += '<td>Chardon Rd Building</td>';
    str += '<td align="right">$2,456,788.00</td>';
    str += '</tr>';
    str += '<tr class="dgItem1">';
    str += '<td>*4578</td>';
    str += '<td><span class="inactive_link">Prop908-909-292</span></td>';
    str += '<td>Main Street Condos</td>';
    str += '<td align="right">$1,500,93.43</td>';
    str += '</tr>';
    str += '</table>';
    str += '<br><br>';

    helpwriteContent(id, str);
    mainpage();

} //end writeDesa
function writeRewards(id) {

    var str = '';

    str += '<table class="dgGrid" width="100%" cellspacing="0" cellpadding=';
    str += '"4" border="0" style="border-collapse:collapse;">';
    str += '<tr class="dgHeader">';
    str += '<th align="left" scope="col" width="55%"><span class=\'dgSortLink\'>Account Number<\/span><\/th>';
    str += '<th align="left" scope="col" class=\'dgSortLink royal_grid_sorted\'>';
    str += 'Description&nbsp<\/th>';
    str += '<th align="right" scope="col" width="11%"> Balance<\/th><\/tr>';
    str += '<tr class="dgItem0"><td colspan="3" class="message_detail"<\/td><b>Scorecard Accounts<\/b><\/tr>';
    str += '<tr class="dgItem1">';
    str += '<td align="left" class="inactive_link">';
    str += '*3333<\/td>';
    str += '<td align="left">Corporate Debits Cards<\/td>';
    str += '<td align="right">12,843.00<\/td><\/tr>';
    str += '<tr class="dgItem0">';
    str += '<td align="left"><a class="default" href="#" onclick="window.open(\'../modules_main/Rewardpoints.html\');">*9999<\/a><\/td>';
    str += '<td align="left">Corporate Credit Card<\/td>';
    str += '<td align="right">52,371.00<\/td><\/tr>';
    str += '<\/table>';
    str += '<table width="100%" cellspacing="0" cellpadding=';
    str += '"0" border="0" ';
    str += '<tr><td id="cell_button_area" width+95%">';
    str += '<div style="padding:8px 0px 8px 0px;"><hr align="left width=100%">';
    str += '<\/div><\/td><\/tr><\/table>';

    helpwriteContent(id, str)

} //end writeCard
function writeRewardsWidget(id) {

    var str = '';

    str += '<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="font-size:12px">';
    str += '<tr>';
    str += '<td style=\"border-bottom:solid;border-bottom-width:2px; border-bottom-color:#aaa;font-size:13px\"><b>Rewards Accounts</b></td>';
    str += '<td align=\"right\" style=\"border-bottom:solid;border-bottom-width:2px; border-bottom-color:#aaa;font-weight:bold;font-size:12px\">balance as of ';
    str += theDateCustomised(0);
    str += '</td>';
    str += '</tr>';
    str += '<tr>';
    str += ' <td height=\"4\" colspan=\"2\"></td>';
    str += '</tr>';
    str += ' <tr valign=\"top\">';
    str += '<td colspan=\"2\">';
    str += '<table width=\"100%\" border=\"0\" cellpadding=\"1\" cellspacing=\"0\">';
    str += '<tr>';
    str += '<td colspan=\"2\"><strong>Scorecard Accounts</strong></td>';
    str += '</tr>';
    str += ' <tr>';
    str += '<td> *3333</td>';
    str += '<td align=\"right\"><strong>12,843.00</strong></td>';
    str += '</tr>';
    str += '<tr>';
    str += ' <td> *<a class=\"default\" href=\"#\" onclick=\"window.open(\'../modules_main/Rewardpoints.html\');\">9999</a></td>';
    str += '<td align=\"right\"><strong>52,371.00</strong></td>';
    str += ' </tr>';

    str += '<tr>';
    str += '<td colspan=\"2\" height=\"12\"></td>';
    str += '</tr>';

    str += '</table>';
    str += '</td>';
    str += '</tr>';
    str += '</table>';

    helpwriteContent(id, str)

}

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//These functions write loan, ach, and wire navigation selections
//This function calls the showLoanItem function  
//to determine if the payment selection should be displayed



//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//These functions are used within various services to determine 
//if specific data should be displayed.
//
//This function calls the showLoanItem function to determine  
//if the payment content should be displayed on transmit and history pages
function checkLoanPayment(id) {
    var rc;
    var temp;

    rc = showLoanItem('payment');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
    getalternateStyles('historyDetail');
} //end checkLoanPayment

//This function calls the showLoanItem function to determine  
//if the advance content should be displayed on transmit and history pages
function checkLoanAdvance(id) {
    var rc;
    var temp;

    rc = showLoanItem('advance');
    if (rc == '0') {
        temp = document.getElementById(id);

        temp.style.display = 'none';
    }
    getalternateStyles('historyDetail');
} //end checkLoanAdvance

//This function calls the showWireItem function to determine  
//if the repetitive wire content should be displayed on transmit and history pages
function checkWireRep(id) {
    var rc;
    var temp;

    rc = showWireItem('repetitive');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkWireRep

//This function calls the showWireItem function to determine  
//if the freeform wire content should be displayed on transmit and history pages
function checkWireFree(id) {
    var rc;
    var temp;

    rc = showWireItem('freeform');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkWireFree

//This function calls the showWireItem function to determine  
//the total amount that should be displayed on the wire transmit selection page
function writeWireTotal1(id) {
    var rc1, rc2;
    var str = '';

    rc1 = showWireItem('repetitive');
    rc2 = showWireItem('freeform');
    rc3 = showWireItem('fxint');

    str += '<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
    str += 'style="width:100%;border-collapse:collapse;" >';



    if ((rc1 == '1') && (rc2 == '1')) {
        str += '<tr class="dgItem0" nowrap="nowrap" id="domtotalrow"><td align="center" style="width:30px">&nbsp;<\/td>';
        str += '<td width="41%" colspan="4" align="right" id="domitem">Total: 3 items for<\/td>';
        str += '<td width="2%"><\/td>';
        str += '<td  align="right" width="90"><span class="dollarsign">$<\/span><span  id="domtotal">10,500.00 USD</span><\/td>';
        str += '<td align="center" width="30">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
        str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr>';

        if (rc3 == '1') {
            str += '<tr class="dgItem0" nowrap="nowrap" id="inttotalrow"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="41%" colspan="4" align="right">Total: 1 item for<\/td>';
            str += '<td width="2%"><\/td>';
            str += '<td align="right" id="inttotal">5,000.00 EUR<\/td>';
            str += '<td align="center" width="30">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
            str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr>';
        }
    }
    else {
        if (rc1 == '1') {
            str += '<tr class="dgItem0" nowrap="nowrap" id="domtotalrow"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="41%" colspan="4" align="right"  id="domitem">Total: 2 items for<\/td>';
            str += '<td width="2%"><\/td>';
            str += '<td  align="right" width="90" id="domtotal"><span class="dollarsign">$<\/span>10,000.00 USD<\/td>';
            str += '<td align="center" width="30">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
            str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr>';
            str += '<tr class="dgItem0" nowrap="nowrap" id="inttotalrow"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="41%" colspan="4" align="right">Total: 1 item for<\/td>';
            str += '<td width="2%"><\/td>';
            str += '<td align="right" id="inttotal">5,000.00 EUR<\/td>';
            str += '<td align="center" width="30">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
            str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr>';
        }
        else if (rc2 == '1') {
            str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="41%" colspan="4" align="right">Total: 1 item for<\/td>';
            str += '<td width="2%"><\/td>';
            str += '<td align="right" width="94">500.00 USD<\/td>';
            str += '<td align="center" width="30">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
            str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr>';
        }
    }

    str += '<\/table>';
    helpwriteContent(id, str);

} //end writeWireTotal1

//This function calls the showWireItem function to determine  
//the total amount that should be displayed on the wire transmit verify page
function writeWireTotal2(id) {
    var rc1, rc2;
    var str = '';

    rc1 = showWireItem('repetitive');
    rc2 = showWireItem('freeform');

    str += '<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
    str += 'style="width:95%;border-collapse:collapse;">';


    if ((rc1 == '1') && (rc2 == '1')) {
        str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
        str += '<td width="45%" colspan="3" align="right">Total 3 items for:<\/td>';
        str += '<td width="3%"><\/td>';
        str += '<td align="left" width="47%" ><span class="dollarsign">$<\/span>10,500.00 USD<\/td>';
    }
    else
        if (rc1 == '1') {
            str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="45%" colspan="3" align="right">Total 2 items for:<\/td>';
            str += '<td width="3%"><\/td>';
            str += '<td align="left" width="47%" ><span class="dollarsign">$<\/span>10,000.00 USD<\/td>';
        }
        else {
            str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="45%" colspan="3" align="right">Total 1 items for:<\/td>';
            str += '<td width="3%"><\/td>';
            str += '<td align="left" width="47%" ><span class="dollarsign">$<\/span>500.00 USD<\/td>';
        }

    str += '<td align="center" width="40">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
    str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr><\/table>';
    helpwriteContent(id, str);

} //end writeWireTotal2

function writeWireTotalConfirm(id) {
    var rc1, rc2;
    var str = '';

    rc1 = showWireItem('repetitive');
    rc2 = showWireItem('freeform');

    str += '<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
    str += 'style="width:95%;border-collapse:collapse;">';


    if ((rc1 == '1') && (rc2 == '1')) {
        str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
        str += '<td width="51%" colspan="3" align="right">Total 2 items for:<\/td>';
        str += '<td width="5%"><\/td>';
        str += '<td align="left" width="42%" ><span class="dollarsign">$<\/span>5,500.00 USD<\/td>';
    }
    else
        if (rc1 == '1') {
            str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="52%" colspan="3" align="right">Total 1 items for:<\/td>';
            str += '<td width="5%"><\/td>';
            str += '<td align="left" width="42%" ><span class="dollarsign">$<\/span>5,000.00 USD<\/td>';
        }
        else {
            str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
            str += '<td width="52%" colspan="3" align="right">Total 1 items for:<\/td>';
            str += '<td width="5%"><\/td>';
            str += '<td align="left" width="42%" ><span class="dollarsign">$<\/span>500.00 USD<\/td>';
        }

    str += '<td align="center" width="40">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
    str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr><\/table>';
    helpwriteContent(id, str);

}

function writeWireTotalConfirm1(id) {
    var rc1;
    var str = '';

    rc1 = showWireItem('repetitive');


    str += '<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" ';
    str += 'style="width:95%;border-collapse:collapse;">';


    if (rc1 == '1') {
        str += '<tr class="dgItem0" nowrap="nowrap"><td align="center" style="width:30px">&nbsp;<\/td>';
        str += '<td width="51%" colspan="3" align="right">Total 1 item for:<\/td>';
        str += '<td width="5%"><\/td>';
        str += '<td align="left" width="42%" ><span class="dollarsign">$<\/span>5,000.00 USD<\/td>';
    }


    str += '<td align="center" width="40">&nbsp;<\/td><td align="center" width="80">&nbsp;<\/td>';
    str += '<td width="50">&nbsp;<\/td><td width="120">&nbsp;<\/td><\/tr><\/table>';
    helpwriteContent(id, str);

}

//This function calls the showMenuItem function to determine  
//if the Express Transfer request should be displayed on the Scheduled Requests pages
function checkExpressReq(id) {
    var rc;
    var temp;

    rc = showMenuItem('express');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkExpressReq

//This function calls the showMenuItem function to determine  
//if the Funds Transfer request should be displayed on the Scheduled Requests pages
function checkFundsReq(id) {
    var rc;
    var temp;

    rc = showMenuItem('funds');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkFundsReq

//This function calls the showMenuItem function to determine  
//if the Wire request should be displayed on the Scheduled Requests pages
function checkWireReq(id) {
    var rc;
    var rc1 = '0';
    var temp;

    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('repetitive');
    }
    if ((rc == '0') || (rc1 == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkWireReq

//This function calls the showMenuItem function to determine  
//if the Book Transfer request should be displayed on the Scheduled Requests pages
function checkBookReq(id) {
    var rc;
    var temp;

    rc = showMenuItem('book');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkBookReq

//This function calls the showMenuItem function to determine  
//if the first Loan Payment request should be displayed on the Scheduled Requests pages
function checkLoanReq(id) {
    var rc;
    var rc1 = '0';
    var temp;

    rc = showMenuItem('loan');
    if (rc == '1') {
        rc1 = showLoanItem('payment');
    }
    if ((rc == '0') || (rc1 == '0')) {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkLoanReq

//This function calls the showMenuItem function to determine  
//if the Credit Card Payment request should be displayed on the Scheduled Requests pages
function checkCardReq(id) {
    var rc;
    var temp;

    rc = showMenuItem('cardpay');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCardReq


//This function calls the showMenuItem function to determine  
//if the ACH Payment or collection  should be displayed on the Scheduled Requests pages
function checkACHReq(id) {
    var rc;
    var temp;

    rc = showMenuItem('ach');
    if (rc == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkACHReq

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for IAT Payment should be displayed on the Scheduled Requests pages
function checkIATPay(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('iat');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkIATPay

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for PPD Payment should be displayed on the Scheduled Requests pages
function checkPPDPay(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('payment');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkPPDPay

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for CCD Payment should be displayed on the Scheduled Requests pages
function checkCCDPay(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('ccdpay');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for CTX Collection should be displayed on the Scheduled Requests pages
function checkCTXColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('ctxcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for CTX Payment should be displayed on the Scheduled Requests pages
function checkCTXPay(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('ctx');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCCDPay

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for IAT Collection should be displayed on the Scheduled Requests pages
function checkIATColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('iatcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkIATColl

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for CCD Collection should be displayed on the Scheduled Requests pages
function checkCCDColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('collection');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkCCDColl

//This function calls the showMenuItem and showACHItem function to determine  
//if the ACH request for PPD Collection should be displayed on the Scheduled Requests pages
function checkPPDColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('ppdcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkPPDColl


function checkWebColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('webcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkWebColl

function checkTelColl(id) {
    var rc, rc1;
    var temp;

    rc = showMenuItem('ach');
    rc1 = showACHItem('telcoll');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';

    }
} //end checkTelColl

function checkEscrowTransfer(id) {
    var rc, rc1;
    var temp;
    rc = showMenuItem('escrowacctransfer');
    rc1 = showMenuItem('desa');
    if (rc == '0' || rc1 == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';

    }
} //end checkEscrowTransfer

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the reporting output selections
//This function calls the showMenuItem function  
//to determine if the Quickbooks, Quicken or MS Money should be displayed
function writeOutputType(id) {
    var str = '';
    var out1 = showMenuItem('quickbooks');
    var out2 = showMenuItem('quicken');
    var out3 = showMenuItem('msmoney');

    if (id == 'tranrpt') {
        str += '<input id="screen" type="radio" name="output" checked /> &nbsp;<b>Screen<\/b> (HTML)<br>';
        str += '<input id="bai2" type="radio" name="output" \/> &nbsp;<b>BAI2<\/b> file (Creates a file that ';
        str += 'can be imported into an account processing application)<br>';
        str += '<input id="csv" type="radio" name="output" \/> &nbsp;<b>CSV<\/b> file (Can be used by a spreadsheet program)<br>';
        if (out3 == '1') {
            str += '<input id="msmoney" type="radio" name="output" \/> &nbsp;<b>Microsoft Money®<\/b> file (Creates a file ';
            str += 'that can be imported into MS Money 2000 or more recent versions)<br>';
        }
        if (out1 == '1') {
            str += '<input id="quickbook" type="radio" name="output" \/> &nbsp;<b>QuickBooks®<\/b> file (Creates a file ';
            str += 'that can be imported into Quickbooks)<br>';
        }
        helpwriteContent(id, str);
    } //end if tranrpt

    if (id == 'tranrpt_down') {
        str += 'Download this report as:&nbsp;';
        str += '<select><option selected="selected">BAI2 file<\/option><option>CSV file<\/option>';
        if (out3 == '1') {
            str += '<option>Microsoft Money® file<\/option>';
        }
        if (out1 == '1') {
            str += '<option>QuickBooks® file<\/option>';
        }
        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';
        helpwriteContent(id, str);
    } //end if tranrpt_down

    if (id == 'acctrpt') {
        str += '<input id="screen" type="radio" name="output" checked /> &nbsp;<b>Screen<\/b> (HTML)<br>';
        str += '<input id="bai2" type="radio" name="output" \/> &nbsp;<b>BAI2<\/b> file (Creates a file that ';
        str += 'can be imported into an account processing application)<br>';
        str += '<input id="csv" type="radio" name="output" \/> &nbsp;<b>CSV<\/b> file (Can be used by a spreadsheet program)<br>';
        if (out3 == '1') {
            str += '<input id="msmoney" type="radio" name="output" \/> &nbsp;<b>Microsoft Money®<\/b> file (Creates a file ';
            str += 'that can be imported into MS Money 2000 or more recent versions)<br>';
        }
        str += '<input id="qif" type="radio" name="output" \/> &nbsp;<b>QIF<\/b> file (Creates a file that can be imported  ';
        str += 'into any application that can import a Quicken Interchange Formatted file)<br>';
        if (out1 == '1') {
            str += '<input id="quickbook" type="radio" name="output" \/> &nbsp;<b>QuickBooks®<\/b> file (Creates a file ';
            str += 'that can be imported into Quickbooks)<br>';
        }
        if (out2 == '1') {
            str += '<input id="quicken" type="radio" name="output" \/> &nbsp;<b>Quicken®<\/b> file (Creates a file ';
            str += 'that can be imported into Quicken 98 or more recent versions<br>';
        }
        helpwriteContent(id, str);
    } //end if acctrpt

    if (id == 'acctrpt_down') {
        str += 'Download this report as:&nbsp;';
        str += '<select><option selected="selected">BAI2 file<\/option><option>CSV file<\/option>';
        if (out3 == '1') {
            str += '<option>Microsoft Money file<\/option>';
        }
        str += '<option value="QIF">QIF file<\/option>';
        if (out1 == '1') {
            str += '<option>QuickBooks file<\/option>';
        }
        if (out2 == '1') {
            str += '<option>Quicken file<\/option>';
        }
        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" \/>&nbsp;';
        helpwriteContent(id, str);
    } //end if acctrpt_down


    if (id == 'largerpt_down') {
        str += '&nbsp;&nbsp;&nbsp;Download this report as:&nbsp;';
        str += '<select><option selected="selected">BAI2 file<\/option><option>CSV file<\/option>';
        if (out3 == '1') {
            str += '<option>Microsoft Money® file<\/option>';
        }
        if (out2 == '1') {
            str += '<option value="QIF">QIF file<\/option>';
        }
        if (out1 == '1') {
            str += '<option>QuickBooks® file<\/option>';
        }
        if (out2 == '1') {
            str += '<option>Quicken® file<\/option>';
        }
        str += '<option>PDF file<\/option>';
        str += '<option>Paid Check File<\/option>';
        str += '<option>Transaction export\</option>';
        str += '<option>Cash Position_Ledger<\/option>';
        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';

        helpwriteContent(id, str);
    }

    if (id == 'combinedrpt_down') {
        str += '&nbsp;&nbsp;&nbsp;Download this report as:&nbsp;';
        str += '<select><option selected="selected">BAI2 file<\/option><option>Cash Position_Ledger<\/option><option>CSV file<\/option>';
        if (out3 == '1') {
            str += '<option>Microsoft Money file<\/option>';
        }
        str += '<option>PDF file<\/option>';
        str += '<option>Paid Check File<\/option>';
        if (out2 == '1') {
            str += '<option value="QIF">QIF file<\/option>';
        }
        if (out1 == '1') {
            str += '<option>QuickBooks file<\/option>';
        }
        if (out2 == '1') {
            str += '<option>Quicken file<\/option>';
        }

        str += '<option>Transaction export\</option>';

        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';

        helpwriteContent(id, str);
    }

    if (id == 'midrpt_down') {
        str += '&nbsp;&nbsp;&nbsp;Download this report as:&nbsp;';
        str += '<select><option selected="selected">CSV file </option>';

        if (out3 == '1') {
            str += '<option>Microsoft Money file<\/option>';
        }
        str += '<option>PDF file</option>';

        if (out2 == '1') {
            str += '<option value="QIF">QIF file<\/option>';
        }
        if (out1 == '1') {
            str += '<option>QuickBooks&reg; file<\/option>';
        }

        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';

        helpwriteContent(id, str);
    }

    if (id == 'creditcard_report') {
        str += '&nbsp;&nbsp;&nbsp;Download as:&nbsp;';

        str += '<select>';
        str += '<option selected></option>';
        str += '<option>CSV</option>';
        str += '<option>PDF</option>';

        if (out2 == '1') {
            str += '<option>Quicken<\/option>';
        }

        if (out1 == '1') {
            str += '<option>QuickBooks<\/option>';
        }

        if (out2 == '1') {
            str += '<option value="QIF">QIF<\/option>';
        }

        if (out3 == '1') {
            str += '<option>MSMoney<\/option>';
        }

        str += '<\/select>&nbsp;<input type="button" value="Go" title="Download Report" id="cell_button_area2" \/>&nbsp;';

        helpwriteContent(id, str);
    }
} //end writeOutputType

//This function calls the showACHItem function to determine  
//if the ACH content should be displayed on the send money, transmit and history pages
function checkACHContent(id) {
    var rc;
    var temp;
    var achServiceContent = [{ "service": "telcoll", "rowId": "telcoll" }, { "service": "webcoll", "rowId": "webcoll" }, { "service": "ctxcoll", "rowId": "ctxcoll" }, { "service": "ppdcoll", "rowId": "ppdCol" }, { "service": "iatcoll", "rowId": "iatCol" }, { "service": "collection", "rowId": "ccdCol" } ,{ "service": "collection", "rowId": "collreq" }, { "service": "iat", "rowId": "iatreq" }, { "service": "stp820", "rowId": "stpreq" }, { "service": "child", "rowId": "childreq" }, { "service": "state", "rowId": "statereq" }, { "service": "payment", "rowId": "payreq" }, { "service": "payment", "rowId": "ppdreq" }, { "service": "ccdpay", "rowId": "ccdreq" }, { "service": "ctx", "rowId": "ctxreq" }, { "service": "federal", "rowId": "fedreq" }]
    for (var serviceIndex = 0; serviceIndex < achServiceContent.length; serviceIndex++)
    {
        rc = showACHItem(achServiceContent[serviceIndex].service);
        if (rc == '0') {
            temp = $('tr[id^=' + achServiceContent[serviceIndex].rowId + ']')
            if (temp != null)
                temp.hide();
        }
    }
} //end checkACHContent


//This function calls the showACHItem function to determine  
//if the ACH content should be displayed on the history page
function checkACHContentHistory() {
    var temp;
    var rc1 = showACHItem('collection');
    var rc2 = showACHItem('ccdpay');
    var rc3 = showACHItem('child');
    var rc4 = showACHItem('ctxcoll');
    var rc5 = showACHItem('ctx');
    var rc6 = showACHItem('federal');
    var rc7 = showACHItem('iat');
    var rc8 = showACHItem('ppdcoll');
    var rc9 = showACHItem('payment');
    var rc10 = showACHItem('state');
    var rc11 = showACHItem('stp820');
    var rc12 = showACHItem('telcoll');
    var rc12 = showACHItem('webcoll');
    var rc14 = showACHItem('iatcoll');

    if (rc1 != '1') {
        document.getElementById('ccdcoll').style.display = 'none';
    }
    if (rc2 != '1') {
        document.getElementById('ccdpay').style.display = 'none';
    }
    if (rc3 != '1') {
        document.getElementById('childsupport').style.display = 'none';
    }
    if (rc4 != '1') {
        document.getElementById('ctxcoll').style.display = 'none';
    }
    if (rc5 != '1') {
        document.getElementById('ctxpay').style.display = 'none';
    }
    if (rc6 != '1') {
        document.getElementById('fedtax').style.display = 'none';
    }
    if (rc7 != '1') {
        document.getElementById('iatpay').style.display = 'none';
    }
    if (rc8 != '1') {
        document.getElementById('ppdcoll').style.display = 'none';
    }
    if (rc9 != '1') {
        document.getElementById('ppdpay').style.display = 'none';
    }
    if (rc10 != '1') {
        document.getElementById('statetax').style.display = 'none';
    }
    if (rc11 != '1') {
        document.getElementById('stp820').style.display = 'none';
    }
    if (rc12 != '1') {
        document.getElementById('telcoll').style.display = 'none';
    }
    if (rc13 != '1') {
        document.getElementById('webcoll').style.display = 'none';
    }
    if (rc14 != '1') {
        document.getElementById('iatcoll').style.display = 'none';
    }

} //end checkACHContentHistory

//This function writes the ACH account type selections
//This function calls the showACHItem function  
//to determine if the account type should be displayed in the drop-down list
function writeACHAcctType(id) {
    var str = '';
    var type = showACHItem('ctx');

    str += '<select><option selected> <\/option><option>CCD (Corporate)<\/option>';
    str += '<option>CCD+ (Corporate with additional information)<\/option>';
    if (type == '1') {
        str += '<option>CTX (Corporate Trade Exchange)<\/option>';
    }
    str += '<option>PPD (Personal)<\/option><option>PPD+ (Personal with additional information)<\/option>';
    str += '<\/select><br><span class="input_instructions">\(Type of accounts to be listed in the detail area, ';
    str += 'e.g. Corporate, Personal.\)<\/span>';
    helpwriteContent(id, str);
} //end writeACHAcctType

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the favorites selections
//This function calls the showMenuItem function  
//to determine which functions should be displayed
function writeFavoritesSelect(id) {
    var rc, rc1, rc2, rc3, rc4, rc5;
    var str = '';

    str += '<select size="6">';

    rc = showMenuItem('reporting');
    if (rc == '1') {
        str += '<option>Quick balance report<\/option><option>Transaction search<\/option>';
        str += '<option>Account detail report<\/option>';
    }


    rc = showMenuItem('investmentreporting');
    if (rc == '1') {
        str += '<option class="menuItem" menuitem="invActivityRep">Investment activity report<\/option>';
    }

    rc = showMenuItem('loan');
    if (rc == '1') {
        str += '<option>Loan summary report<\/option><option>Loan activity report<\/option>';
    }
    rc = showMenuItem('cardrpt');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="creditCardActRep">Credit card activity report<\/option>';
    }
    rc = showMenuItem('filedown');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="downloadRep">Download report<\/option>';
    }
    rc = showMenuItem('statements');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="statementNDocsAcntSel">Statements and documents - account selection<\/option>';
    }
    rc = showMenuItem('inwirerpt');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="incomingWireRep">Incoming wire report<\/option>';
    }

    rc = showMenuItem('express');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="expTransReq">Express transfer request<\/option><option class="menuItem" " menuitem="expTransTrans">Express transfer transmit<\/option>';
        str += '<option class="menuItem"  menuitem="expTransHist">Express transfer history<\/option>';
    }
    rc = showMenuItem('book');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="bkTrans1">Book transfer<\/option><option class="menuItem"  menuitem="bkTransTransmit">Book transfer transmit<\/option>';
        if (showMenuItem('multipleapprovals') == "1")
            str += '<option class="menuItem"  menuitem="bkTransTempAppr">Book transfer template approval<\/option>';
        str += '<option class="menuItem" menuitem="bkTransHist">Book transfer history<\/option>';
    }
    rc = showMenuItem('funds');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="fndsTransreq">Funds transfer request<\/option><option class="menuItem"  menuitem="fndsTransTransmit">Funds transfer transmit<\/option>';
        str += '<option class=" menuItem"  menuitem="fndsTransHist">Funds transfer history<\/option>';
    }
    rc = showMenuItem('loan');
    if (rc == '1') {
        rc1 = showLoanItem('payment');
        if (rc1 == '1') {
            str += '<option>Loan payment request<\/option>';
        }
        rc2 = showLoanItem('advance');
        if (rc2 == '1') {
            str += '<option>Loan advance request<\/option>';
        }
        if ((rc1 == '1') || (rc2 == '1')) {
            str += '<option>Transmit loan<\/option><option>Loan history report<\/option>';
        }
    }
    rc = showMenuItem('bill');
    if (rc == '1') {
        str += '<option>Add bill payment<\/option><option>Change bill payment<\/option>';
        str += '<option>Delete bill payment<\/option><option>Bill payment history<\/option>';
    }
    rc = showMenuItem('billsetup');
    if (rc == '1') {
        str += '<option>Add bill payee<\/option><option>Change bill payee<\/option>';
        str += '<option>Delete bill payee<\/option>';
    }
    rc = showMenuItem('cardpay');
    if (rc == '1') {
        str += '<option class="menuItem"  menuitem="creditCardPayEntry">Credit card payment entry<\/option><option class="menuItem"  menuitem="creditCardPayTrans">Credit card payment transmit<\/option>';
        str += '<option class="menuItem"  menuitem="creditCardPayHist">Credit card payment history<\/option>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('payment');
        rc2 = showACHItem('federal');
        rc3 = showACHItem('state');
        rc4 = showACHItem('child');
        rc5 = showACHItem('stp820');
        if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')) {
            str += '<option class=" menuItem"  menuitem="sendMoney">Send money<\/option>';
        }
        rc = showACHItem('collection');
        if (rc == '1') {
            str += '<option class=" menuItem"  menuitem="collectMoney">Collect money<\/option>';
        }
        if ((rc == '1') || (rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1')) {
            str += '<option class="menuItem"  menuitem="achTransmit">ACH transmit<\/option><option class="menuItem"  menuitem="achHistory">ACH history<\/option>';
        }
        rc = showACHItem('upload');
        if (rc == '1') {
            str += '<option class="menuItem"  menuitem="achFileUpload">ACH file upload</span><\/option><option class="menuItem"  menuitem="achFileUploadTrans">ACH file upload transmit<\/option>';
            str += '<option class="menuItem"  menuitem="achFileUploadStatus">ACH file upload status</span><\/option><option class="menuItem"  menuitem="achFileUploadHistory">ACH file upload history<\/option>';
        }
    }
    rc = showMenuItem('fileup');
    if (rc == '1') {
        str += '<option>Upload file<\/option><option>Transmit file<\/option>';
        str += '<option>File upload audit report<\/option><option>File upload detail history report<\/option>';
        str += '<option>File upload summary history report<\/option>';
    }
    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('freeform');
        if (rc1 == '1') {
            str += '<option class="menuItem"  menuitem="onetimeWireTransReq">One time wire transfer request<\/option>';
        }
        rc2 = showWireItem('repetitive');
        if (rc2 == '1') {
            str += '<option class="menuItem"  menuitem="tempBasedWIreTransReqSingle">Template based wire transfer - single request<\/option>';
        }
        if ((rc1 == '1') || (rc2 == '1')) {
            str += '<option class="menuItem"  menuitem="wireTransmit">Wire transmit<\/option>';
        }
        rc = showWireItem('setup');
        if (rc == '1') {
            str += '<option class="menuItem"  menuitem="wireTransSetup">Wire template setup<\/option>';
        }
        rc = showMenuItem('multipleapprovals');
        if (rc == '1') {
            str += '<option>Wire transfer template approval<\/option>';
        } 

        if ((rc1 == '1') || (rc2 == '1')) {
            str += '<option class="menuItem"  menuitem="wireHistory">Wire history<\/option>';
        }

    }
    rc = showMenuItem('stop');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="stopPayReq">Stop payment request<\/option><option class=" menuItem"  menuitem="stopPayReq">Stop payment request<\/option>';
        str += '<option class=" menuItem"  menuitem="stopPayAct">Stop payment activity<\/option>';
    }
    rc = showMenuItem('achpospay');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="achPosPayExceptionMngr">ACH positive pay exceptions manager><\/option><option class=" menuItem"  menuitem="achPosPayExceptionStatus">ACH positive pay exceptions status<\/option>';
        str += '<option class=" menuItem"  menuitem="achPosPayOrigCompMaint">ACH originator company maintenance<\/option>';
    }
    rc = showMenuItem('opositive');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="posPayExceptions">Positive pay exceptions<\/option><option class=" menuItem"  menuitem="posPayHist">Positive pay history<\/option>';
    }
    rc = showMenuItem('positive');
    if (rc == '1') {
        if (showMenuItem('pospayexception') == '1') {
            str += '<option class=" menuItem"  menuitem="posPayExceptionMngr">Positive pay exceptions manager<\/option>';
        }
        if (showMenuItem('pospayissue') == '1') {
            str += '<option class=" menuItem"  menuitem="posPayIssueEntry">Positive pay issue entry<\/option><option class="menuItem"  menuitem="posPayissueFileImp">Positive pay issue file import<\/option>';
            str += '<option class=" menuItem"  menuitem="posPayupdateIssue">Positive pay update issue<\/option><option class="menuItem"  menuitem="posPayIssueAppr">Positive pay issue approval<\/option>';
        }
        str += '<option class=" menuItem"  menuitem="posPayDecisionRep">Positive pay decisions report</span><\/option>';
        str += '<option class=" menuItem"  menuitem="posPayOutIssueRep">Positive pay outstanding issues report</span><\/option><option class=" menuItem"  menuitem="posPayStaleIssueRep">Positive pay stale issues report<\/option>';
        str += '<option class=" menuItem"  menuitem="posPayOutIssueRep">Positive pay outstanding issues report</span><\/option><option class=" menuItem"  menuitem="posPayStaleIssueRep">Positive pay stale issues report<\/option>';
    }
    rc = showMenuItem('fullrecon');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="acntReconIssueManualEntry">Account recon issue manual entry<\/option><option class=" menuItem"  menuitem="acntReconIssueFileImp">Account recon issue file import<\/option>';
        str += '<option class=" menuItem"  menuitem="acntReconUpdateIssue">Account recon update issue<\/option><option class=" menuItem"  menuitem="acntReconStatementRep">Account recon statement report<\/option>';
        str += '<option class=" menuItem"  menuitem="acntReconActRep">Account recon activity report<\/option>';
    }
    rc = showMenuItem('partrecon');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="partAcntReconStmtRep">Account recon statement report<\/option><option class=" menuItem"  menuitem="partAcntReconActRep">Account recon activity report<\/option>';
    }
    rc = showMenuItem('deprecon');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="depReconStmtRep">Deposit recon statement report<\/option><option class=" menuItem"  menuitem="depReconActRep">Deposit recon activity report<\/option>';
    }
    rc = showMenuItem('chkreorder');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="orderChecksDepSlips">Order checks/deposit slips<\/option>';
    }
    rc = showMenuItem('capturerdc');
    if (rc == '1') {
        str += '<option class=" menuItem"  menuitem="rdCapture">Remote deposit capture<\/option>';
    }
    str += '<option class="menuItem"  menuitem="viewReceivedMailNAlerts">View received mail and alerts</span><\/option><option class=" menuItem"  menuitem="viewSentMail">View sent mail<\/option>';
    str += '<option class="menuItem"  menuitem="contactUs">Contact us<\/option><option class=" menuItem"  menuitem="downloadDoc">Download documents<\/option>';
    str += '<option class="menuItem"  menuitem="userAdmin">User administration<\/option><option class=" menuItem"  menuitem="acntAdmin">Account administration<\/option>';
    str += '<option class="menuItem"  menuitem="apprAdmin">Approvals administration<\/option><option class=" menuItem"  menuitem="changePswd">Change password<\/option>';
    str += '<option class="menuItem"  menuitem="personalPref">Personal preferences<\/option><option class=" menuItem"  menuitem="manageFav">Manage favorites<\/option>';
    str += '<option class="menuItem"  menuitem="viewUserActRep">View user activity report<\/option>';

    //rc = showMenuItem('tokenapproval')
    //if (rc == '1') {
    //    str += '<option>Secure token setup<\/option>';
    //}

    str += '<\/select>';

    helpwriteContent(id, str);

} //end writeFavoritesSelect

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for Approvals Administration
//This function calls the showMenuItem function  
//to determine which services should be displayed
function writeApprovalService(id) {
    var rc, rc1, rc2; rc3 = false;
    var rc4 = false;
    var bkgrnd = '0';
    var str = '';
    var str1 = '';
    if (id == "approvetrans") {
        rc3 = true;
    }
    if (id == "approvesetup") {
        rc4 = true;
    }
    if (rc3) {
        str1 += '<table cellpadding="0" cellspacing="0" width="95%"><tr><td width="100%">';
        str1 += '<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
        str1 += 'style="width:100%;border-collapse:collapse" id="trans">';
        str1 += '<tr class="dgHeader" style="white-space:nowrap;" id="info">';
        str1 += '<td style="width:20%" class="dgSortLink royal_grid_sorted">Service Name';
        str1 += '<\/td>';
        str1 += '<td style="width:15%" class="dgSortLink" align="center">Request Amount<\/td>';
        str1 += '<td style="width:20%" align="center">Approvals If Less or Equal<\/td>';
        str1 += '<td style="width:15%" align="center" >Approvals If Greater<\/td>';
        str1 += '<td style="width:30%;padding:2px 0 2px 0;"  align="center">Require Separate Entry From Approval<br><input type="checkbox" id="chkAll0" onClick="checkUncheck(\'chkAll0\')"><\/td>';
        str1 += '<\/tr>';
    }
    else {
        str1 += '<table cellpadding="0" cellspacing="0" width="95%"><tr><td width="100%">';
        if (id == "approveupload") {
            str1 += '<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
            str1 += 'style="width:100%";border-collapse:collapse" id="trans1">';
        }
        if (id == "approveissues") {
            str1 += '<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
            str1 += 'style="width:100%";border-collapse:collapse" id="trans2">';
        }
        if (id == "approvesetup") {
            str1 += '<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
            str1 += 'style="width:100%";border-collapse:collapse" id="trans4">';
        }
        str1 += '<tr class="dgHeader style="white-space:nowrap;" id="info">';
        str1 += '<td style="width:37%;" class="dgSortLink royal_grid_sorted">Service Name';
        str1 += '<\/td>';
        str1 += '<td align="center">Approvals Required<\/td>';
        if (id == "approveupload")
            str1 += '<td align="center" width="30%">Require Separate Entry From Approval<br><input type="checkbox" id="chkAll1" onClick="checkUncheck(\'chkAll1\')"><\/td>';


    }


    if (id == "approveupload") {
        rc = showMenuItem('integratedpayables')
        if (rc == '1' && !rc3) {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="integratedPayables"></span><\/td>';
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        if (str != "") {
            str1 += str;
            str1 += '<\/table><\/td><\/tr><\/table>';
        }
        else {
            str1 = "";
        }

        helpwriteContent(id, str1);
        return;
    }
    else {
        if (id == "approveissues") {
            rc1 = showMenuItem('fullrecon');
            rc = showMenuItem('pospayissue');
            rc2 = showMenuItem('pospayexception');
            rc3 = showMenuItem('revpospay');

            if (rc1 == '1') {
                str += '<tr style="white-space:nowrap;">';
                str += '<td><span class="service" service="fullAccountRecon"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
            if (showMenuItem('positive') == '1') {
                if (rc == '1') {

                    str += '<tr style="white-space:nowrap;">';
                    str += '<td><span class="service" service="positivePayIssueMaintenance"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/td>';
                    str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                    str += '<\/tr>';
                }
            }

            if (showMenuItem('positive') == '1' && rc2 == '1') {

                str += '<tr style="white-space:nowrap;">';
                str += '<td><span class="service" service="positivePayExceptionMaintenance"></span>&nbsp;&nbsp;<\/td>';
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
            if (str != "") {
                str1 += str;
                str1 += '<\/table><\/td><\/tr><\/table>';
            }
            else {
                str1 = "";
            }

            helpwriteContent(id, str1);
            return;
        }
    }
    rc = showMenuItem('admin');
    if (rc && !rc3) {
        str += '<tr style="white-space:nowrap;"><td>Administration<\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('upload');
        if (rc1 == '1' && rc3) {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="achFileUpload"></span><\/td>';

            str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
            str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';

            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc1 = showMenuItem('achpospay');
    if (rc1 == '1' && rc3) {
        str += '<tr style="white-space:nowrap;" class="arppaserv"><td><span class="service" service="achPositivePay"></span><\/td>';

        str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';

        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('book');
    if (rc == '1') {
        str += '<tr  style="white-space:nowrap;"><td><span class="service" service="bookTransfer"></span><\/td>';

        if (rc3) {
            str += '<td align="center">$ <input type="text" size="15" value="2,000.00" style="text-align:right" \/><\/td>';
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        }
        str += '<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('collection');
        if (rc1 == '1') {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ccdCollection"></span> (Corporate)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc1 = showACHItem('ccdpay');
        if (rc1 == '1') {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ccdPayment"></span> (Corporate)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc1 = showACHItem('ctxcoll');
        if (rc1 == '1') {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ctxCollection"></span> (Corp Trade)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc1 = showACHItem('ctx');
        if (rc1 == '1') {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ctxPayment"></span> (Corp Trade)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }


        rc1 = showACHItem('child');
        if (rc1 == '1') {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="childSupportPayment"></span><\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="3,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('cardpay');
    if (rc == '1' && rc3) {

        str += '<tr style="white-space:nowrap;"><td><span class="service" service="creditCardPayments"></span><\/td>';

        str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }

    rc = showMenuItem('escrowacctransfer');
    rc1 = showMenuItem('desa');
    if (rc == '1' && rc1 == '1' && rc3) {
        str += '<tr style="white-space:nowrap;"><td><span class="service" service="escrowAccountTransfer"></span><\/td>';
        str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }

    rc = showMenuItem('express');
    if (rc == '1' && rc3) {

        str += '<tr style="white-space:nowrap;"><td><span class="service" service="expressTransfer"></span><\/td>';

        str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('federal');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="federalTax"></span><\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('funds');
    if (rc == '1' && rc3) {

        str += '<tr style="white-space:nowrap;"><td><span class="service" service="fundsTransfer"></span><\/td>';

        str += '<td align="center">$ <input type="text" size="15" value="10,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('federal');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="iatCollection"></span> (International)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('federal');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="iatPayment"></span> (International)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('loan');
    if (rc == '1' && rc3) {
        rc1 = showLoanItem('payment');
        rc2 = showLoanItem('advance');
        if ((rc1 == '1') || (rc2 == '1')) {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="loan"></span><\/td>';

            str += '<td align="center">$ <input type="text" size="15" value="10,000.00" style="text-align:right" \/><\/td>';
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<td align="center"><input type="text" size="1" value="3" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('positive');
    rc2 = showMenuItem('pospayexception')
    if (rc == '1' && rc2 == '1' && rc3) {
        str += '<tr style="white-space:nowrap;" class="arppaserv">';
        str += '<td><span class="service" service="positivePayExceptionMaintenance"></span><\/td>';
        str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('collection');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ppdCollection"></span> (Personal)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc1 = showACHItem('payment');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ppdPayment"></span> (Personal)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('revpospay');
    if (rc == '1') {
        str += '<tr style="white-space:nowrap;" class="arppaserv"><td><span class="service" service="reversePositivePay"></span><\/td>';

        if (rc3) {

            str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
            str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
        }
        str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
        str += '<\/tr>';
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('stp820');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="stp820Payment"></span><\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('state');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="stateTax"></span><\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc1 = showACHItem('telcoll');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="telCollection"></span> (Telephone)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }
        rc1 = showACHItem('webcoll');
        if (rc1 == '1') {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="webCollection"></span> (Internet)<\/td>';

            if (rc3) {
                str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
            }
            str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
            str += '<\/tr>';
        }

        rc = showMenuItem('wiremain');
        if (rc == '1') {
            rc1 = showWireItem('wirefileupload');
            if (rc1 == '1') {
                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireFileUpload"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1' && !rc4) {
            rc1 = showWireItem('domesticonetime');
            if (rc1 == '1') {
                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireDomesticOneTime"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1') {
            rc1 = showWireItem('domestictemplate');
            if (rc1 == '1') {

                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireDomesticTemplateBased"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1' && !rc4) {
            rc1 = showWireItem('fxint');
            if (rc1 == '1') {

                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireFxIntlOneTime"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1') {
            rc1 = showWireItem('fxinttemplate');
            if (rc1 == '1') {

                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireFxIntlTemplateBased"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1' && !rc4) {
            rc1 = showWireItem('usint');
            if (rc1 == '1') {

                str += '<tr style="white-space:nowrap;"><td><span class="service" service="wireUSDIntlOneTime"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

        if (rc == '1') {
            rc1 = showWireItem('usinttemplate');
            if (rc1 == '1') {

                str += '<tr  style="white-space:nowrap;"><td><span class="service" service="wireUSDIntlTemplateBased"></span><\/td>';

                if (rc3) {
                    str += '<td align="center">$ <input type="text" size="15" value="5,000.00" style="text-align:right" \/><\/td>';
                    str += '<td align="center"><input type="text" size="1" value="1" style="text-align:right" maxlength="1" \/><\/td>';
                }
                str += '<td align="center"><input type="text" size="1" value="2" style="text-align:right" maxlength="1" \/><\/td>';
                str += '<\/tr>';
            }
        }

    }

    if (str != "") {
        str1 += str;
        str1 += '<\/table><\/td><\/tr><\/table>';
    }
    else {
        str1 = "";
    }

    helpwriteContent(id, str1);

} //end writeApprovalService

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//New function introduced in Kilimanjaro for multiple approvals
//This function writes the table of services for Assigned Services and Account Entitlements based on service.
//This function calls the showMenuItem function to determine which services should be displayed
function writeUserAssignedServices(id, name) {
    var rc;

    rc = showMenuItem(id);
    if (rc != "1") {
        document.getElementById(name).style.display = 'none';
    }
    else {
        if ((name == "positivepayexceptionreporting" || name == "positivepayissuereporting") && showMenuItem('positive') != '1') {
            document.getElementById(name).style.display = 'none';
        }
    }

}
//end writeUserAssignedServices

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of user limits for User Administration
//This function calls the showMenuItem function  
//to determine which services should be displayed
function writeUserAdminLimits(id) {
    var rc, rc1, rc2, rc3, rc4, rc5, rc6;
    var bkgrnd = '0';
    var str = '';

    str += '<table cellpadding="0" cellspacing="0" width="100%"><tr><td width="100%">';
    str += '<table class="dgGrid" cellpadding="5" cellspacing="0" border="0" ';
    str += 'style="width:99%";border-collapse:collapse" id="userlimits" align="center"><tr class="dgHeader style="white-space:nowrap;" id="info">';
    str += '<td>Service';
    str += '<\/td>';
    str += '<\/tr>';

    rc = showMenuItem('ach');
    if (rc == '1') {
        rc1 = showACHItem('collection');
        rc2 = showACHItem('payment');
        rc3 = showACHItem('federal');
        rc4 = showACHItem('state');
        rc5 = showACHItem('child');
        rc6 = showACHItem('stp820');
        if ((rc1 == '1') || (rc2 == '1') || (rc3 == '1') || (rc4 == '1') || (rc5 == '1') || (rc6 == '1')) {
            str += '<tr style="white-space:nowrap;"><td><span class="service" service="ach"></span>&nbsp;&nbsp;&nbsp;';
            if (id == 'view_limits') {
                str += '<a href="..\/administration\/ach_limit_modify.html" class="default" id="editachlimits">Edit<\/a>';
            }
            else if (id == 'custom_limits') {
                str += '<a href="..\/administration\/ach_limit_custom.html" class="default" id="editachlimits">Edit<\/a>';
            }
            else {
                str += 'View/Change';
            }
            str += '<\/td>';
            str += '<\/tr>';
        }
    }
    rc = showMenuItem('billpay');
    if (rc == '1') {

        str += '<tr style="white-space:nowrap;"><td><span class="service" service="billPay"></span>&nbsp;&nbsp;&nbsp;';
        if (id == 'view_limits') {
            str += '<a href="..\/administration\/billpay_limit_custom.html" class="default" id="editbillpaylimits">Edit<\/a>';
        }
        else if (id == 'custom_limits') {
            str += '<a href="..\/administration\/billpay_limit_custom.html" class="default" id="editbillpaylimits">Edit<\/a>';
        }
        else {
            str += 'Edit';
        }
        str += '<\/td>';
        str += '<\/tr>'
    }
    rc = showMenuItem('wiremain');
    if (rc == '1') {
        rc1 = showWireItem('repetitive');
        rc2 = showWireItem('freeform');
        if ((rc1 == '1') || (rc2 == '1')) {

            str += '<tr style="white-space:nowrap;"><td><span class="service" service="wire"></span>&nbsp;&nbsp;&nbsp;';

            if (id == 'view_limits') {
                str += '<a href="..\/administration\/wire_limit_modify.html" class="default" id="editwirelimits">Edit<\/a>';
            }
            else if (id == 'custom_limits') {
                str += '<a href="..\/administration\/wire_limit_custom.html" class="default" id="editwirelimits">Edit<\/a>';
            }
            else {
                str += 'Edit';
            }
            str += '<\/td>';
            str += '<\/tr>';
        }
    }
    str += '<\/table><\/td><\/tr><\/table>';
    helpwriteContent(id, str);

} //end writeUserAdminLimits

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//functions writeContent...
//These functions will write the <table> tags in the main content area of the overview pages
//These functions call the showMenuItem function  
//to determine if the content table should be displayed

function writeContentLarge(id) {

    if (id == 'content_large')
        contentStr = AddMenuItemOnPage(GetDepositAcntRepMenuItems(), 'Create a custom report from account summary and transaction data, or manage a saved report.', id)
} // end writeContentAcct

function alterValue(j) {
    if (j == 0)
        j = 1;
    else
        j = 0;
    return j;
}
function AddMenuItemOnPage(Elements_Array, insTxt, id) {
    contentStr = "";
    if (Elements_Array.length > 1) {
        contentStr += '<table cellpadding="0" cellspacing="4" border="0" width="100%"><tr>';
        contentStr += '<td class="subheader" colspan="3" align="left" ><span'
        if (Elements_Array[0].menuItem != "")
            contentStr += ' class="menuItem" menuItem="' + Elements_Array[0].menuItem + '"';
        contentStr += '>' + Elements_Array[0].linkText + '<\/span><br>';
        contentStr += '<hr style="width:100%;margin-top: -3px;" \/><span class="message_detail">';
        contentStr += insTxt;
        contentStr += '<\/span><\/td><\/tr>';
        var blankRowFlag = false;


        var totalRows = Math.round((Elements_Array.length - 1) / 2);
        var nexttdindex = totalRows + 1;

        for (var i = 1; i <= totalRows  ; i++) {

            var td1 = Elements_Array[i];

            contentStr += '<td align="left" width="30%" style="padding-left:5px" nowrap><a href="' + td1.href + '" class="default ';
            if (td1.target != "") {
                subMenustr += 'target="' + td1.target + '"';
            }
            else
                subMenustr += '"_self"';
            if (td1.menuItem != "") {
                contentStr += 'menuItem" menuItem="' + td1.menuItem
            }
            contentStr += '">';
            contentStr += td1.linkText + '<\/a><\/td>';

            if (nexttdindex < Elements_Array.length) {
                var td2 = Elements_Array[nexttdindex];
                contentStr += '<td align="left"  nowrap><a href="' + td2.href + '" class="default '
                if (td2.target != "") {
                    subMenustr += 'target="' + td2.target + '"';
                }
                if (td2.menuItem != "") {
                    contentStr += 'menuItem" menuItem="' + td2.menuItem
                }
                contentStr += '">' + td2.linkText + '<\/a><\/td><\/tr>';
                nexttdindex++;
            }
            else
                contentStr += '<td>&nbsp;</td>';


        }

        contentStr += '<tr><td colspan="3">&nbsp;<\/td><\/tr><\/table>';
    }
    helpwriteContent(id, contentStr);

} //end testAcct
function writeContentMid(id) {
    contentStr = AddMenuItemOnPage(GetDepositRepMenuItems(), 'Create a custom report from account summary and transaction data.', id)
} // end writeContentAcct

function writeContentRetReport(id) {
    contentStr = AddMenuItemOnPage(GetRetItemsMenuItems(), 'View summary of return item report.', id)
} // end writeContentAcct

function writeContentAcct(id) {
    var rc;
    var str = '';
    var testAcct = false;

    if (id == 'content_acct') {
        rc = showMenuItem('account');
        if (rc == '1') {
            testAcct = true;
        }

    } //end content_acct
} // end writeContentAcct	

function writeContentRpt(id) {
    contentStr = AddMenuItemOnPage(GetDepositReportsMenuItems(), 'Create a custom report from account summary and transaction data.', id)
} // end writeContentRpt	

function writeContentInv(id) {
    contentStr = AddMenuItemOnPage(GetInvReportMenuItems(), 'View summary and detail information for a selected investment account.', id)
} // end writeContentInv

function writeContentDesa(id) {
    contentStr = AddMenuItemOnPage(GetEscrowRepMenuItems(), 'View escrow account information and activity for a selected master ID or sub account.', id)
} // end writeContentDesa
function writeContentSSO(id) {
    AddMenuItemOnPage(GetezBusinessCardMgmtMenuItems(), 'Access eZBusiness Card Management to manage credit card usage.', id)
}

function writeContentAch(id) {
    contentStr = AddMenuItemOnPage(GetAchReportsMenuItems(), 'View ACH transactions that have been returned, and changes reuired for your ACH templates.', id)
}// end writeContentACH

function writeContentMicro(id) {
    contentStr = AddMenuItemOnPage(GetAccountReportsMenuItems(), 'View summary and transactions for a selected deposit account.', id)
} //end writeContentMicro

function writeContentLoan(id) {
    contentStr = AddMenuItemOnPage(GetLoanRepMenuItems(), 'View summary and detail information on the notes for a selected loan.', id)
} // end writeContentLoan	

function writeContentCard(id) {
    contentStr = AddMenuItemOnPage(GetCreditCardRepMenuItems(), 'View credit card information and activity for a selected credit card.', id)
} // end writeContentCard	

function writeContentDown(id) {
    contentStr = AddMenuItemOnPage(GetDownloadableRepMenuItems(), 'View, print or download a report.', id)
} // end writeContentDown	

function writeContentStmt(id) {
    contentStr = AddMenuItemOnPage(GetStatemntNDocMenuItems(), 'View statements and documents for your accounts.', id)
} // end writeContentStmt	

function writeContentWire(id) {
    contentStr = AddMenuItemOnPage(GetWireRepMenuItems(), 'View incoming wire information.', id)
} // end writeContentWire

function writeContentSchedule(id) {
    AddMenuItemOnPage(GetSchReqMenuItems(), 'View and manage scheduled requests.', id)
} //end writeContentSchedule

function writeContentExpress(id) {
    AddMenuItemOnPage(GetExpressTransMenuItems(), 'Transfer money from one account to another account within your financial organization.', id)
} // end writeContentExpress

function writeContentBook(id) {
    AddMenuItemOnPage(GetBookTransMenuItems(), 'Transfer money from one account to many accounts within your financial organization.', id)
} // end writeContentBook

function writeContentFunds(id) {
    AddMenuItemOnPage(GetFundsTransMenuItems(), 'Transfer money between an account within your financial organization and an external account.', id)
} // end writeContentFunds

function writeContentLoans(id) {
    AddMenuItemOnPage(GetLoanMenuItem(), 'Manage loan transaction activities.', id)
} // end writeContentLoans

function writeContentBpmnt(id) {
    AddMenuItemOnPage(GetBillPaymentMenuItems(), 'Manage bill payment activites.', id)
} // end writeContentBpmnt

function writeContentBpay(id) {
    AddMenuItemOnPage(GetBillPayMenuItems(), 'Manage bill payment activities.', id)
} // end writeContentBpay

function checkBillPay(id) {
    var check;
    var temp;

    check = showMenuItem('billpay');
    if (check == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkBillPay

function writeContentCred(id) {
    AddMenuItemOnPage(GetCreditCardMenuItems(), 'Enter and approve credit card payments. View credit card payment history.', id)
} // end writeContentCred	

function writeContentACH(id) {
    AddMenuItemOnPage(GetAchMenuItems(), 'Manage ACH activities.', id)
} // end writeContentACH

function writeContentIntegrated(id) {
    AddMenuItemOnPage(GetIntPayMenuItems(), 'Manage the transfer of payment files and payments from your PC to the bank.', id)
} // end writeContentIntegrated

function writeContentUp(id) {
    AddMenuItemOnPage(GetFileUploadMenutItems(), 'Manage the transfer of files from your PC to the bank.', id)
} // end writeContentUp	

function writeContentWires(id) {
    AddMenuItemOnPage(GetWireMenuItems(), 'Manage wire transfer activities.', id)
} // end writeContentWires

function writeContentEscrowAccTransfer(id) {
    AddMenuItemOnPage(GetEscrowAccountTransferMenuItem(), 'Transfer money between an escrow sub account and the related main account.', id)
} // end writeContentEscrowAccTransfer

function writeContentPayroll(id) {
    AddMenuItemOnPage(GetSurePayrollMenuItem(), 'Set up payroll, preview and run payroll, and view payroll status and reports.', id)
} // end writeContentPayroll

function writeContentStop(id) {
    AddMenuItemOnPage(GetStopPayMenuItems(), 'Request stop payments or view stop payment activity.', id)
} // end writeContentStop	

function writeContentACHPP(id) {
    AddMenuItemOnPage(GetAchPosPayMenuItems(), 'Examine questionable ACH debit transactions online and determine (pay or reject).', id)
} // end writeContentACHPP

function writeContentEnhPP(id) {
    AddMenuItemOnPage(GetPosPayMenuItems(), 'Examine questionable checks online and determine check status (pay or reject).', id)
} // end writeContentEnhPP

function writeContentFAR(id) {
    AddMenuItemOnPage(GetFullReconMenuItems(), 'View account reconciliation reports for account balancing.', id)
} // end writeContentFAR

function writeContentPAR(id) {
    AddMenuItemOnPage(GetPartialReconMenuItems(), 'View account reconciliation reports for account balancing.', id)
} // end writeContentPAR

function writeContentDAR(id) {
    AddMenuItemOnPage(GetDepositReconMenuItems(), 'View account reconciliation reports for account balancing.', id)
} // end writeContentDAR

function writeContentChk(id) {
    AddMenuItemOnPage(GetCheckOrderMenuItems(), 'Launch or link to the check vendor application to complete check and deposit slip orders.', id)
} // end writeContentChk

function writeContentIS(id) {
    AddMenuItemOnPage(GetImageSrchMenuItems(), 'View images of archived checks,deposit tickets, and deposited items.', id)
} // end writeContentIS

//lockbox
function writeContentLBC(id) {
    AddMenuItemOnPage(GetLockBoxMenuItems(), 'Access the Lockbox Central Services.', id)
} // end writeContentLBC

function checkLBC(id) {
    var check;
    var temp;

    check = showMenuItem('Lockbox');
    if (check == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkRDC

function writeContentRDC(id) {
    AddMenuItemOnPage(GetRDCMenuItems(), 'Access remote deposit capture system to deposit checks.', id)
} // end writeContentRDC

function checkRDC(id) {
    var check;
    var temp;

    check = showMenuItem('capturerdc');
    if (check == '0') {
        temp = document.getElementById(id);
        temp.style.display = 'none';
    }
} //end checkRDC
function writepremiumlink(id, ismanage) {
    //var premium = false;
    //var current = eval("record1");

    ////iterate through the data from the text file and store into an array
    ////for (var i = 0; i < record1.length; i++) {

    ////if (record1[i] == 'premium') {

    //if (ismanage) {

    //    str = document.getElementById(id).innerHTML;
    //    str = str.replace(/\<\/UL\>/gi, '');
    //    //alert(str);
    //    str += '<li class="leftContentListNavSelected"><a href="../customer_support/manage_alerts.html">Manage alerts</a></li></UL>';
    //    document.getElementById(id).innerHTML = str;
    //}
    //else {

    //    str = document.getElementById(id).innerHTML;
    //    str = str.replace(/\<\/UL\>/gi, '');
    //    str += '<li><a href="../customer_support/manage_alerts.html">Manage alerts</a></li></UL>';
    //    document.getElementById(id).innerHTML = str;
    //    if (id.substring(0, 4) == 'ins_') {
    //        document.getElementById('instruction').style.display = '';
    //    }

    //    //}
    //    //}
    //}
    //mainpage();
}
function writeContentComm(id) {
    AddMenuItemOnPage(GetCommunicationMenuItem(), 'View mail and alert messages, send a message, retrieve bank forms and documents, and manage alerts.', id)
} //end content_comm
// end writeContentComm

function writeContentCoAdmin(id) {
    AddMenuItemOnPage(GetCompAdminMenuItem(), 'Perform company administration activities.', id)
} // end writeContentCoAdmin

function writeContentSeAdmin(id) {
    AddMenuItemOnPage(GetServiceAdminMenuItems(), 'Maintain company and account defaults for the services that your company uses.', id)
} // end writeContentSeAdmin

function writeContentSelfAdmin(id) {
    AddMenuItemOnPage(GetSelfAdminMenuItems(), 'Perform self administrative activities.', id)
} // end writeContentSelfAdmin
//Function selects a particular value in a dropdown list
function SelectDropDownValue(id, Value) {
    var myselect = document.getElementById(id);
    for (var i = 0; i < myselect.options.length; i++) {
        if (myselect.options[i].value == Value) {
            myselect.options[i].selected = true;
        }
    }
}

//Function loads the dropdownlist for ACH Payment pages  
//based on the availability of the services
function LoadDropDownValuesForPayment(id, str) {
    var dropDownList = document.getElementById(id);
    if (showACHItem('ccdpay')) {
        var optn = document.createElement("OPTION");
        optn.text = "CCD Payment (Corporate)";
        optn.value = "CCD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('child')) {
        var optn = document.createElement("OPTION");
        optn.text = "Child Support Payment";
        optn.value = "CHILD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('ctx')) {
        var optn = document.createElement("OPTION");
        optn.text = "CTX Payment (Corporate Trade Exchange)";
        optn.value = "CTX" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('federal')) {
        var optn = document.createElement("OPTION");
        optn.text = "Federal Tax";
        optn.value = "FED" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('iat')) {
        var optn = document.createElement("OPTION");
        optn.text = "IAT Payment (International)";
        optn.value = "IAT" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('payment')) {
        var optn = document.createElement("OPTION");
        optn.text = "PPD Payment (Personal)";
        optn.value = "PPD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('state')) {
        var optn = document.createElement("OPTION");
        optn.text = "State Tax";
        optn.value = "STATE" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('stp820')) {
        var optn = document.createElement("OPTION");
        optn.text = "STP 820 Payment";
        optn.value = "STP820" + str;
        dropDownList.options.add(optn);
    }
}

function LoadDropDownValuesForPaymentFileDef(id, str) {
    var dropDownList = document.getElementById(id);
    if (showACHItem('ccdpay')) {
        var optn = document.createElement("OPTION");
        optn.text = "CCD Payment (Corporate)";
        optn.value = "CCD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('child')) {
        var optn = document.createElement("OPTION");
        optn.text = "Child Support Payment";
        optn.value = "CHILD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('ctx')) {
        var optn = document.createElement("OPTION");
        optn.text = "CTX Payment (Corporate Trade Exchange)";
        optn.value = "CTX" + str;
        dropDownList.options.add(optn);
    }

    if (showACHItem('iat')) {
        var optn = document.createElement("OPTION");
        optn.text = "IAT Payment (International)";
        optn.value = "IAT" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('payment')) {
        var optn = document.createElement("OPTION");
        optn.text = "PPD Payment (Personal)";
        optn.value = "PPD" + str;
        dropDownList.options.add(optn);
    }

}

//Function loads the dropdownlist for ACH collection pages  
//based on the availability of the services
function LoadDropDownValuesForCollection(id, str) {
    var dropDownList = document.getElementById(id);
    if (showACHItem('collection')) {
        var optn = document.createElement("OPTION");
        optn.text = "CCD Collection (Corporate)";
        optn.value = "CCD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('ctxcoll')) {
        var optn = document.createElement("OPTION");
        optn.text = "CTX Collection (Corporate Trade Exchange)";
        optn.value = "CTX" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('iatcoll')) {
        var optn = document.createElement("OPTION");
        optn.text = "IAT Collection (International)";
        optn.value = "IAT" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('ppdcoll')) {
        var optn = document.createElement("OPTION");
        optn.text = "PPD Collection (Personal)";
        optn.value = "PPD" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('telcoll')) {
        var optn = document.createElement("OPTION");
        optn.text = "TEL Collection (Telephone)";
        optn.value = "TEL" + str;
        dropDownList.options.add(optn);
    }
    if (showACHItem('webcoll')) {
        var optn = document.createElement("OPTION");
        optn.text = "WEB Collection (Internet)";
        optn.value = "WEB" + str;
        dropDownList.options.add(optn);
    }

}

//Function loads the Side Menu for Positive Pay pages  
//based on the availability of the services


//This function will read from record6 of the modules.txt file  
//the services that were selected to be present in the demo for Common Entry System. 
//The values are stored in the var commonEntryServices, defined in modules_....html
function getCommonEntryServices() {
    var current = eval("record6");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record6.length; i++) {
        commonEntryServices[i] = current[i];
    }
} //end getCommonEntryServices

function showCommonEntryService(id) {
    var check = false;
    getCommonEntryServices();
    for (var i = 0; i < commonEntryServices.length; i++) {
        if (commonEntryServices[i] == id) {
            check = true;
            i = commonEntryServices.length;
        } //if
    } //for
    return check;
} //end showCommonEntryService

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
//This function writes the table of services for User Administration
//This function calls the showMenuItem function  
//to determine which services should be displayed
function writeExternalServiceId(id) {
    var rc;
    var bkgrnd = '0';
    var str = '', str1 = '';

    rc = showMenuItem('capturerdc');
    if (rc == '1') {
        if (bkgrnd == '0') {
            str1 += '<tr class="dgItem0" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>'; bkgrnd = '1';
        }
        else {
            str1 += '<tr class="dgItem1" style="white-space:nowrap;"><td>Remote Deposit Capture<\/td>'; bkgrnd = '0';
        }
        if (id == 'commonentry_id')
            str1 += '<td align="center"><a href="..\/administration\/external_user_id_edit.html" class="default">123UserId<\/a><\/td>';
        else
            if (id == 'commonentry_copy' || id == 'commonentry_delete')
                str1 += '<td align="center">&nbsp;<\/td>';
            else
                str1 += '<td class="inactive_link" align="center">123UserId<\/td>';
        str1 += '<\/tr>';
    }
    if (str1 != '') {
        str += '<table cellpadding="0" cellspacing="0" width="90%"><tr><td width="100%">';
        str += '<table class="dgGrid" cellpadding="4" cellspacing="0" border="0" ';
        str += 'style="width:90%";border-collapse:collapse"><tr class="dgHeader style="white-space:nowrap;">';
        str += '<td width="75%" class="dgSortLink royal_grid_sorted">Service Name&nbsp;';
        str += '<\/td>';
        str += '<td align="center" width="25%">'
        if (id == 'commonentry_copy' || id == 'commonentry_delete')
            str += '&nbsp;';
        else
            str += 'User ID';
        str += '<\/td><\/tr>';
        str += str1;
        str += '<\/table><\/td><\/tr>';
        str += '<tr><td>&nbsp;<\/td><\/tr><\/table>';
    }
    helpwriteContent(id, str);

} //end writeExternalServiceId

//This function will read from record5 of the modules.txt file  
//the account types that were selected to be present in the demo for Statements. 
//The values are stored in the var statementAccounts, defined in modules_....html
function getStatementAccounts() {
    var current = eval("record5");

    //iterate through the data from the text file and store into an array
    for (var i = 0; i < record5.length; i++) {
        statementAccounts[i] = current[i];
    }
} //end getStatementAccounts

function showStatementAccounts(id) {
    var check = false;
    getStatementAccounts();
    for (var i = 0; i < statementAccounts.length; i++) {
        if (statementAccounts[i] == id) {
            check = true;
            i = statementAccounts.length;
        } //if
    } //for
    return check;
} //end showStatementAccounts

function writeDeliveryOptions() {

    var current = eval("Statements_DeliveryOptions");
    var str = '<select>';
    //iterate through the data from the text file and store into an array
    for (var i = 0; i < Statements_DeliveryOptions.length; i++) {
        if (current[i] == 'Online')
            str += '<option selected="selected">' + current[i] + '<\/option>';
        else
            str += '<option>' + current[i] + '<\/option>';
    }
    str += '<\/select>';
    return str;
}

function getStatementPrefAccounts(abaVal, accountVal, descriptionVal, accounttypeVal, documenttypeVal, deliverypreferenceVal) {
    var statementDetails = {
        aba: abaVal, account: accountVal, description: descriptionVal, accounttype: accounttypeVal, documenttype: documenttypeVal, deliverypreference: deliverypreferenceVal
    }
    return statementDetails;
}

function writeStatementPref(id) {
    var statementPref = [];

    var testChecking = false; var testSaving = false; var testLoan = false; var testAnalysis = false; var testcreditCard = false;

    testChecking = showStatementAccounts('checking');
    testAnalysis = showStatementAccounts('analysis');
    testLoan = showStatementAccounts('loan');
    testSaving = showStatementAccounts('saving');
    testcreditCard = showStatementAccounts('creditcard');
    var noticeSettng = false;
    var notifyStmtPref = null;
    if (eval("noticeSttng") != "disableNotice") {
        notifyStmtPref = eval("noticeNStmt");
        noticeSettng = true;
    }

    if (testSaving) {
        statementPref.push(getStatementPrefAccounts("081203790", "*2470", "PRESTIGE HEALTH ACCOUNT", "Savings", "Statement", ""));
        statementPref.push(getStatementPrefAccounts("081203790", "*0740", "PRESTIGE HIGH YIELD INVESTMENT FUND", "Savings", "Statement", ""));
    }
    if (testLoan) {
        statementPref.push(getStatementPrefAccounts("770110000", "*2013 - 00002", "PRESTIGE LOAN 3", "Loan", "Statement", ""));
        statementPref.push(getStatementPrefAccounts("770110000", "*0009 - 00001", "PRESTIGE LOAN 2", "Loan", "Statement", ""));
    }
    if (testcreditCard) {
        statementPref.push(getStatementPrefAccounts("081203790", "*1691", "PRESTIGE CREDIT CARD ACCOUNT", "Credit Card", "Statement", ""));
    }
    if (testChecking) {
        if (notifyStmtPref == "Combined") {
            statementPref.push(getStatementPrefAccounts("081203790", "*4512", "PRESTIGE PAYROLL ACCOUNT", "Checking", "Statement <br />Notice", ""));
            statementPref.push(getStatementPrefAccounts("081203790", "*4511", "PRESTIGE PAYROLL ACCOUNT", "Checking", "Statement <br />Notice", ""));
        }
        else {
            statementPref.push(getStatementPrefAccounts("081203790", "*4512", "PRESTIGE OPERATING ACCOUNT", "Checking", "Statement", ""));
            if (noticeSettng) {
                statementPref.push(getStatementPrefAccounts("081203790", "*4512", "PRESTIGE OPERATING ACCOUNT", "Checking", "Notice", ""));
              
            }
            statementPref.push(getStatementPrefAccounts("081203790", "*4511", "PRESTIGE OPERATING ACCOUNT", "Checking", "Statement", ""));
            if(noticeSettng)
                statementPref.push(getStatementPrefAccounts("081203790", "*4511", "PRESTIGE OPERATING ACCOUNT", "Checking", "Notice", ""));
            
        }
 
    }
    if (testAnalysis) {
        statementPref.push(getStatementPrefAccounts("081203790", "64 - *4575", "Marketing Activities", "Analysis", "Statement", ""));
        statementPref.push(getStatementPrefAccounts("081203790", "406 - *8345", "Sales Activities", "Analysis", "Statement", ""));
    }


    WriteAccountsForStatements(id, statementPref);
}

function WriteAccountsForStatements(id, arr) {
    var str1 = ""; var bkgrnd = '0'; var rc = false;
    var testChecking = false; var testSaving = false; var testLoan = false; var testAnalysis = false; var testcreditCard = false;

    testChecking = showStatementAccounts('checking');
    testAnalysis = showStatementAccounts('analysis');
    testLoan = showStatementAccounts('loan');
    testSaving = showStatementAccounts('saving');
    testcreditCard = showStatementAccounts('creditcard');


    if (testAnalysis || testChecking || testLoan || testSaving || testcreditCard) {
        str1 += '<table class="dgGrid" cellspacing="0" cellpadding="4" border="0" style="width:95%;border-collapse:collapse;" id="statementGridPref">';
        str1 += '<tr class="dgHeader" style="white-space:nowrap;" id="info">';
        str1 += '<td align="left" class="dgSortLink">ABA</td>';
        str1 += '<td align="left" class="dgSortLink royal_grid_sorted">Account</td>';
        str1 += '<td align="left" class="dgSortLink">Description</td>';
        str1 += '<td align="left" class="dgSortLink ">Account Type</td>';
        str1 += '<td align="left" class="dgSortLink">Document Type</td>';
        str1 += '<td align="left" class="dgSortLink">Delivery Preference</td>';
        str1 += '</tr>';
        var k = 0;
        for (var i = 0; i < arr.length; i++) {

            if (!Object.keys) {
                Object.keys = function (obj) {
                    var keys = [];

                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            keys.push(i);
                        }
                    }

                    return keys;
                };
            }

            var inObj = Object.keys(arr[i]);
            str1 += '<tr>';
            for (var j = 0; j < inObj.length; j++) {
                    str1 += '<td id=' + inObj[j] + k++ + ' >'
                    str1 += eval('arr[i].' + inObj[j]);
                    str1 += '</td>';
            }
            str1 += '</tr>';
        }
        str1 += '<\/table>';
    }

    helpwriteContent(id, str1);

    $("#statementGridPref").find("tr:not(':first')").each(function () {
        $(this).find("td:eq(5)").html(writeDeliveryOptions());
    });

    getalternateStylesImmediate('statementGridPref');
}

//Function to change the class name of the grid dynamically
//Always call this function onload atlast after calling all other functions
//If there are any rows which will be removed or will be invisible by any action call this fuction at last in those functions also
function changeClassName(gridname) {
    getsingleUserSettings();
    //document.getElementById('mynew').className= 'dgItem0';
    var grid = document.getElementById(gridname);

    var cname = 'dgItem0';

    for (var i = 1; i < grid.rows.length; i++) {

        if (grid.rows[i].style.display != 'none') {

            grid.rows[i].className = cname;

            if (cname == 'dgItem0')
                cname = 'dgItem1';
            else
                cname = 'dgItem0';

        }

    }

}

//This function performs the same fuctionality as that of the above but we can provide the starting rownumber to this function from where we need to start the adding of class name
function changeClassName1(gridname, startingrow) {
    getsingleUserSettings();
    //document.getElementById('mynew').className= 'dgItem0';
    var grid = document.getElementById(gridname);

    var cname = 'dgItem0';
    for (var i = startingrow; i < grid.rows.length; i++) {

        if (grid.rows[i].style.display != 'none') {

            grid.rows[i].className = cname;

            if (cname == 'dgItem0')
                cname = 'dgItem1';
            else
                cname = 'dgItem0';

        }

    }
}

function changeClassNameWidget1(gridname, startingrow) {
    getsingleUserSettings();
    //document.getElementById('mynew').className= 'dgItem0';
    var grid = document.getElementById(gridname);

    var cname = 'dgItem0widget';
    for (var i = startingrow; i < grid.rows.length; i++) {

        if (grid.rows[i].style.display != 'none') {
            grid.rows[i].className = cname;

            if (cname == 'dgItem0widget')
                cname = 'dgItem1widget';
            else
                cname = 'dgItem0widget';
            //var cells=grid.rows[i].getElementsByTagName("TD");
            //	for (var j=0; j<cells.length; j++) 
            //	{
            //	  cells[j].setAttribute('className','dgGrid td');     				
            //	}
        }

    }
}

function accountactivity_outputoptions(msid, quickid, bookid) {
    var rc = showMenuItem('msmoney');
    var rc1 = showMenuItem('quickbooks');
    var rc2 = showMenuItem('quicken');

    if (rc != '1') {

        if (msid != '' && msid != null) {
            document.getElementById(msid).style.display = 'none';
        }

    }
    if (rc1 != '1') {

        if (quickid != '' && quickid != null) {
            document.getElementById(quickid).style.display = 'none';
            document.getElementById('tr_QuickBooks').style.display = 'none';
        }

    }
    if (rc2 != '1') {

        if (bookid != '' && bookid != null) {
            //document.getElementById(bookid).style.display = 'none';
            $("tr[id*='" + bookid + "']").hide();
        }

    }
}

function CheckServiceRecords() {
    if (showACHItem('collection') != '1') {

        document.getElementById('ccdrow').style.display = 'none';
    }
    if (showACHItem('ppdcoll') != '1') {
        document.getElementById('ppdrow').style.display = 'none';
    }
    if (showACHItem('webcoll') != '1') {
        document.getElementById('webrow').style.display = 'none';
    }
    if (showACHItem('telcoll') != '1') {
        document.getElementById('telrow').style.display = 'none';
    }
}

// Pagination for Edit Large Templates
function pagination(page) {
    document.getElementById('add_row').className = 'inactive_link';
    document.getElementById('add_row').style.cursor = 'text';

    document.getElementById('prev').style.textDecoration = 'underline';
    document.getElementById('prev').style.cursor = 'hand';
    document.getElementById('next').style.textDecoration = 'underline';
    document.getElementById('next').style.cursor = 'hand';
    document.getElementById('prev').onclick = '';
    document.getElementById('next').onclick = '';

    document.getElementById('bottom_prev').style.textDecoration = 'underline';
    document.getElementById('bottom_prev').style.cursor = 'hand';
    document.getElementById('bottom_next').style.textDecoration = 'underline';
    document.getElementById('bottom_next').style.cursor = 'hand';
    document.getElementById('bottom_prev').onclick = '';
    document.getElementById('bottom_next').onclick = '';

    document.getElementById('pg1').style.textDecoration = 'underline';
    document.getElementById('pg2').style.textDecoration = 'underline';
    document.getElementById('pg3').style.textDecoration = 'underline';
    document.getElementById('pg4').style.textDecoration = 'underline';
    document.getElementById('pg5').style.textDecoration = 'underline';

    document.getElementById('bottom_pg1').style.textDecoration = 'underline';
    document.getElementById('bottom_pg2').style.textDecoration = 'underline';
    document.getElementById('bottom_pg3').style.textDecoration = 'underline';
    document.getElementById('bottom_pg4').style.textDecoration = 'underline';
    document.getElementById('bottom_pg5').style.textDecoration = 'underline';
    if (page == 1) {
        document.getElementById('pg1').className = 'inactive_link';
        document.getElementById('pg1').style.textDecoration = 'none';
        document.getElementById('pg2').className = 'default';
        document.getElementById('pg3').className = 'default';
        document.getElementById('pg4').className = 'default';
        document.getElementById('pg5').className = 'default';
        document.getElementById('prev').className = 'inactive_link';
        document.getElementById('prev').style.textDecoration = 'none';
        document.getElementById('next').className = 'default';
        document.getElementById('prev').style.cursor = 'text';
        document.getElementById('add_row').className = 'default';
        document.getElementById('add_row').style.cursor = 'hand';

        var el = document.getElementById('next');
        el.onclick = new Function("Setpagination(2)");

        document.getElementById('bottom_pg1').className = 'inactive_link';
        document.getElementById('bottom_pg1').style.textDecoration = 'none';
        document.getElementById('bottom_pg2').className = 'default';
        document.getElementById('bottom_pg3').className = 'default';
        document.getElementById('bottom_pg4').className = 'default';
        document.getElementById('bottom_pg5').className = 'default';
        document.getElementById('bottom_prev').className = 'inactive_link';
        document.getElementById('bottom_prev').style.textDecoration = 'none';
        document.getElementById('bottom_next').className = 'default';
        document.getElementById('bottom_prev').style.cursor = 'text';

        var el = document.getElementById('bottom_next');
        el.onclick = new Function("Setpagination(2)");

        document.getElementById('startrow').innerHTML = '1';
        document.getElementById('endrow').innerHTML = '20';

        document.getElementById('page1').style.display = '';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
        document.getElementById('page5').style.display = 'none';

    }
    if (page == 2) {
        document.getElementById('pg2').className = 'inactive_link';
        document.getElementById('pg2').style.textDecoration = 'none';
        document.getElementById('pg1').className = 'default';
        document.getElementById('pg3').className = 'default';
        document.getElementById('pg4').className = 'default';
        document.getElementById('pg5').className = 'default';
        document.getElementById('prev').className = 'default';
        document.getElementById('prev').onclick = "pagination('1')";
        document.getElementById('next').className = 'default';
        document.getElementById('next').onclick = "pagination('3')";


        var el = document.getElementById('next');
        el.onclick = new Function("Setpagination(3)");
        var el = document.getElementById('prev');
        el.onclick = new Function("Setpagination(1)");



        document.getElementById('bottom_pg2').className = 'inactive_link';
        document.getElementById('bottom_pg2').style.textDecoration = 'none';
        document.getElementById('bottom_pg1').className = 'default';
        document.getElementById('bottom_pg3').className = 'default';
        document.getElementById('bottom_pg4').className = 'default';
        document.getElementById('bottom_pg5').className = 'default';
        document.getElementById('bottom_prev').className = 'default';
        document.getElementById('bottom_prev').onclick = "pagination('1')";
        document.getElementById('bottom_next').className = 'default';
        document.getElementById('bottom_next').onclick = "pagination('3')";
        var el = document.getElementById('bottom_next');
        el.onclick = new Function("Setpagination(3)");
        var el = document.getElementById('bottom_prev');
        el.onclick = new Function("Setpagination(1)");

        document.getElementById('startrow').innerHTML = '21';
        document.getElementById('endrow').innerHTML = '40';


        document.getElementById('page2').style.display = '';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
        document.getElementById('page5').style.display = 'none';

    }
    if (page == 3) {
        document.getElementById('pg3').className = 'inactive_link';
        document.getElementById('pg3').style.textDecoration = 'none';
        document.getElementById('pg1').className = 'default';
        document.getElementById('pg2').className = 'default';
        document.getElementById('pg4').className = 'default';
        document.getElementById('pg5').className = 'default';
        document.getElementById('prev').className = 'default';
        document.getElementById('prev').onclick = "pagination('2')";
        document.getElementById('next').className = 'default';
        document.getElementById('next').onclick = "pagination('4')";

        var el = document.getElementById('next');
        el.onclick = new Function("Setpagination(4)");
        var el = document.getElementById('prev');
        el.onclick = new Function("Setpagination(2)");

        document.getElementById('bottom_pg3').className = 'inactive_link';
        document.getElementById('bottom_pg3').style.textDecoration = 'none';
        document.getElementById('bottom_pg1').className = 'default';
        document.getElementById('bottom_pg2').className = 'default';
        document.getElementById('bottom_pg4').className = 'default';
        document.getElementById('bottom_pg5').className = 'default';
        document.getElementById('bottom_prev').className = 'default';
        document.getElementById('bottom_prev').onclick = "pagination('2')";
        document.getElementById('bottom_next').className = 'default';
        document.getElementById('bottom_next').onclick = "pagination('4')";

        var el = document.getElementById('bottom_next');
        el.onclick = new Function("Setpagination(4)");
        var el = document.getElementById('bottom_prev');
        el.onclick = new Function("Setpagination(2)");

        document.getElementById('startrow').innerHTML = '41';
        document.getElementById('endrow').innerHTML = '60';

        document.getElementById('page3').style.display = '';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page4').style.display = 'none';
        document.getElementById('page5').style.display = 'none';

    }
    if (page == 4) {
        document.getElementById('pg4').className = 'inactive_link';
        document.getElementById('pg4').style.textDecoration = 'none';
        document.getElementById('pg1').className = 'default';
        document.getElementById('pg2').className = 'default';
        document.getElementById('pg3').className = 'default';
        document.getElementById('pg5').className = 'default';
        document.getElementById('prev').className = 'default';
        document.getElementById('prev').onclick = "pagination('3')";
        document.getElementById('next').className = 'default';
        document.getElementById('next').onclick = "pagination('5')";

        var el = document.getElementById('next');
        el.onclick = new Function("Setpagination(5)");
        var el = document.getElementById('prev');
        el.onclick = new Function("Setpagination(3)");

        document.getElementById('bottom_pg4').className = 'inactive_link';
        document.getElementById('bottom_pg4').style.textDecoration = 'none';
        document.getElementById('bottom_pg1').className = 'default';
        document.getElementById('bottom_pg2').className = 'default';
        document.getElementById('bottom_pg3').className = 'default';
        document.getElementById('bottom_pg5').className = 'default';
        document.getElementById('bottom_prev').className = 'default';
        document.getElementById('bottom_prev').onclick = "pagination('3')";
        document.getElementById('bottom_next').className = 'default';
        document.getElementById('bottom_next').onclick = "pagination('5')";

        var el = document.getElementById('bottom_next');
        el.onclick = new Function("Setpagination(5)");
        var el = document.getElementById('bottom_prev');
        el.onclick = new Function("Setpagination(3)");


        document.getElementById('startrow').innerHTML = '61';
        document.getElementById('endrow').innerHTML = '80';

        document.getElementById('page4').style.display = '';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page5').style.display = 'none';

    }
    if (page == 5) {
        document.getElementById('pg5').className = 'inactive_link';
        document.getElementById('pg5').style.textDecoration = 'none';
        document.getElementById('pg1').className = 'default';
        document.getElementById('pg2').className = 'default';
        document.getElementById('pg3').className = 'default';
        document.getElementById('pg4').className = 'default';
        document.getElementById('prev').className = 'default';
        document.getElementById('prev').onclick = "pagination('4')";
        document.getElementById('next').className = 'inactive_link';
        document.getElementById('next').style.textDecoration = 'none';
        document.getElementById('next').style.cursor = 'text';

        var el = document.getElementById('prev');
        el.onclick = new Function("Setpagination(4)");

        document.getElementById('bottom_pg5').className = 'inactive_link';
        document.getElementById('bottom_pg5').style.textDecoration = 'none';
        document.getElementById('bottom_pg1').className = 'default';
        document.getElementById('bottom_pg2').className = 'default';
        document.getElementById('bottom_pg3').className = 'default';
        document.getElementById('bottom_pg4').className = 'default';
        document.getElementById('bottom_prev').className = 'default';
        document.getElementById('bottom_prev').onclick = "pagination('4')";
        document.getElementById('bottom_next').className = 'inactive_link';
        document.getElementById('bottom_next').style.textDecoration = 'none';
        document.getElementById('bottom_next').style.cursor = 'text';

        var el = document.getElementById('bottom_prev');
        el.onclick = new Function("Setpagination(4)");


        document.getElementById('startrow').innerHTML = '81';
        document.getElementById('endrow').innerHTML = '95';

        document.getElementById('page5').style.display = '';
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'none';

    }
}

function Setpagination(page) {
    var newpage = 'pg' + page;
    document.getElementById(newpage).click();

}

function report_download() {
    var check;

    check = get_reportdownload('edi_report');

    if (check == true) {
        document.getElementById("edi").style.display = '';
    }
    else
        document.getElementById("edi").style.display = 'none';

    check = get_reportdownload('paid_file');
    if (check == true) {
        document.getElementById("paid_file").style.display = '';
    }
    else
        document.getElementById("paid_file").style.display = 'none';

    check = get_reportdownload('intpay997');
    if (check == true) {
        if (document.getElementById('intpay997') != null)
            document.getElementById("intpay997").style.display = '';
    }
    else
        document.getElementById("intpay997").style.display = 'none';

    check = get_reportdownload('intpay824');
    if (check == true) {
        if (document.getElementById('intpay824') != null)
            document.getElementById("intpay824").style.display = '';
    }
    else
        document.getElementById("intpay824").style.display = 'none';

    check = get_reportdownload('deposit_stmt');
    if (check == true) {
        document.getElementById("dep_stmt").style.display = '';
    }
    else
        document.getElementById("dep_stmt").style.display = 'none';

    check = get_reportdownload('corporate_report');
    if (check == true) {
        document.getElementById("corporate_report").style.display = '';
    }
    else
        document.getElementById("corporate_report").style.display = 'none';

    check = get_reportdownload('return_items_report');
    if (check == true) {
        document.getElementById("return_items").style.display = '';
    }
    else
        document.getElementById("return_items").style.display = 'none';
}

function get_reportdownload(name) {
    var check = false;
    var check_report = eval("Report_download ");

    for (var i = 0; i < check_report.length; i++) {

        if (check_report[i] == name) {
            check = true;
        }


    }

    return check;
}

function validateotw() {
    var aba = jQuery.trim($('#aba').val());
    var rac = jQuery.trim($('#rac').val());
    var bname = jQuery.trim($('#bname').val());
    var rname = jQuery.trim($('#rname').val());
    var ra1 = jQuery.trim($('#ra1').val());
    var ra2 = jQuery.trim($('#ra2').val());
    if (aba != "" || rac != "" || bname != "" || rname != "" || ra1 != "" || ra2 != "") {
        $('<tr><td class="frmerror" valign="bottom">To continue, please make the changes marked.</td></tr><tr><td>&nbsp;</td></tr>').insertBefore('#msgdetail');

    }

    if (aba == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Financial organization routing number is a required field.</td></tr>').insertBefore('#aba1');

    }
    if (rac == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient account is a required field.</td></tr>').insertBefore('#rac1');

    }
    if (bname == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Bank name is a required field.</td></tr>').insertBefore('#bname1');

    }
    if (rname == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Name is a required field.</td></tr>').insertBefore('#rname1');

    }
    if (ra1 == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 1 is a required field.</td></tr>').insertBefore('#ra11');

    }
    if (ra2 == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 2 is a required field.</td></tr>').insertBefore('#ra21');

    }

    if (aba != "" && rac != "" && bname != "" && rname != "" && ra1 != "" && ra2 != "") {
        location.href = toLocation;
    }
}

function validateotw1() {

    var aba = jQuery.trim($('#bankID').val());
    var rac = jQuery.trim($('#rac').val());
    var bname = jQuery.trim($('#bankName').val());
    var rname = jQuery.trim($('#rname').val());
    var ra1 = jQuery.trim($('#ra1').val());
    var ra2 = jQuery.trim($('#ra2').val());
    if (aba == "" || rac == "" || bname == "" || rname == "" || ra1 == "" || ra2 == "") {
        $('<tr><td class="frmerror" valign="bottom">To continue, please make the changes marked.</td></tr><tr><td>&nbsp;</td></tr>').insertBefore('#msgdetail');

    }

    if (aba == "") {
        if ($("#bankIDErrMsg").attr("id") == null)
            $('<tr id="bankIDErrMsg"><td></td><td class="frmerror" valign="bottom">Financial organization routing number is a required field.</td></tr>').insertBefore('#bankID');

    }
    if (rac == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient account is a required field.</td></tr>').insertBefore('#rac');

    }
    if (bname == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Bank name is a required field.</td></tr>').insertBefore('#bankName');

    }
    if (rname == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Name is a required field.</td></tr>').insertBefore('#rname');

    }
    if (ra1 == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 1 is a required field.</td></tr>').insertBefore('#ra1');

    }
    if (ra2 == "") {
        $('<tr><td></td><td class="frmerror" valign="bottom">Recipient Address 2 is a required field.</td></tr>').insertBefore('#ra2');

    }

    if (aba != "" && rac != "" && bname != "" && rname != "" && ra1 != "" && ra2 != "") {
        location.href = toLocation1;
    }
}


function checkaccountbalanceservices() {
    var midreporting = showMenuItem('midreporting');
    var largereporting = showMenuItem('largereporting');
    var investmentaccount = showMenuItem('investmentaccount');
    var cdaccount = showMenuItem('cdaccount');
    var loan = showMenuItem('loan');
    var cardrpt = showMenuItem('cardrpt');
    var cardpay = showMenuItem('cardpay');

    if ((midreporting != '1') && (largereporting != '1') && (investmentaccount != '1') && (cdaccount != '1') && (loan != '1') && (cardrpt != '1') && (cardpay != '1')) {
        document.getElementById('drag_balances').style.display = 'none';
    }
}

//function used to display the day, month and year,
//formatted together where needed. diff is equal to the number of days you are subtracting from
//the current date. diff cannot exceed 31 days. display format: (mm/dd/yyyy)
function theDateCustomised(diff) {
    var ret;
    //local variables

    var subDate = theDateHelper(diff);
    var month, day, year;

    //dividing the substring created from theDate function
    month = subDate.substr(0, 2);
    day = subDate.substr(2, 2);
    year = subDate.substr(4, 4);

    ret = month + "/" + day + "/" + year;
    return ret;
    //document.write(month +"/" +day+"/" +year);

} //end theDate

function chkSecureTokenLogin() {
    var tokensetup = eval("isreg");
    var tokensetupeam = eval("eam_options");
    if (tokensetupeam == 'hideeam') {
        if (tokensetup != 'signin_active_passcode.html') {
            writesecuresignonHTML();
        }
        else {
            writesecuretokenHTML();
        }
    }
    else {
        if ((tokensetupeam == 'pwd') || (tokensetupeam == 'pwdooba'))
            writesecuresignonHTML();
        else
            writesecuretokenHTML();
    }
}

function writesecuresignonHTML() {
    var eamOption = eval("eam_options")
    if (eamOption == 'hideeam') {
        var str = "<table cellspacing='4' cellpadding='0' width='100%'> <tr> <td class='subheader' colspan='2' valign='bottom'> User Secure Sign On Maintenance</td> </tr><tr>                   	<td style='background-color:#ccc;height:1px'></td>               </tr> <tr><td class='message_detail' valign='bottom'>You can have this user directed into the Secure Sign On setup process the next time they sign on by removing their security settings (picture, personal phrase, and confirmation questions). To remove the settings for this user, click \"Remove Secure Sign On.\"</td>  </tr><tr><td>&nbsp;</td></tr> <tr><td align='center'><input type='button' value='Remove Secure Sign On'></td></tr> </table>";
        document.getElementById('tokenlogin').innerHTML = str;
    }
}

function writesecuretokenHTML() {

    var str;

    str = "<table cellspacing='4' cellpadding='0' width='100%'> <tr> <td class='subheader' colspan='2' valign='bottom'> User Secure Token </td> </tr><tr>                   	<td style='background-color:#ccc;height:1px'></td>               </tr><tr><td colspan='2' class='message_detail'>The Fulfillment Date allows you to monitor when the user's token device has been sent by the bank. If not already present, enter the Token Device Serial Number. Entry will register the device to the user and activate the secure token at the user's next sign on. </td></tr> <tr><td colspan='2'><table cellspacing='4' cellpadding='0' width='100%'><tr><td class='message_detail' width='25%'>Token device fulfillment date: </td><td class='message_detail'>";
    str = str + theDateCustomised(2);
    str = str + "</td></tr><tr><td class='message_detail' width='25%'>Token device serial number: </td><td class='message_detail'><input type='text' value='112262649'></td></tr></table></td></tr> </table>";
    document.getElementById('tokenlogin').innerHTML = str;
}

function chkSecureToken() {
    var tokensetup = eval("isreg");
    if (tokensetup == 'signin_active_passcode.html') {
        $("#secureTokenDate").show();
        $("#secureTokenSerial").show();
    }
}

function writeServicesWithoutAccounts() {

    var rc, rc1;
    var str = '';


    str = "<table cellspacing='4' cellpadding='0' width='100%'>";
    rc = showACHItem('upload');
    if (rc == '1') {
        str = str + '<tr><td id="ACH_File_Upload2">ACH File Upload </td></tr>';
    }
    else {
        document.getElementById('achfileuploadlimit').style.display = 'none';
    }

    rc = showMenuItem('largereporting');
    if (rc == '1')
        str = str + '<tr><td id="Deposit_Account_Reporting">Deposit Account Reporting </td></tr>';

    rc = showMenuItem('midreporting');
    if (rc == '1')
        str = str + "<tr><td id='Deposit_Reporting'>Deposit Reporting </td></tr>";


    rc = showMenuItem('inwirerpt');
    if (rc == '1')
        str = str + "<tr><td id='Incoming_Wire_Report'>Incoming Wire Report </td></tr>";

    rc = showLoanItem('advance');
    if (rc == '1')
        str = str + "<tr><td id='Loan_Advance'>Loan Advance </td></tr>";

    rc = showLoanItem('payment');
    if (rc == '1')
        str = str + "<tr><td id='Loan_Payment'>Loan Payment </td></tr>";

    str = str + "</table>";

    document.getElementById('ServicesWithoutAccounts').innerHTML = str;
    document.getElementById('ServicesWithoutAccounts1').innerHTML = str;



}

function UserSetupReportVisibility() {
    var rc, rc1;

    rc = showMenuItem('achpospay');

    if (rc != '1') {
        document.getElementById('achpositivepaytitle').style.display = 'none';
        document.getElementById('achpositivepaydetails').style.display = 'none';
    }

    rc = showMenuItem('billpay');

    if (rc != '1') {
        document.getElementById('billpaytitle').style.display = 'none';
        document.getElementById('billpaydetails').style.display = 'none';
    }

    rc = showMenuItem('book');

    if (rc != '1') {
        document.getElementById('booktransfertitle').style.display = 'none';
        document.getElementById('booktransferdetails').style.display = 'none';
    }

    rc = showMenuItem('billpay');

    if (rc != '1') {
        document.getElementById('billpaytitle').style.display = 'none';
        document.getElementById('billpaydetails').style.display = 'none';
        document.getElementById('billpaylimitheader').style.display = 'none';
        document.getElementById('billpaylimitdetails').style.display = 'none';
    }

    rc = showACHItem('collection');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ccdcollectiontitle').style.display = 'none';
        document.getElementById('ccdcollectiondetails').style.display = 'none';
        document.getElementById('ccdcollectionlimit').style.display = 'none';

    }

    rc = showACHItem('ccdpay');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ccdpaymenttitle').style.display = 'none';
        document.getElementById('ccdpaymentdetails').style.display = 'none';
        document.getElementById('ccdpaymentlimit').style.display = 'none';
    }

    rc = showACHItem('child');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('childsupporttitle').style.display = 'none';
        document.getElementById('childsupportdetails').style.display = 'none';
        document.getElementById('childlimit').style.display = 'none';
    }

    rc = showMenuItem('cardpay');
    if (rc != '1') {
        document.getElementById('creditpaymenttitle').style.display = 'none';
        document.getElementById('creditpaymentdetails').style.display = 'none';
    }

    rc = showMenuItem('cardrpt');
    if (rc != '1') {
        document.getElementById('creditreportstitle').style.display = 'none';
        document.getElementById('creditreportsdetails').style.display = 'none';
    }

    rc = showACHItem('ctxcoll');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ctxcollectiontitle').style.display = 'none';
        document.getElementById('ctxcollectiondetails').style.display = 'none';
        document.getElementById('ctxcollectionlimit').style.display = 'none';
    }

    rc = showACHItem('ctx');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ctxpaymenttitle').style.display = 'none';
        document.getElementById('ctxpaymentdetails').style.display = 'none';
        document.getElementById('ctxpaymentlimit').style.display = 'none';
    }

    rc = showMenuItem('deprecon');
    if (rc != '1') {
        document.getElementById('depositrecontitle').style.display = 'none';
        document.getElementById('depositrecondetails').style.display = 'none';
    }

    rc = showWireItem('domesticonetime');
    rc1 = showMenuItem('wiremain');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('domesticwiretitle').style.display = 'none';
        document.getElementById('domesticwiredetails').style.display = 'none';
        document.getElementById('wirelimitheader').style.display = 'none';
        document.getElementById('wirelimitdetails').style.display = 'none';
    }

    rc = showMenuItem('express');
    if (rc != '1') {
        document.getElementById('expresstitle').style.display = 'none';
        document.getElementById('expressdetails').style.display = 'none';
    }

    rc = showACHItem('federal');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('federaltitle').style.display = 'none';
        document.getElementById('federaldetails').style.display = 'none';
        document.getElementById('federallimit').style.display = 'none';
    }

    rc = showMenuItem('fullrecon');
    if (rc != '1') {
        document.getElementById('fullaccountrecontitle').style.display = 'none';
        document.getElementById('fullaccountrecondetails').style.display = 'none';
    }

    rc = showMenuItem('funds');
    if (rc != '1') {
        document.getElementById('fundstitle').style.display = 'none';
        document.getElementById('fundsdetails').style.display = 'none';
        document.getElementById('fundslimit').style.display = 'none';
    }

    rc = showACHItem('iatcoll');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('iatcollectiontitle').style.display = 'none';
        document.getElementById('iatcollectiondetails').style.display = 'none';
    }

    rc = showACHItem('iat');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('iatpaymenttitle').style.display = 'none';
        document.getElementById('iatpaymentdetails').style.display = 'none';
    }

    rc = showMenuItem('image');
    if (rc != '1') {
        document.getElementById('imagesearchtitle').style.display = 'none';
        document.getElementById('imagesearchdetails').style.display = 'none';
    }

    rc = showMenuItem('integratedpayables');
    if (rc != '1') {
        document.getElementById('integratedtitle').style.display = 'none';
        document.getElementById('integrateddetails').style.display = 'none';
    }

    rc = showMenuItem('investmentreporting');
    if (rc != '1') {
        document.getElementById('investmenttitle').style.display = 'none';
        document.getElementById('investmentdetails').style.display = 'none';
    }

    rc = showMenuItem('loan');
    if (rc != '1') {
        document.getElementById('loantitle').style.display = 'none';
        document.getElementById('loandetails').style.display = 'none';
    }

    rc = showMenuItem('partrecon');
    if (rc != '1') {
        document.getElementById('partialaccountrecontitle').style.display = 'none';
        document.getElementById('partialaccountrecondetails').style.display = 'none';
    }

    rc = showMenuItem('positive');
    if (rc != '1') {
        document.getElementById('positivepaytitle').style.display = 'none';
        document.getElementById('positivepaydetails').style.display = 'none';
    }

    rc = showMenuItem('positive');
    rc1 = showMenuItem('pospayexception');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('pp_exceptiontitle').style.display = 'none';
        document.getElementById('pp_exceptiondetails').style.display = 'none';
    }

    rc = showMenuItem('positive');
    rc1 = showMenuItem('pospayissue');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('pp_issuetitle').style.display = 'none';
        document.getElementById('pp_issuedetails').style.display = 'none';
    }

    rc = showACHItem('ppdcoll');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ppdcollectiontitle').style.display = 'none';
        document.getElementById('ppdcollectiondetails').style.display = 'none';
        document.getElementById('ppdcollectionlimit').style.display = 'none';
    }

    rc = showACHItem('payment');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('ppdpaymenttitle').style.display = 'none';
        document.getElementById('ppdpaymentdetails').style.display = 'none';
        document.getElementById('ppdpaymentlimit').style.display = 'none';
    }


    rc = showMenuItem('revpospay');
    if (rc != '1') {
        document.getElementById('revpospaytitle').style.display = 'none';
        document.getElementById('revpospaydetails').style.display = 'none';
    }

    rc = showACHItem('state');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('statetaxtitle').style.display = 'none';
        document.getElementById('statetaxdetails').style.display = 'none';
        document.getElementById('statetaxlimit').style.display = 'none';
    }

    rc = showMenuItem('stop');
    if (rc != '1') {
        document.getElementById('stoppaytitle').style.display = 'none';
        document.getElementById('stoppaydetails').style.display = 'none';
    }

    rc = showACHItem('stp820');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('stptitle').style.display = 'none';
        document.getElementById('stpdetails').style.display = 'none';
        document.getElementById('stplimit').style.display = 'none';
    }

    rc = showACHItem('telcoll');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('telcollectiontitle').style.display = 'none';
        document.getElementById('telcollectiondetails').style.display = 'none';
        document.getElementById('telcollectionlimit').style.display = 'none';
    }

    rc = showACHItem('webcoll');
    rc1 = showMenuItem('ach');
    if (rc != '1' || rc1 != '1') {
        document.getElementById('webcollectiontitle').style.display = 'none';
        document.getElementById('webcollectiondetails').style.display = 'none';
        document.getElementById('webcollectionlimit').style.display = 'none';
    }

    rc = showMenuItem('filedown');
    if (rc != '1') {
        document.getElementById('filedownloadheader').style.display = 'none';
        document.getElementById('filedownloadtitle').style.display = 'none';
        document.getElementById('filedownloaddetails').style.display = 'none';
    }

    rc = showMenuItem('rewards');
    if (rc != '1') {
        document.getElementById('rewardsheader').style.display = 'none';
        document.getElementById('rewardstitle').style.display = 'none';
        document.getElementById('rewardsdetails').style.display = 'none';
    }

    rc = showMenuItem('ach');
    if (rc != '1') {
        document.getElementById('achlimitheader').style.display = 'none';
        document.getElementById('achlimitdetails').style.display = 'none';
    }
}

function chkFXInt() {
    var fx = showWireItem('fxint');
    if (fx == '1') {
        $("span.dollarsign").hide();
        $("td.currency").show();
    }
    else {
        $("span.dollarsign").show();
        $("td.currency").hide();
    }
}

function addrow() {
    var len = $("#teldetail tr").length;
    var cList = writeCountryList1("home");
    var text = "";
    text += "<tr id=id='del" + len + "'>";
    text += "<td width='6%'><a class='default' style='cursor:pointer' id='delrow" + len + "'>Delete</a></td>";
    text += "<td width='14%'><select name='label'>";
    text += "<option selected='selected'>Work</option>";
    text += "<option>Work 2</option>";
    text += "<option>Mobile</option>";
    text += "<option>Mobile 2</option>";
    text += "<option>Home</option>";
    text += "<option>Other</option>";
    text += "</select></td>";
    text += "<td width='20%'>";
    text += cList;
    text += "</td>";
    text += "<td width='31%'><input id='mobilenum' type='text' size='30' value=''   /></td>";
    text += " <td width='14%'><input type='text' id='mobilenum2' value='' size='10'   /></td>";
    text += "</tr>";

    if (len == "5")
        $("#addrow").hide();

    if (len != "6")
        $("#teldetail tr:last").after(text);

    var LastRow = $("#teldetail tr:last");
    $(LastRow).attr("id", "del" + len);
    $("#del" + len + " td:first").html("<a href='javascript:void(0)' class='default' style='cursor:pointer' id='delrow" + len + "'>Delete</a>");

    $("a[id^=delrow]").click(deleterow);
}

function deleterow() {
    var len = $("#teldetail tr").length;
    if (len > 1)
        $(this).parent().parent().remove();
    if (len == 1)
        $("input[id^=mobilenum]").val('');
    $("#addrow").show();
}

function showInstructionalTextWireFormat() {
    var str;
    var getReferrer = getqstring('pg');
    var getMode = getqstring('mode');
    if (getReferrer == "import" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=import' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }
    else if (getReferrer == "import") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Maintain other wire file formats</a>";
        writeWireNav('divFunctionsNav', 'wireimport');
    }

    if (getReferrer == "import1" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=import' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }
    else if (getReferrer == "import1") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Maintain other wire file formats</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }

    if (getReferrer == "import11" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=import' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }
    else if (getReferrer == "import11") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Maintain other wire file formats</a>";
        writeWireNav('divFunctionsNav', 'wireimport');
    }

    if (getReferrer == "import111" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=import' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }
    else if (getReferrer == "import111") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Maintain other wire file formats</a>";
        writeWireNav('divFunctionsNav', 'wireimport');
    }

    if (getReferrer == "import1111" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Import wires or manage file formats</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }
    else if (getReferrer == "import1111") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_import.html' class='default'>Maintain other wire file formats</a> | <a href='add_wire_file_format.html?pg=import' class='default'>Add a wire file format</a>"
        writeWireNav('divFunctionsNav', 'wireimport');
    }



    if (getReferrer == "upload" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=upload' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }
    else if (getReferrer == "upload") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Maintain other wire file formats</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }

    if (getReferrer == "upload1" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=upload' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }
    else if (getReferrer == "upload1") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Maintain other wire file formats</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }

    if (getReferrer == "upload11" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=upload' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }
    else if (getReferrer == "upload11") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Maintain other wire file formats</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }

    if (getReferrer == "upload111" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_file_format_detail.html?pg=upload' class='default'>View file format details</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');

    }
    else if (getReferrer == "upload111") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Maintain other wire file formats</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }

    if (getReferrer == "upload1111" && getMode == "edit") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Upload wires or manage file formats</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }
    else if (getReferrer == "upload1111") {
        document.getElementById('ins_text').innerHTML = "<a href='wire_upload.html' class='default'>Maintain other wire file formats</a> | <a href='add_wire_file_format.html?pg=upload' class='default'>Add a wire file format</a>"
        writeWireNav('divFunctionsNav', 'wirefileuploadentry');
    }

}

//This function calls the showWireItem function  
//to determine if the freeform selection should be displayed


function DeleteItem() {
    location.href = "collect.html?deletedTemplate=" + $("#templateName").html().trim();
}
function DeleteSendMoneyItem() {
    location.href = "send.html?deletedTemplate=" + $("#templateName").html().trim();
}
function DeleteSendMoneySavedReportItem() {
    location.href = "send_saved.html?deletedTemplate=" + $("#templateName").html().trim();
}
function DeletecCollMoneySavedReportItem() {
    location.href = "collect_saved.html?deletedTemplate=" + $("#templateName").html().trim();
}
function DeletecNSRRequestItem() {
    location.href = "../scheduled_requests/next_scheduled_requests.html?deletedTemplate=" + $("#reqType").html().trim() + "/" + $("#templateName").html().trim();
}
function writeLeftNavigation(arr, id, flag) {
    str = '<ul class="leftContentListNav">';

    for (var i = 1; i < arr.length; i++) {

        if (arr[i].flag == flag)
            str += '<li class="leftContentListNavSelected">';
        else
            str += '<li>';
        str += "<a href='" + arr[i].href + "'";
        if (arr[i].target != "") {
            str += 'target="' + arr[i].target + '"';
        }
        else
            str += ' target="_self"';
        if (arr[i].menuItem != "")
            str += " class='menuItem' menuItem='" + arr[i].menuItem;
        str += "' >" + arr[i].linkText + "</a></li>";
    }
    str += '</ul>';
    helpwriteContent(id, str);
    mainpage();
}

//function getLinkDetails1(linkhref, linktext1, linkflag) {
//    var linkDetails = {
//        href: linkhref, linkText: linktext1, flag: linkflag
//    }
//    return linkDetails;
//}

function writeLeftNaVAchReports(id, flag) {
    var achArr = GetAchReportsMenuItems();
    writeLeftNavigation(achArr, id, flag);
}

function writeDepositAcntRepNav(id, flag) {
    var depArr = GetDepositAcntRepMenuItems();
    writeLeftNavigation(depArr, id, flag);
    ChangeInsTextDepositAccountReporting("ins_txt");
} //end writeDepositAcntRepNav

function writeDepositRepNav(id, flag) {
    var depArr = GetDepositRepMenuItems();
    writeLeftNavigation(depArr, id, flag);
    ChangeInsTextDepositReporting("ins_txt");
} //end writeDepositAcntRepNav

function writeAcntRepNav(id, flag) {
    var acntArr = GetAccountReportsMenuItems();
    writeLeftNavigation(acntArr, id, flag);
    ChangeInsTextAccountReports("ins_txt");
} //end writeAcntRepNav

function writeWireNav(id, flag) {
    var queryArr = GetWireMenuItems();
    writeLeftNavigation(queryArr, id, flag);
    ChangeInstTextWire('ins_txt');
} //end writeWireNav

function writeExpressTransNav(id, flag) {
    var expressArr = GetExpressTransMenuItems()
    writeLeftNavigation(expressArr, id, flag);
    ChangeInstTextExpressTrans('ins_txt')
}//end writeExpressTransNav

function writeBookTransNav(id, flag) {
    var bookTransArr = GetBookTransMenuItems();
    writeLeftNavigation(bookTransArr, id, flag);
    ChangeInstTextBookTrans('ins_txt');
}//end writeBookTransNav

function writeFundsTransNav(id, flag) {
    var fundsTransArr = GetFundsTransMenuItems();
    writeLeftNavigation(fundsTransArr, id, flag);
    ChangeInstTextFundsTrans('ins_txt');
}//end writeFundsTransNav

function writeIntegratedPayblesNav(id, flag) {
    var intPayArr = GetIntPayMenuItems();
    writeLeftNavigation(intPayArr, id, flag);
    ChangeInstTextIntegratedPayables('ins_txt')
}//end writeIntegratedPayblesNav

function writeDesareportingLeftNav(id, flag) {
    var desRepArr = GetEscrowRepMenuItems();
    writeLeftNavigation(desRepArr, id, flag);
    ChangeInstTextDesa('ins_txt');
}//end writeIntegratedPayblesNav

function writeDesaNav(id, flag) {
    var desaArr = GetEscrowAccountTransferMenuItem();
    writeLeftNavigation(desaArr, id, flag);
    ChangeInstTextDesa('ins_txt');
} //end writeDesaNav

function writeLoanPayNav(id) {
    var loanPayArr = [];
    var pay = showLoanItem('payment');
    if (pay == '1') {
        loanPayArr.push(getLinkDetails1('<a href="..\/loan\/payment.html">', "Loan payment request", "blank"));
        writeLeftNavigation(loanPayArr, id, "");
    } //end if payment
} //end writeLoanPayNav

//This function calls the showLoanItem function  
//to determine if the advance selection should be displayed
function writeLoanAdvNav(id) {
    var loanAdvArr = [];
    var adv = showLoanItem('advance');
    if (adv == '1') {
        loanAdvArr.push(getLinkDetails1('<a href="..\/loan\/advance.html">', "Loan advance request", "blank"));
        writeLeftNavigation(loanAdvArr, id, "");
    } //end if advance
    mainpage();
} //end writeLoanAdvNav

function writeACH2Nav(id, flag) {
    var achArr = GetAchMenuItems();
    writeLeftNavigation(achArr, id, flag);
    ChangeInstTextForACH('ins_txt');
} //end writeACHNav
function SetSideMenuContentForPositivePay(selectedPage, id) {
    var posPayArr = GetPosPayMenuItems();
    writeLeftNavigation(posPayArr, id, selectedPage);
    ChangeInstTextPosPay('ins_txt');
}
//Function loads the Side Menu for Full Account Reconciliation pages  
//based on the availability of the services
function SetSideMenuContentForFullAccountReconciliation(selectedPage, id) {
    var fullAcntReconArr = GetFullReconMenuItems();
    writeLeftNavigation(fullAcntReconArr, id, selectedPage);
    ChangeInstTextFullRecon('ins_txt');
}
function SetSideMenuContentForPartialAccountReconciliation(selectedPage, id) {
    var partialReconArr = GetPartialReconMenuItems();
    writeLeftNavigation(partialReconArr, id, selectedPage);
    ChangeInstTextPartialRecon('ins_txt');
}
function SetSideMenuContentForDepositReconciliation(selectedPage, id) {
    var depositReconArr = GetDepositReconMenuItems();
    writeLeftNavigation(depositReconArr, id, selectedPage);
    ChangeInstTextDepositRecon('ins_txt');
}
//Function loads the Side Menu for Full Account Reconciliation pages  
//based on the availability of the services
function SetSideMenuContentForACHPositivePay(selectedPage, id) {
    var achPosPayArr = GetAchPosPayMenuItems();
    writeLeftNavigation(achPosPayArr, id, selectedPage);
    ChangeInstTextAchPosPay('ins_txt')
}
function SetSideMenuContentForStopPayment(selectedPage, id) {
    var stopPayArr = GetStopPayMenuItems();
    writeLeftNavigation(stopPayArr, id, selectedPage);
    ChangeInstTextStopPay('ins_txt')
}
function SetSideMenuContentForImageSearch(selectedPage, id) {
    var imgSrchArr = GetImageSrchMenuItems();
    writeLeftNavigation(imgSrchArr, id, selectedPage);
    ChangeInstTextImageSearch('ins_txt')
}
function SetSideMenuContentForCreditCard(selectedPage, id) {
    var creditCardRepArr = GetCreditCardMenuItems();
    writeLeftNavigation(creditCardRepArr, id, selectedPage);
    ChangeInstTextCreditCard('ins_txt');
}
function SetSideMenuContentForCreditCardRep(selectedPage, id) {
    var creditCardArr = GetCreditCardRepMenuItems();
    writeLeftNavigation(creditCardArr, id, selectedPage);
    ChangeInstTextCreditCard('ins_txt');
}
function SetSideMenuContentForDownloadableRep(selectedPage, id) {
    var downloadableRepArr = GetDownloadableRepMenuItems();
    writeLeftNavigation(downloadableRepArr, id, selectedPage);
    ChangeInstTextFileDownload('ins_txt')
}
function SetSideMenuContentForCheckReorder(selectedPage, id) {
    var checReOrderArr = GetCheckOrderMenuItems();
    writeLeftNavigation(checReOrderArr, id, selectedPage);
    ChangeInstTextChckReorder('ins_txt')
}
function SetSideMenuContentForStatementNDoc(selectedPage, id) {
    var statementNDocArr = GetStatemntNDocMenuItems();
    writeLeftNavigation(statementNDocArr, id, selectedPage);
    ChangeInstTextStmtNDoc('ins_txt');
}
function SetSideMenuContentForWireRep(selectedPage, id) {
    var wireRepArr = GetWireRepMenuItems();
    writeLeftNavigation(wireRepArr, id, selectedPage);
    ChangeInstTextWire('ins_txt');
}
function SetSideMenuContentForInvActRep(selectedPage, id) {
    var invRepArr = GetInvReportMenuItems();
    writeLeftNavigation(invRepArr, id, selectedPage);
    ChangeInstTextInvestmentReporting('ins_txt');
}
function SetSideMenuContentForRDIRep(selectedPage, id) {
    var rdiRepArr = GetRetItemsMenuItems();
    writeLeftNavigation(rdiRepArr, id, selectedPage);
    ChangeInstTextRDI("ins_txt");
}
function SetSideMenuContentForCommunications(selectedPage, id) {
    var commArr = GetCommunicationMenuItem();
    writeLeftNavigation(commArr, id, selectedPage);
}
function writeServiceAdminNav(id, flag) {
    var serAdminArr = GetServiceAdminMenuItems();
    writeLeftNavigation(serAdminArr, id, flag);
    ChangeInstTextServiceAdministration('ins_txt');
}
function writeSelfAdministrationMenu(id, selPage) {
    var selfAdminArr = GetSelfAdminMenuItems();
    writeLeftNavigation(selfAdminArr, id, selPage);
}
function SetSideMenuContentForLoan(id, selPage) {
    var loanArr = GetLoanMenuItem();
    writeLeftNavigation(loanArr, id, selPage);

}
function SetSideMenuContentForLoanRpt(id, selPage) {
    var loanRptArr = GetLoanRepMenuItems();
    writeLeftNavigation(loanRptArr, id, selPage);
}

function SetSideMenuContentForFileUpload(id, selPage) {
    var fileUploadArr = GetFileUploadMenutItems();
    writeLeftNavigation(fileUploadArr, id, selPage);
}


function SetNoteDetailLink(referrer) {
    location.href = 'summary_note_detail.html?referrer=' + referrer + '&returnText=New selection'
}
function SetCommitDetailLink(referrer) {
    location.href = 'summary_note_detail.html?referrer=' + referrer + '&returnText=New selection'
}

function saveSECCodes() {
    str = "secCode=\[";
    codeArr = eval("secCode");
    for (var i = 0; i < codeArr.length; i++) {
        str += '"';
        codeArrSplit = codeArr[i].split(':');
        if ($('#' + codeArrSplit[0]).find('input').prop('checked') != true) {
            str += codeArrSplit[0] + ":" + codeArrSplit[1] + ":off";
        }
        else
            str += codeArrSplit[0] + ":" + codeArrSplit[1] + ":on";
        str += '"';
        if (i != (codeArr.length - 1))
            str += ',';

    }
    str += "\]";
    writeToAFile('SECCodes.txt', str)
}
function writeToAFile(fileName, str) {

    fileName = "E:/BEB Demo/Source/includes/" + fileName
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var s = fso.OpenTextFile(fileName, 2, true, -2);
    s.WriteLine(str);
    s.Close();
    fso = s = null;
    //alert (s);
    if (s = "null")
        alert("Records updated");
}