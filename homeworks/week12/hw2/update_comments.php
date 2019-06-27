<?php  
	require_once('./conn.php');
	require_once('./utils.php');
	require_once('./login_check.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Week9：留言板</title>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">
	<script></script>
</head>
<body>
	<h2 class="alert__title">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h2>
	<main>	
		<div class="board__post">
			<h2 class="board__post-title">
				編輯留言區
			</h2>
			<form method="POST" action="./handle_update_comments.php">
				<div class="board__post-textarea">
					<textarea name="content" placeholder="想說什麼勒？" rows="15"><?php
							echo getContent($conn, $account, $_GET['id']);?></textarea>
				</div>
				<input type="hidden" name="id" value="<?php echo $_GET['id']; ?>">
				<input type='submit' value='送出' class='board__post-submit'>
			</form>
		</div>
	</main>
	
</body>
</html>