<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	if (isset($_GET['id'])) {
		$id = $_GET['id'];
		$sql = "DELETE FROM `ChihYang41_comments` WHERE id = ? AND account = ?";
		$stmt = $conn->stmt_init();	
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("is", $id, $account);
	 		$result = $stmt->execute();
	 		if ($result) {
				header('Location: ./index.php');
			} else {
				echo "<script>
						alert('刪除失敗');
						location.href = './index.php';
					</script>";
			}
		}

		$stmt->close();
		$conn->close();	
	 }
?>