<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if (isset($_POST['content'])) {
		$id = $_POST['id'];
		$content = $_POST['content'];
		$sql = "UPDATE ChihYang41_comments SET content = ? WHERE id = ? AND account = ?";
		$stmt = $conn->stmt_init();
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("sis", $content, $id, $account);
			$result = $stmt->execute();
			if ($result) {
				header('Location: ./index.php');
			} else {
				echo 'failed';
			}
		}

		$stmt->close();
		$conn->close();	
	}
?>