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
		if (isset($_COOKIE['session_id'])) {
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

	// Session 相關 function 

	function getUsersBySession($conn, $session_id) {
		if (isset($session_id)) {
			$sql = "SELECT * FROM ChihYang41_users_certificate WHERE session_id = ?";
			$stmt = $conn->stmt_init();
			if ($stmt->prepare($sql)) {
				$stmt->bind_param("s", $session_id);
	 			$stmt->execute();
	 			$result = $stmt->get_result();
	 			if (!$result || $result->num_rows <= 0) {
					return null;
				} else {
					$row = $result->fetch_assoc();
					return $row['account'];
				}
			}
		} else {
			return null;
		}
	}

	function getSessionId($conn, $account) {
		$sql = "SELECT * FROM ChihYang41_users_certificate WHERE account = ?";
		$stmt = $conn->stmt_init();
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("s", $account);
	 		$stmt->execute();
	 		$result = $stmt->get_result();
	 		$row = $result->fetch_assoc();
	 		return $row['session_id'];
		}
	}

	function setSessionId($conn, $account) {
		$sql = "SELECT account FROM ChihYang41_users_certificate WHERE account = ?";
		$stmt = $conn->stmt_init();
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("s", $account);
	 		$stmt->execute();
	 		$result = $stmt->get_result();
	 		$randomNum = uniqid();

	 		if ($result->num_rows > 0) {
				$sql = "UPDATE ChihYang41_users_certificate SET session_id = ? WHERE account = ?";
				$stmt = $conn->stmt_init();
				if ($stmt->prepare($sql)) {
					$stmt->bind_param("ss", $randomNum, $account);
	 				$stmt->execute();
				}				
			} else {
				$sql = "INSERT INTO ChihYang41_users_certificate(session_id, account) VALUES (?, ?)";
				$stmt = $conn->stmt_init();
				if ($stmt->prepare($sql)) {
					$stmt->bind_param("ss", $randomNum, $account);
	 				$stmt->execute();
				}				
			}

			return $randomNum;
		}
	}
?>