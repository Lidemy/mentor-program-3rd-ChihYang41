<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if (empty($_POST['content'])){
		header('Location: ./index.php');
		exit();
	}
	if (isset($_POST['content'])) {
		$content = $_POST['content'];
		$parent_id = $_POST['parent_id'];
		$sql = "INSERT INTO ChihYang41_comments (account, content, parent_id) VALUES (?, ?, ?)";
		$stmt = $conn->stmt_init();	
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("ssi", $account, $content, $parent_id);
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