<?php  
	require_once('./conn.php');
	$content = $_POST['content'];
	$user_id = $_COOKIE['user_id'];
	$sql = "INSERT INTO ChihYang41_comments(user_id, content) VALUES ($user_id, '$content')";
	$result = $conn->query($sql);
	if ($result) {
		header('Location: ./index.php');
	} else {
		echo 'failed';
	}
?>