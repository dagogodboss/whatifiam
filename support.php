<?php 
	require_once 'header.php';
	require_once 'sidebar.php';


?>
	

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Please Use The Form to Contact our Technical Support</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <div class="row">
            	<div class="col-lg-6 col-lg-offset-3">
            	<div class="panel panel-default">
            		<div class="panel-body">
            		<form role="form" action="" method="post">
	                    <div class="form-group">
	                        <label>Subject of Message</label>
	                        <input class="form-control" placeholder="Subject of the Message" required>
	                        <p class="help-block">This will help know where to send your Request To</p>
	                    </div>
	                    <div class="form-group">
	                        <label>Message Area</label>
	                        <textarea class="form-control" rows="14" required="required" placeholder="Eg: Hello Please my Last transaction Id what is It"></textarea>
	                    </div>
	                    <button class="btn btn-success"> Send Message</button>
                </form>

            		</div>	
            	</div>
                
            	</div>
            	<div class="col-lg-3">
            	<!-- CHAT  -->
            	<div class="chat-panel panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-comments fa-fw"></i> Chat
                            <div class="btn-group pull-right">
                                Previous Chats
                            </div>

                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <ul class="chat">
                                <li class="left clearfix">
                                    <span class="chat-img pull-left">
                                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" class="img-circle" />
                                    </span>
                                    <div class="chat-body clearfix">
                                        <div class="header">
                                            <strong class="primary-font"> <?php echo $_SESSION['name'] ?></strong>
                                            <small class="pull-right text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i> 12th Jun 2017
                                            </small>
                                        </div>
                                        <p>
                                        I Have Confirmed the Transaction from Africa.
                                        </p>
                                    </div>
                                </li>
                                <li class="right clearfix">
                                    <span class="chat-img pull-right">
                                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" class="img-circle" />
                                    </span>
                                    <div class="chat-body clearfix">
                                        <div class="header">
                                            <small class=" text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i> 13th Jun 2017</small>
                                            <strong class="pull-right primary-font"> <?php echo $_SESSION['name'] ?></strong>
                                        </div>
                                        <p>
                                        	Please What is the transaction Id
                                        </p>
                                    </div>
                                </li>
                                <li class="left clearfix">
                                    <span class="chat-img pull-left">
                                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" class="img-circle" />
                                    </span>
                                    <div class="chat-body clearfix">
                                        <div class="header">
                                            <strong class="primary-font">James Customer Care</strong>
                                            <small class="pull-right text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i> 14th Jun 2017</small>
                                        </div>
                                        <p>
                                        	Just Put this Transaction Id: 728us34UG on your transaction Form. 
                                        </p>
                                    </div>
                                </li>
                                <li class="right clearfix">
                                    <span class="chat-img pull-right">
                                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" class="img-circle" />
                                    </span>
                                    <div class="chat-body clearfix">
                                        <div class="header">
                                            <small class=" text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i> 15th Jun 2017</small>
                                            <strong class="pull-right primary-font"> <?php echo $_SESSION['name'] ?></strong>
                                        </div>
                                        <p>
                                        	I have a suspended transaction please how do i go about it. It to Amy Gayfire in South Africa this is my Teller Id: 980080
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- /.panel-body -->
                        <div class="panel-footer">
                        <p>
                                No Chat Officer is Online Now</p>
                        </div>
                        <!-- /.panel-footer -->
                    </div>
                </div>
            </div>
        </div>

<?php require_once 'script.php'; ?>