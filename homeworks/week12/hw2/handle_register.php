<?php  
	require_once('./conn.php');
	require_once('./utils.php');

	$account = $_POST['account'];
	$password = $_POST['password'];
	$nickname = $_POST['nickname'];
	$hasedPwd = password_hash($password, PASSWORD_DEFAULT);

	if (empty($account) || empty($password) || empty($nickname)) {
		header("Location: ./register.php?error=empty");
		exit();
	}

	$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
	$stmt = $conn->stmt_init();

	if ($stmt->prepare($sql)) {
	 	$stmt->bind_param("s", $account);
	 	$stmt->execute();
	 	$stmt->store_result();
	 	$isRegistered = $stmt->num_rows();

	 	if ($isRegistered > 0) {
	 		header("Location: ./register.php?error=usertaken");
			exit();
	 	}

	 	$sql = "INSERT INTO ChihYang41_users(account, password, nickname) VALUES (?, ?, ?)";
	 	$stmt = $conn->stmt_init();
	 	if ($stmt->prepare($sql)) {
			$stmt->bind_param("sss", $account, $hasedPwd, $nickname);
	 		$stmt->execute();
	 		getSessionId($conn, $account);
			setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
	 		echo "<script>
					alert('註冊成功！');
					location.href='./index.php';
				</script>";
			
		}
	 	
	 	$stmt->close();
		$conn->close();
	}

?>