<?php
	require_once('./conn.php');
	$account = $_POST['account'];
	$password = $_POST['password'];

	if (empty($account) || empty($password)) {
		echo "<script>
				alert('填好填滿才能登入喔');
				location.href = './login.php';
			</script>";
	}
	
	$sql = "SELECT * FROM ChihYang41_users WHERE account = '$account' AND password = '$password'";
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();

	if ($result->num_rows > 0) {
		setcookie("user_id", $row['id'], time()+3600*24);
		echo "<script>
				alert('登入成功！');
				location.href = './index.php';
			</script>";
	} else {
		echo "<script>
				alert('ㄅ歉，登入失敗，請重新輸入帳號密碼');
				location.href = './login.php';
			</script>";
	}
?>