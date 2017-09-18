<?php 
	require_once 'header.php';
	require_once 'sidebar.php';
?>


        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Transfer Fund to Other Bank Accounts</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
                        <!-- /.row -->
            <div class="row">
                <div class="col-md-5 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">This is Two-way Authentication System </h3>
                        </div>
                        <div class="panel-body">
                            <form role="form" action="enter_amount.php" method="post">
                                <fieldset>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Your Authentication Token" name="first_auth_code" type="password" >
                                    </div>
                                    <!-- Change this to a button or input when using this as a form -->
                                    <button type="submit" class="btn btn-lg btn-success btn-block">Continue To Enter Amount</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
            </div>
            </div>
        </div>
<?php require_once 'script.php'; ?>