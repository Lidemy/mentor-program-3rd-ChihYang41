<?php
	require_once('./conn.php');
	require_once('./utils.php');

	$account = $_POST['account'];
	$password = $_POST['password'];

	if (empty($account) || empty($password)) {
		header("Location: ./login.php?error=empty");
		exit();
	}
	
	$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
	$stmt = $conn->stmt_init();
	if ($stmt->prepare($sql)) {
		$stmt->bind_param("s", $account);
	 	$stmt->execute();
	 	$result = $stmt->get_result();
	 	$row = $result->fetch_assoc();

	 	if ($result->num_rows === 0) {
	 		header("Location: ./login.php?error=othererror");
			exit();
	 	}

	 	if (!password_verify($password, $row['password'])) {
			header("Location: ./login.php?error=pwderror");
			exit();
		}

		getSessionId($conn, $account);
		setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
		echo "<script>
				alert('登入成功！');
				location.href = './index.php';
			</script>";

		$stmt->close();
		$conn->close();
	}	
?>