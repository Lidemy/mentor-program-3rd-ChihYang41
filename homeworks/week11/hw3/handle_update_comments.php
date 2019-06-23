<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if (isset($_POST['content'])) {
		$id = $_POST['id'];
		$content = $_POST['content'];
		$sql = "UPDATE ChihYang41_comments SET content = '$content' WHERE id = $id AND account = '$account'";
		$result = $conn->query($sql);
		if ($result) {
			header('Location: ./index.php');
		} else {
			echo 'failed';
		}
	}
?>