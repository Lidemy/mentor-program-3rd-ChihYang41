<?php  
	require_once('./conn.php');
	$account = $_POST['account'];
	$password = $_POST['password'];
	$nickname = $_POST['nickname'];

	if (empty($account) || empty($password) || empty($nickname)) {
		echo "<script> 
				alert('請勿留白喔');
				location.href='./register.php';
			</script>";
	}

	$isRegistered = $conn->query("SELECT * FROM ChihYang41_users WHERE account = '$account'");
	$sql = "INSERT INTO ChihYang41_users(account, password, nickname) VALUES ('$account', '$password', '$nickname')";

	if ($isRegistered->num_rows > 0) {
		echo "<script>
				alert('此帳號已有人使用囉');
				location.href='./register.php';
			</script>";
	} else {
	 	$conn->query($sql);
	 	echo "<script>
				alert('註冊成功！');
				location.href='./index.php';
			</script>";
	}
?>