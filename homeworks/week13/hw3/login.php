<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Week9：留言板登入頁面</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
</head>

<body>
	<div class="login__container">
	    <form method="POST" action="./handle_login.php">
	        <fieldset>
	            <legend>會員登入</legend>
	            <?php
				if (isset($_GET['error'])) {
					if ($_GET['error'] === 'empty') {
						echo "<p class='text-warning'> 填好填滿才能登入喔 </p>";
					} else if ($_GET['error'] === 'pwderror') {
						echo "<p class='text-warning'> 密碼輸入錯誤 </p>";
					} else if ($_GET['error'] === 'othererror') {
						echo "<p class='text-warning'> ㄅ歉，登入失敗，請重新輸入帳號密碼 </p>";
					}
				}
				?>
	            <div class="form-group">
	                <label for="loginAccount">Account</label>
	                <input type="text" class="form-control" id="loginAccount" name="account" placeholder="請輸入假帳號">
	            </div>
	            <div class="form-group">
	                <label for="loginPassword">Password</label>
	                <input type="password" class="form-control" id="loginPassword" name="password" placeholder="請輸入假密碼">
	            </div>
	            <button type="submit" class="btn btn-primary">Submit</button>
	        </fieldset>
	    </form>
	</div>
</body>

</html>