<?php  
	require_once('./conn.php');

	$isLogined = false ;
	$user_id = '';

	if (isset($_COOKIE['user_id'])) {
		$isLogined = true;
		$user_id = $_COOKIE['user_id'];
		$sql_nickname = "SELECT ChihYang41_users.nickname FROM ChihYang41_users WHERE id = " . $user_id;
		$result_nickname = $conn->query($sql_nickname);
		$row_nickname = $result_nickname->fetch_assoc();
	}
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
	<nav>
		<h1 class="index_title">留言板</h1>
		<div class="account">
			<?php  
				if ($isLogined) {
					echo "<a href='./logout.php'>登出</a>";
				} else {
					echo "<a href='./login.php'>登入</a>";
					echo "<a href='./register.php'>註冊</a>";
				}
			?>
		</div>
	</nav>
	<h2 class="alert__title">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h2>
	<main>	
		<div class="board__post">
			<h2 class="board__post-title">
				<?php  
					if ($isLogined) {
						echo "歡迎留言！ ";
						echo $row_nickname['nickname'] . " ! ";
					}
				?>		
			</h2>
			<form method="POST" action="./handle_add_comments.php">
				<div class="board__post-textarea">
					<textarea name="content" placeholder="想說什麼勒？" rows="15"></textarea>
				</div>
				<?php  
					if ($isLogined) {
						echo "<input type='submit' value='送出' class='board__post-submit'>";
					} else {
						echo "<input type='submit' value='請先登入喔' class='board__post-submit' disabled>";
					}
				?>
				
			</form>
		</div>
		<div class="board__commments">
			<?php
				$sql = "SELECT ChihYang41_comments.content, ChihYang41_comments.created_at, ChihYang41_users.nickname FROM `ChihYang41_comments` LEFT JOIN `ChihYang41_users` ON ChihYang41_comments.user_id = ChihYang41_users.id ORDER BY created_at DESC LIMIT 50";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
					while ($row = $result->fetch_assoc()) {
			?>
						<div class="board__commment">
							<div class="board__commment-header">
								<div class="board__commment-nickname">
									<?php echo $row['nickname']; ?>
								</div>
								<div class="board__commment-time">
									<?php echo $row['created_at']; ?>
								</div>
							</div>
							<div class="board__commment-content">
								<?php  echo $row['content']; ?>
							</div>
						</div>
			<?php
					}
				}
			?>
		</div>
	</main>
	
</body>
</html>