    <?php   
    $sql = "SELECT * FROM ChihYang41_gallery ORDER BY created_at DESC";
    	$stmt = $conn->stmt_init();
    	if ($stmt->prepare($sql)) {
    		$stmt->execute();
    		$result = $stmt->get_result();
    		if ($result->num_rows > 0) {
    			while ($row = $result->fetch_assoc()) {
    ?>
						<div class="card col-lg-4 col-md-6 col-12 mb-3 nopadding" style="width: 18rem;">
	            <img src="./images/<?php echo $row['imgFullName'] ?>" class="card-img-top" alt="..." style="height:240px">
	            <div class="card-body">
	                <h5 class="card-title">
	                	<?php echo escapeChars($row['title'])?>	
	                </h5>
	                <p class="card-text">
	                	<?php echo escapeChars($row['description']) ?>
	                </p>
	            </div>
      			</div>		
    <?php
    			}
    		}
    	}
    ?>