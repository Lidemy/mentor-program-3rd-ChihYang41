<?php
	$sql = "SELECT ChihYang41_comments.id, ChihYang41_comments.content, ChihYang41_comments.created_at, ChihYang41_users.nickname, ChihYang41_users.account FROM `ChihYang41_comments` LEFT JOIN `ChihYang41_users` ON ChihYang41_comments.account = ChihYang41_users.account ORDER BY created_at DESC LIMIT $starting_limit_number, $comments_per_page";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
?>
			<div class="board__commment">
				<div class="board__commment-header">
					<div class="board__commment-nickname">
						<?php echo htmlspecialchars($row['nickname'],ENT_QUOTES, 'UTF-8'); ?>
					</div>
					<div class="board__commment-time">
						<?php echo htmlspecialchars($row['created_at'],ENT_QUOTES, 'UTF-8'); ?>
					</div>
				</div>
				<div class="board__commment-content">
					<?php  echo htmlspecialchars($row['content'],ENT_QUOTES, 'UTF-8'); ?>
				</div>
					<?php if($account === $row['account']){
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
?>