<?php 
session_start();
	function Redirect($link)
	{
	header('Location:'.$link);	
	}

		if (isset($_POST)) {
			
		$amount = str_replace(',', '', 	$_POST['cash']);
		$data = file_get_contents('contact.json');
		$user_info = json_decode($data);
		$main_amount = str_replace(',', '', $user_info->amount);
		if ($main_amount < $amount) {
			echo 'The Cash you Entered is Bigger than the available Cash.';
		}else{


		$newcash = $main_amount - $amount ;
		$user_info->amount = $newcash;
		$array = [
			'fullname' => $user_info->fullname,
			'password' => $user_info->password,
			'amount'   => $user_info->amount,
			'next_kin' => $user_info->next_kin,
			'next_kin_relationship' => $user_info->next_kin_relationship,
			'first_auth_code' => $user_info->first_auth_code,
			'timeline1' => $user_info->timeline1,
			'timeline2' => $user_info->timeline2,
			'timeline3' => $user_info->timeline3,
			'timeline4' => $user_info->timeline4,
			'timeline5' => $user_info->timeline5,
			'message1' => $user_info->message1,
			'message2' => $user_info->message2,
			'message3' => $user_info->message3,
			'message4' => $user_info->message4,
			'message5' => $user_info->message5,
			'notice' => $user_info->notice,
		];
		$newdata =  json_encode($array);
		file_put_contents('contact.json', $newdata);
		//var_dump($amount, $main_amount, $newcash, $user_info->amount, $newdata);
		unset($_SESSION['send']);
		echo "1";
		}
	}

 ?>