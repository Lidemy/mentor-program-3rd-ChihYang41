<h2 class="board__post-title">
	<?php
		echo '歡迎留言！';
		echo escapeChars(getNickname($conn, $account)) . '！';
	?>		
</h2>
<form method="POST" action="./handle_add_comments.php">
	<input type="hidden" name="parent_id" value="0">
	<div class="board__post-textarea">
		<textarea name="content" placeholder="想說什麼勒？" rows="15"></textarea>
	</div>
	<?php  
		if ($account) {
			echo "<input type='submit' value='送出' class='board__post-submit'>";
		} else {
			echo "<input type='submit' value='請先登入喔' class='board__post-submit' disabled>";
		}
	?>
</form>
	<?php  
		// for loop 創造頁數
	 	for ($page = 1 ;  $page <= $number_of_pages; $page++) {
	 	echo "<a href='./index.php?page=". $page ."' class='page_link'>". $page ."</a>";
	 	}
	?>
