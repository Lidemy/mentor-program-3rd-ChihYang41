<?php  

	// Users 相關 function 
	
	function getComments($conn, $account, $id) {
		$sql = "SELECT * FROM ChihYang41_comments WHERE id = $id AND account = '$account'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row['content'];
	}

	function getNickname($conn, $account) {
		if (isset($_COOKIE['session_id'])) {
			$sql = "SELECT ChihYang41_users.nickname FROM ChihYang41_users WHERE account = '$account'";
			$result = $conn->query($sql);
			$row = $result->fetch_assoc();
			return $row['nickname'];
		} 
		return null;
	}

	// Session 相關 function 

	function getUsersBySession($conn, $session_id) {
		if (isset($session_id)) {
			$sql = "SELECT * FROM ChihYang41_users_certificate WHERE session_id = '$session_id'";
			$result = $conn->query($sql);
			if (!$result || $result->num_rows <= 0) {
				return null;
			} else {
				$row = $result->fetch_assoc();
				return $row['account'];
			}
		} else {
			return null;
		}
	}

	function getSessionId($conn, $account) {
		$sql = "SELECT * FROM ChihYang41_users_certificate WHERE account = '$account'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		return $row['session_id'];
	}

	function setSessionId($conn, $account) {
		$sql = "SELECT account FROM ChihYang41_users_certificate WHERE account = '$account'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		$randomNum = uniqid();
		if($result->num_rows > 0) {
			$sql = "UPDATE ChihYang41_users_certificate SET session_id = '$randomNum' WHERE account = '$account'";
		} else {
			$sql = "INSERT INTO ChihYang41_users_certificate(session_id, account) VALUES ('$randomNum', '$account')";
		}

		$conn->query($sql);
		return $randomNum;
	}
?>