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
		<form method="POST" action="./handle_login.php" class="login__form">
			<div>帳號：<input type="text" name="account" placeholder="請輸入帳號"></div>
			<div>密碼：<input type="password" name="password" placeholder="請輸入密碼"></div>
			<input type="submit" value="登入" class="login__submit">
		</form>
	</div>
<body>
	
</body>
</html>