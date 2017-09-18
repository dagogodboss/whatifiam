<?php 
	require_once 'header.php';
	require_once 'sidebar.php';
    $data = file_get_contents('contact.json');
    $user_info = json_decode($data);
?>


        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Online Bank Account</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div class="notice-box col-lg-2 col-xs-12 pull-right" style="position: fixed;z-index: 10;right: 0px;bottom:  0px;display: none;color: #fff;">
                <div class="panel panel-yellow" style="background: #5cb85c;">
                    <div class="panel-body">
                        <p class="notice"></p>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-check fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">26</div>
                                    <div>Online Cash Transaction</div>
                                </div>
                            </div>
                        </div>
                        <a href="#" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-tasks fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">32</div>
                                    <div>Created Transaction Request</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-yellow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">124</div>
                                    <div>Withdrawal Request Done!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-dollar fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="mid"><?php echo $user_info->amount; ?></div>
                                    <div>Account Balance</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> Live Bank Stock Exchange Rate
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                        	<div class="flot-chart">
                                <div class="flot-chart-content" id="flot-line-chart-moving"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-clock-o fa-fw"></i> Recent Activities Time line
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-badge"><i class="fa fa-check"></i>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Money Sent Over To Allen  Grey Mornic </h4>
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago</small>
                                            </p>
                                        </div>
                                        <div class="timeline-body">
                                            <p>You Successfully sent $10,000 Over To Allen  Grey Mornic For Info please contact the customer care.</p>
                                        </div>
                                    </div> 
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-badge warning"><i class="fa fa-credit-card"></i>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Cash Withdrawal by You</h4>
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> 3 days ago</small>
                                            </p>
                                        </div>
                                        <div class="timeline-body">
                                            <p>You Withdraw $4,500.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-badge danger"><i class="fa fa-check"></i>
                                    </div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Money Sent Over To Chaitanya Apotre</h4>
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> 34 days ago</small>
                                            </p>
                                        </div>
                                        <div class="timeline-body">
                                            <p>You Successfully sent $17,000 Over To Chaitanya Apotre For Info please contact the customer care.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">Sucessful Cash Deposit</h4>                                            
                                            <p><small class="text-muted"><i class="fa fa-clock-o"></i> 3 months ago</small>
                                        </div>
                                        <div class="timeline-body">
                                            <p>You Deposited 1 Million Dollars.</p>
                                        </div>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

<?php require_once 'script.php'; ?>
	<script type="text/javascript">
		$(document).ready(function(){
			$.getJSON(
				'contact.json',
				function(data){
					
					$('.page-header').prepend(' <span style="text-transform:capitalize">'+data.fullname+'</span> ')
					
					
				}
			)
				

					function delay() {
						setTimeout(function(){
                            $('span.send-cash-notice').html('100% Completed!')
                            $('div.send-cash').css({ 

                        'transition'    : 'all 1s ease',
                        'width'         : '100%',
                    },

                        $.getJSON(
                            'contact.json',
                            function(data){    
                                var notice = data.notice
                                    $('p.notice').html(notice)
/*
                                    swal({
                                          title: "Done With the Transaction :)",
                                          text: notice,
                                          type: "success",
                                    })
*/                                    alertify.success(notice);
                                })
                        )
                } ,10000);

					}
			delay()
			
		})	
	</script>
    <?php if (isset($_SESSION['cash_error'])) :?>
        <script type="text/javascript">
            alertify.error('<?php echo $_SESSION['cash_error'] ?>');
        </script>
    <?php unset($_SESSION['cash_error']); endif; ?>
</body>


</html>
