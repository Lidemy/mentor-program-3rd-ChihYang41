
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Week9：留言板登入頁面</title>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">
</head>
	<div class="login__container">
		<h1 class="login__title">會員登入</h1>
		<?php  
		require_once('./conn.php');
			if (isset($_GET['error'])) {
				if ($_GET['error'] === 'empty') {
					echo "<p class='alert'> 填好填滿才能登入喔 </p>";
				}  else if ($_GET['error'] === 'pwderror') {
					echo "<p class='alert'> 密碼輸入錯誤 </p>";
				} else if($_GET['error'] === 'othererror') {
					echo "<p class='alert'> ㄅ歉，登入失敗，請重新輸入帳號密碼 </p>";
				}
			}
		?>
		<form method="POST" action="./handle_login.php" class="login__form">
			<div>帳號：<input type="text" name="account" placeholder="請輸入帳號"></div>
			<div>密碼：<input type="password" name="password" placeholder="請輸入密碼"></div>
			<input type="submit" value="登入" class="login__submit">
		</form>
	</div>
<body>
	
</body>
</html>

