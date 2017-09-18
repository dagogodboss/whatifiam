<?php 
	session_start();
	
	function Redirect($link)
	{
	header('Location:'.$link);	
	}

	if (isset($_POST) && empty($_POST) == false) {
		$data = file_get_contents('contact.json');
		$file_det = json_decode($data);
		if ($_POST['first_auth_code'] === $file_det->first_auth_code) {
			$_SESSION['send'] = 'first_auth_code';
			Redirect('enter_amounts.php');
		}else{
			$_SESSION['errors'] = "The Authentication Code you entered is incorrect"; 
			Redirect('transfer.php');
		}
	}
 ?>
