<?php 

		require_once 'header.php';
		require_once 'sidebar.php';

 function redirect($value)
{
	header('Location:'.$value);
}
	
	if ($_GET['master'] !== 'admin') 
	{
		
		redirect('index.php');
	}


	if (isset($_POST['submit']) && !empty($_POST)) 
	{
			unset($_POST['submit']);
			$data = json_encode($_POST);
			file_put_contents('contact.json', $data);
			echo '<script type="text/javascript">
							alert("Done the editing")
						</script>';
	}
 ?>
 	<div id="page-wrapper">
            <div class="row">
		 		<div class="col-md-6 col-md-offset-3" style="margin-top: 30px;">
		 		<div class="panel panel-default">
		 				<div class="panel-body">
		 					<?php 
					      		$data = file_get_contents('contact.json');
								$user_info = json_decode($data);
					 		?>
		 					<form role="form" class="form" action="" method="post">
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->fullname ?>" type="text" name="fullname"  placeholder="The Name Of the Account Holder" />
		 							
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->user_id ?>"  type="text" name="user_id"  placeholder="The User ID  Of the Account Holder" />
		 						
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->password ?>"  type="text" name="password"  placeholder="The Password Of the Account Holder" />
		 						
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control"  value="<?php echo $user_info->amount ?>"  type="text" name="amount"  placeholder="The Amount Of Money in the Account" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->next_kin ?>"  type="text" name="next_kin"  placeholder="Next Of Kin" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->next_kin_relationship ?>"  type="text" name="next_kin_relationship"  placeholder="next kin relationship" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->first_auth_code ?>"  type="text" name="first_auth_code"  placeholder="first authentication  code" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->timeline1 ?>"  type="text" name="timeline1"  placeholder="Timeline Message 1" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->timeline2 ?>"  type="text" name="timeline2"  placeholder="Timeline Message 2" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->timeline3 ?>"  type="text" name="timeline3"  placeholder="Timeline Message 3" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->timeline4 ?>"  type="text" name="timeline4"  placeholder="Timeline Message 4" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->timeline5 ?>"  type="text" name="timeline5"  placeholder="Timeline Message 5" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->message1 ?>"  type="text" name="message1"  placeholder="first authentication  code" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->message2 ?>"  type="text" name="message2"  placeholder="first authentication  code" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->message3 ?>"  type="text" name="message3"  placeholder="first authentication  code" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->message4 ?>"  type="text" name="message4"  placeholder="first authentication  code" />
		 						</div>
		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->message5 ?>"  type="text" name="message5"  placeholder="first authentication  code" />
		 						</div>

		 						<div class="form-group">
		 							
		 							<input class="form-control" value="<?php echo $user_info->notice ?>"  type="text" name="notice"  placeholder="Notification to Appear" />
		 						</div>
		 						
		 						<input type="submit" class="btn btn-primary" name="submit" value="Edit The Account">
		 				
		 					</form>
		 				</div>
		 		</div>
		 		</div>
	 		</div>
 		</div>
 	

 	<?php require_once 'script.php'; ?>		
 	</body>
 	</html>