<?php 
	session_start();
	function Redirect($link)
	{
	header('Location:'.$link);	
	}
	unset($_SESSION['bankapp']);
	Redirect('home.htm');
 ?>