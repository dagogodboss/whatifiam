<?php 
	require_once 'header.php';
	require_once 'sidebar.php';
 ?>

 	<div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Enter The Amount You wish to Transfer</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
                        <!-- /.row -->
            <div class="row">
            	 <div class="col-md-5 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Specify the amount below</h3>
                        </div>
                        <div class="panel-body">
                            <?php if (isset($_SESSION['send']) && $_SESSION['send'] == 'first_auth_code'):?>
                            <form role="form" action="sendcash.php" method="post">
                                <fieldset>
                                    <div class="form-group">
                                        <input class="form-control cash" required placeholder="Specify The Cash" name="cash" type="number" >
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" required placeholder="Specify Account Name " name="name" type="text" >
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" required min="6" placeholder="Specify Account Number" name="number" type="number" >
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" required min="3" placeholder="Specify The Bank Name" name="bank" type="text" >
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" required min="3" placeholder="Specify The Country in Full" name="Country" type="text" >
                                    </div>
                                    <?php 
                                            $data = file_get_contents('contact.json');
                                            $user_info = json_decode($data);
                                    ?>
                                    <input type="hidden" class="main-amount" value="<?php echo (int)$user_info->amount ?>">
                                    <!-- Change this to a button or input when using this as a form -->
                                    <button type="submit" class="btn btn-lg btn-success btn-block">Send Fund</button>
                                </fieldset>
                            </form>
                        <?php endif ?>
                        </div>
                    </div>
            	</div>
            </div>

    </div>


                            <div class="modal fade" id="transfer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog" style="margin-top: 125px">
                                    <div class="modal-content">
                                        <div class="modal-body"> 
                                            <div class="text-center text-success">
                                                <h3 class="timer"></h3>
                                            </div>
                                            <div class="text-center">
                                                <h3 style="color: #40FA7D" id="countUp"></h3>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                    <!-- /.modal-content -->
                                </div>
                                <!-- /.modal-dialog -->
                            </div>
<?php require_once 'script.php'; ?>
<script type="text/javascript">
    $('form').submit(function(e) {
            e.preventDefault();
            var form = $(this);
                $('div#transfer').modal('show');
                var options = {
                    useEasing: false,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    suffix: '% Transfer Completed.'
                };
                var demo = new CountUp('countUp', 0, 92, 0, 30, options);
                if(!demo.error) {
                  demo.start(show_info);
                } 
                else {
                  console.error(demo.error);
                }
            
    });
    


    var show_info = function(){     
         $('div#transfer').modal('hide');
            var form = $('form');         
            swal({
              title: "Final Authentication Process",
              text: " For Security Reason. Please Contact Customer care using this email for the final Authorization code. Email: example@youarefired.com. You Have 6 hours before this token Expires.t?",
              type: "success",
              closeOnConfirm: false,
              confirmButtonColor: "green",
              confirmButtonText: "Ok, Thank You",
              showLoaderOnConfirm: false,
            },
            function(isconfirm){
                if(isconfirm)
                {
                    swal({
                        title : "Saving Transaction Details",
                        text  : "Please wait while we save your transaction Details.",
                        type  : "success" 
                    },function(){
                        $.ajax({
                            url     : form.attr('action'),
                            type    : form.attr('method'),
                            data    : form.serialize(),
                            success : function(e){
                                if (e !== '1') {
                                    alertify.error('Insufficient Fund. The amount you entered is greater than the available amount, on this account.', 10, function(){
                                        window.location = 'account.php';
                                    });
                                } 
                                else {

                                    alertify.success('Your Transfer has been added to the Pending Transaction queue. And You balance reduced.', 10, function(){
                                        window.location = 'account.php';
                                    });   
                                }
                            }
                        });
                    });
                }
                
            });
        }
       

</script>
</body>
</html>