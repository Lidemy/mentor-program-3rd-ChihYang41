<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if (isset($_POST['id'])) {
		$id = $_POST['id'];
		$sql = "DELETE FROM `ChihYang41_comments` WHERE id = ? AND account = ?";
		$stmt = $conn->stmt_init();	
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("is", $id, $account);
	 		if ($stmt->execute()) {
				echo 'Sucess';
			} else {
				echo 'Failed';
			}
		}

		$stmt->close();
		$conn->close();	
	 }
?>