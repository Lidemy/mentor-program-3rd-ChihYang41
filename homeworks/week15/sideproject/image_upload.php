<?php  
	require_once('./utils.php');
	if (isset($_POST['submit'])) {
		define('KB', 1024);
		define('MB', 1048576);
		// 判斷是否為空
		if (empty($_POST['title']) || empty($_POST['description']) || $_FILES['file']['size'] === 0) {
			header('Location: ./index.php?error=empty');
			exit();
		};

		// 各種 file 的變數
		$title = $_POST['title'];
		$description = $_POST['description'];
		$file = $_FILES['file'];
		$fileName = $file['name'];
		$fileError = $file['error'];
		$fileSize = $file['size'];

		// 取得上傳檔案的類型
		$fileExtension = explode('.', $fileName);
		$fileActualExtension = strtolower(end($fileExtension));
		$allowedExtension = array('jpg', 'jpeg', 'png');

		// upload Error
		if ($fileError !== 0) {
			header('Location: ./index.php?error=uploaderror');
			exit();
		}

		// 檔案大小不得超過 5 MB
		if ($fileSize > 5*MB) {
			header('Location: ./index.php?error=bigfilesize');
			exit();
		}

		// 判斷檔案類型是否為 jpg, jpeg, png 
		if (!in_array($fileActualExtension, $allowedExtension)) {
			header('Location: ./index.php?error=wrongtype');
			exit();
		}

		// 讀取上傳檔案並變為 Base64 字串
		$filepath = $file['tmp_name'];
		$handle = fopen($filepath, "r");
		$data = fread($handle, filesize($filepath));
		$imageBase64 = base64_encode($data);

		// 呼叫 function uploadImage
		$imgurResult = uploadImage($imageBase64, $title, $description);

		// imgur response(JSON)
		echo $imgurResult;
		$data = json_decode($imgurResult, true);
		print_r($data['data']);
	};
?>