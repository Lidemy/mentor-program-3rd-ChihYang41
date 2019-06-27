<?php  
	require_once('./conn.php');
	require_once('./login_check.php');
	require_once('./utils.php');
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
	<?php
	 	require_once('view/navbar.php');
	 	require_once('view/pagination.php');
	 ?>
	<h2 class="alert__title">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h2>
	<main>	
		<div class="board__post">
			<?php require_once('view/board_post.php') ?>
		</div>
		<div class="board__commments">
			<?php require_once('view/comments.php') ?>
			
		</div>
	</main>
	
</body>
</html>