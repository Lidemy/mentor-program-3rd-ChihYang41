<?php 
	require_once('./conn.php');

	if (isset($_POST['submit'])) {
		define('KB', 1024);
		define('MB', 1048576);

		if (empty($_POST['title']) || empty($_POST['description']) || $_FILES['file']['size'] === 0) {
			header('Location: ./index.php?error=empty');
			exit();
		}

		$title = $_POST['title'];
		$description = $_POST['description'];

		// 各種 file 變數
		$file = $_FILES['file'];
		$fileName = $file['name'];
		$fileType = $file['type'];
		$fileTmpName = $file['tmp_name'];
		$fileError = $file['error'];
		$fileSize = $file['size'];

		// 取得檔案類型
		$fileExtension = explode('.', $fileName);
		$fileActualExtension = strtolower(end($fileExtension));
		$allowedExtension = array('jpg', 'jpeg', 'png');

		if ($fileError !== 0) {
			header('Location: ./index.php?error=uploaderror');
			exit();
		}

		if ($fileSize > 5*MB) {
			header('Location: ./index.php?error=bigfilesize');
			exit();
		}

		if (!in_array($fileActualExtension, $allowedExtension)) {
			header('Location: ./index.php?error=wrongtype');
			exit();
		}

		// 給與新 filename 避免覆寫
		$newFileName = 'image-' . uniqid('', true) . '.' . $fileActualExtension;
		$fileDestination = './images/' . $newFileName;

		// 把資料 insert 進 database 
		$sql = "INSERT INTO ChihYang41_gallery(title, description, imgFullName) VALUES (?, ?, ?)";
		$stmt = $conn->stmt_init();
		if ($stmt->prepare($sql)) {
			$stmt->bind_param("sss", $title, $description, $newFileName);
			if ($stmt->execute()) {
				move_uploaded_file($fileTmpName, $fileDestination);
				header('Location: ./index.php?success');
			} else {
				echo 'error';
				exit();
			}
		}
	}
?>