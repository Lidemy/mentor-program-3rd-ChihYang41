<?php  

	// 跳脫字元
	function escapeChars($chars) {
		return htmlspecialchars($chars, ENT_QUOTES, 'UTF-8');
	}

	// Users 相關 function 
	function getContent($conn, $account, $id) {
		$sql = "SELECT * FROM ChihYang41_comments WHERE id = ? AND account = ?";
		$stmt = $conn->stmt_init();
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("is", $id, $account);
			$stmt->execute();
	 		$result = $stmt->get_result();
	 		$row = $result->fetch_assoc();
	 		return $row['content'];
		} else {
			echo 'SQL error!';
		}
	}

	function getNickname($conn, $account) {
		if (isset($_SESSION['account'])) {
			$sql = "SELECT ChihYang41_users.nickname FROM ChihYang41_users WHERE account = ?";
			$stmt = $conn->stmt_init();
			if ($stmt->prepare($sql)) {
				$stmt->bind_param("s", $account);
	 			$stmt->execute();
	 			$result = $stmt->get_result();
	 			$row = $result->fetch_assoc();
	 			return $row['nickname'];
			}
		} 
		return null;
	}

?>