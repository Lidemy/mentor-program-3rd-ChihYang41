<?php  
	// 每頁要多少則留言
	 $comments_per_page = 20;

	 // 抓 page 的 query 
	 $page_sql = "SELECT * FROM ChihYang41_comments";
	 $page_result = $conn->query($page_sql);
	 $number_of_results = $page_result->num_rows;

	 // 要分成多少頁
	 $number_of_pages = ceil($number_of_results / $comments_per_page);

	 // 判斷分頁
	 if (!isset($_GET['page'])) {
	 	$page = 1;
	 } else {
	 	$page = $_GET['page'];
	 }

	 // LIMIT 的開始數字
	 $starting_limit_number = ($page - 1) * $comments_per_page;
?>