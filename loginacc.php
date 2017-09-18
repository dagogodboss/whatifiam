<?php 
	
	session_start();

	function Redirect($link)
	{
	header('Location:'.$link);	
	}

	if (isset($_POST['userid'])) 
	{

				$errors = [];
				
				if (empty($_POST['userid'])) 
				{	

					$errors['userid']= 'Please Provide Your user Id Information';
						
				}

				if (empty($_POST['password'])) 
				{	

					$errors['password']= 'Please Provide Your Password';
						
				}

			if(!empty($errors))
			{

					$_SESSION['errors'] = $errors;
					Redirect('home.htm');
			}
			else
			{	
					$data = file_get_contents('contact.json');
					$user_info = json_decode($data);
				if ($_POST['userid'] === $user_info->user_id && $_POST['password'] === $user_info->password) 
				{
					$_SESSION['bankapp'] = $_POST['userid'];
					$_SESSION['name'] = $user_info->fullname;
					$_SESSION['cash'] = $user_info->amount;
					echo "1";
				}
				else
				{
					echo "0";
				}

			}
	}
	else{
		Redirect('home.htm');
	}
 
 ?>