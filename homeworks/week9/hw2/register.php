<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Week9：留言板註冊頁面</title>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">
</head>
	<div class="register__container">
		<h1 class="register__title">會員註冊</h1>
		<form method="POST" action="./handle_register.php" class="register__form">
			<div>
				帳號：<input type="text" name="account" placeholder="請輸入假帳號">
			</div>
			<div>
				密碼：<input type="password" name="password" placeholder="請輸入假密碼">
			</div>
			<div>
				暱稱：<input type="text" name="nickname" placeholder="請輸入暱稱">
			</div>
			<input type="submit" value="註冊" class="register__submit">
		</form>
	</div>
<body>
	
</body>
</html>