<?php 
	require_once 'header.php';
	require_once 'sidebar.php';
 ?>


        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Fund Your Account From Any Other Bank</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
            	<div class="col-lg-4 col-lg-offset-4">
		            <div class="panel panel-yellow">
		            <div class="panel-heading">
			            <h2 class="panel-title">
			            	Account Details
			            </h2>
		            </div>
				      <div class="panel-body account">
				      		<h1>Full Name: <small class="text-center text-muted" style="text-transform:capitalize;"><?php echo $_SESSION['name'] ?></small></h1>	
				      		
				      		<h2>Account Balance: <small class="text-center text-muted  label label-success" style=""> <i class="fa fa-dollar"></i><?php echo $_SESSION['cash'] ?></small></h2>	
				      		<?php 
					      		$data = file_get_contents('contact.json');
								$user_info = json_decode($data);
					 		?>

				      		<h2>Next Of Kin: <small class="text-center text-muted" style=""><?php echo $user_info->next_kin ?></small></h2>	

				      		<h2>Relationship to Next of Kin: <small class="text-center text-muted" style=""><?php echo $user_info->next_kin_relationship ?></small></h2>	
				      </div>
		            </div>
            	</div>
            </div>
        </div>