<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Week13：留言板註冊頁面</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">
</head>

<body>
	<div class="register__container">
	    <form method="POST" action="./handle_register.php">
	        <fieldset>
	            <legend>會員註冊</legend>
	            <?php 
				if (isset($_GET['error'])) {
					if ($_GET['error'] === 'empty') {
						echo "<p class='text-warning'> 全部都要填喔 </p>";
					}
					if ($_GET['error'] === 'usertaken') {
						echo "<p class='text-warning'> 此帳號有人使用 </p>";
					}
				}
				?>
	            <div class="form-group">
	                <label for="registerAccount">Account</label>
	                <input type="text" class="form-control" id="registerAccount" name="account" placeholder="請輸入假帳號">
	            </div>
	            <div class="form-group">
	                <label for="registerPassword">Password</label>
	                <input type="password" class="form-control" id="registerPassword" name="password" placeholder="請輸入假密碼">
	            </div>
	            <div class="form-group">
	                <label for="registerNickname">Nickname</label>
	                <input type="text" class="form-control" id="rregisterNickname" name="nickname" placeholder="請輸入暱稱">
	            </div>
	            <button type="submit" class="btn btn-primary">Submit</button>
	        </fieldset>
	    </form>
	</div>
</body>

</html>