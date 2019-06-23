<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if(isset($_POST['content'])) {
		$content = $_POST['content'];
		$sql = "INSERT INTO ChihYang41_comments(account, content) VALUES ('$account', '$content')";
		$result = $conn->query($sql);
		if ($result) {
			header('Location: ./index.php');
		} else {
			echo 'failed';
		}
	}
?>