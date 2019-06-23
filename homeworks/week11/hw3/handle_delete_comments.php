<?php  
	require_once('./conn.php');
	require_once('classes/user.class.php');
	require_once('./login_check.php');

	if (isset($_GET['id'])) {
		$id = $_GET['id'];
		$sql = "DELETE FROM `ChihYang41_comments` WHERE id = $id AND account = '$account'";
		$result = $conn->query($sql);
		if ($result) {
			header('Location: ./index.php');
		} else {
			echo "<script>
					alert('刪除失敗');
					location.href = './index.php';
				</script>";
		}
	}
?>