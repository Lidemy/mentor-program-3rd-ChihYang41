<nav>
	<h1 class="index_title">留言板</h1>
	<div class="account">
		<?php  
			if ($account) {
				echo "<a href='./logout.php'>登出</a>";
			} else {
				echo "<a href='./login.php'>登入</a>";
				echo "<a href='./register.php'>註冊</a>";
			}
		?>
	</div>
</nav>