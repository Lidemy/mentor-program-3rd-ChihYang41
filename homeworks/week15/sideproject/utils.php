<?php  
	function escapeChars($chars) {
		return htmlspecialchars($chars, ENT_QUOTES, 'UTF-8');
	}

	function uploadImage($image, $title, $description) {
		$url = 'https://api.imgur.com/3/image';
		$clientId = 'c41db6a92658d5f';
		$albumId = 'BpweTGaKY1uJRog';
		// header
		$httpHeaderArray = [
			"Authorization: Client-ID $clientId",
			"Content-Type: application/x-www-form-urlencoded",
		];

		// parameter
		$curlPostArray = [
			'image' => $image,
			'title' => $title,
			'description' => $description,
			'album' => $albumId,
		];

		$curlOptions = [
			CURLOPT_HTTPHEADER => $httpHeaderArray,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => http_build_query($curlPostArray),
		];

		$curlInfo = null;
		$curlResult = useCurlOpt($url, $curlOptions, $curlInfo);

		return $curlResult;
	}

	function useCurlOpt($url, $options, $curlInfo) {
		$ch = curl_init();
		$defaultOptions = [
			CURLOPT_URL => $url,
			CURLOPT_HEADER => 0,
			CURLOPT_VERBOSE => 0,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 5.1; rv:10.0.2) Gecko/20100101 Firefox/10.0.2",
		];
		curl_setopt_array($ch, $defaultOptions);
		curl_setopt_array($ch, $options);
		$curlResult = curl_exec($ch);
		$curlInfo = curl_getinfo($ch);
		$curlError = curl_error($ch);
		curl_close($ch);

		if ($curlResult) { 
			return $curlResult; 
		}
		return $curlError;
	}
?>