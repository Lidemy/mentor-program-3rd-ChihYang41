<?php  
	class Session {
		private $conn;
		private $table;
		private $account;

		public function __construct($conn, $account) {
			$this->conn = $conn;
			$this->account = $account;
			$this->table = "ChihYang41_users_certificate";
		}

		public function getSessionId() {
			$sql = "SELECT * FROM $this->table WHERE account = '$this->account'";
			$result = $this->conn->query($sql);
			$row = $result->fetch_assoc();
			return $row['session_id'];
		}

		public function setSessionId() {
			$sql = "SELECT account FROM $this->table WHERE account = '$this->account'";
			$result = $this->conn->query($sql);
			$row = $result->fetch_assoc();
			$randomNum = uniqid();
			if($result->num_rows > 0) {
				$sql = "UPDATE $this->table SET session_id = '$randomNum' WHERE account = '$this->account'";
			} else {
				$sql = "INSERT INTO $this->table(session_id, account) VALUES ('$randomNum', '$this->account')";
			}

			$this->conn->query($sql);
			return $randomNum;
		}
	}
?>