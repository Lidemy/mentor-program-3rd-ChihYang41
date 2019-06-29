<?php  
	include_once('./conn.php');
	include_once('./utils.php');

	// 如果沒有登入 $account 就回傳 null;
	if (!isset( $_COOKIE['session_id'])) {
		$account = null;
	} else {
		$account = getUsersBySession($conn, $_COOKIE['session_id']);
	}
	
?>