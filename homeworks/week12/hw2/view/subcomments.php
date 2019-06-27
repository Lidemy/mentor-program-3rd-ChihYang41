<?php  
	require_once('./conn.php');
	require_once('./login_check.php');

	function getSubComments($conn, $id, $account, $row) {
		$sub_sql = "SELECT ChihYang41_comments.id, ChihYang41_comments.content, ChihYang41_comments.created_at, ChihYang41_users.nickname, ChihYang41_users.account FROM `ChihYang41_comments` LEFT JOIN `ChihYang41_users` ON ChihYang41_comments.account = ChihYang41_users.account WHERE ChihYang41_comments.parent_id = $id  ORDER BY created_at ASC" ;
		$sub_result = $conn->query($sub_sql);
		if ($sub_result->num_rows > 0) {
			while ($sub_row = $sub_result->fetch_assoc()) {
				echo '<div class="subcomment-container">';
					if ($sub_row['account'] === $row['account']) {
						echo '<div class="board__subcomment-single board__subcomment-main">';
					} else {
						echo '<div class="board__subcomment-single">';
					}
					  		echo '<div class="board__subcomment-header">';
								echo '<div class="board__subcomment-nickname">';
										echo  escapeChars($sub_row['nickname']);
								echo '</div>';
								echo '<div class="board__subcomment-time">';
										echo  escapeChars($sub_row['created_at']);
								echo '</div>';
							echo '</div>';

							echo '<div class="board__subcomment-content">';
								echo escapeChars($sub_row['content']);
								if ($account === $sub_row['account']) {
									echo '<div class="board__btn sub-btn">';
										echo '<a href="./handle_delete_comments.php?id=' . $sub_row['id'] .'">刪除</a>';
										echo '<a href="./update_comments.php?id=' . $sub_row['id'] .'">編輯</a>';
									echo '</div>';
								}
							echo '</div>';
						echo '</div>';
				echo '</div>';	
			}
		}
	}
?>