<?php  
	session_start();
	include_once('./conn.php');
	include_once('./utils.php');

	// 如果沒有登入 $account 就回傳 null;
	if (!isset( $_SESSION['account'])) {
		$account = null;
	} else {
		$account = $_SESSION['account'];
	}
?>