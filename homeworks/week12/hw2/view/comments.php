<?php
	require_once('view/subcomments.php');
	$sql = "SELECT ChihYang41_comments.id, ChihYang41_comments.content, ChihYang41_comments.created_at, ChihYang41_users.nickname, ChihYang41_users.account FROM `ChihYang41_comments` LEFT JOIN `ChihYang41_users` ON ChihYang41_comments.account = ChihYang41_users.account WHERE ChihYang41_comments.parent_id = 0 ORDER BY created_at DESC LIMIT ?, ?";
	$stmt = $conn->stmt_init();
	if ($stmt->prepare($sql)) {
		$stmt->bind_param("ii", $starting_limit_number, $comments_per_page);
		$stmt->execute();
		$result = $stmt->get_result();
		if ($result->num_rows > 0) {
			while ($row = $result->fetch_assoc()) {
?>
		<div class="board__commment">
			<div class="board__commment-header">
				<div class="board__commment-nickname">
					<?php echo escapeChars($row['nickname']); ?>
				</div>
				<div class="board__commment-time">
					<?php echo escapeChars($row['created_at']); ?>
				</div>
			</div>

			<div class="board__commment-content">
				<?php echo escapeChars($row['content']); ?>
				<?php 
					getSubComments($conn, $row['id'], $account, $row);
				?>
				<form class="board__reply" method="POST" action="./handle_add_comments.php">
					<input type="hidden" name="parent_id" value=" <?php echo $row['id'] ?> ">
					<textarea placeholder="想說什麼勒？" name="content" rows="5" ></textarea>
					<?php  
						if ($account) {
							echo '<input type="submit" value="送出" class="reply__btn">';
						} else {
							echo  '<input type="submit" value="請先登入喔" class="reply__btn" disabled>';
						}
					?>
				</form>
			</div>
			<?php 
			if ($account === $row['account']) {
			?>
			<div class="board__btn">
				<a class="" href="./handle_delete_comments.php?id=<?php echo $row['id'] ?>">刪除</a>
				<a href="./update_comments.php?id=<?php echo $row['id'] ?>">編輯</a>
			</div>
			<?php 
				}
			?>		
		</div>

<?php
			}
		}
	}	
?>
