<?php  
  if (isset($_GET['success'])) {
		echo  '<div class="alert alert-dismissible alert-success">';
		  echo '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		  echo '<strong>Well done! Upload successfully!</strong>';
		echo  '</div>';
  }

  if (isset($_GET['error']) && $_GET['error'] === 'empty') {
  	echo  '<div class="alert alert-dismissible alert-danger">';
	  	echo  '<button type="button" class="close" data-dismiss="alert">&times;</button>';
	  	echo  '<strong>Oh snap ! Fields are required !</strong>';
		echo  '</div>';
  }

  if (isset($_GET['error']) && $_GET['error'] === 'uploaderror') {
  	echo  '<div class="alert alert-dismissible alert-danger">';
	  	echo  '<button type="button" class="close" data-dismiss="alert">&times;</button>';
	  	echo  '<strong>Oh snap ! There was an error uploading your file !</strong>';
		echo  '</div>';
  }

  if (isset($_GET['error']) && $_GET['error'] === 'bigfilesize') {
		echo  '<div class="alert alert-dismissible alert-danger">';
  		echo  '<button type="button" class="close" data-dismiss="alert">&times;</button>';
  		echo  '<strong>Oh snap ! Your file is too big !</strong>';
		echo  '</div>';
  }

  if (isset($_GET['error']) && $_GET['error'] === 'wrongtype') {
		echo  '<div class="alert alert-dismissible alert-danger">';
  		echo  '<button type="button" class="close" data-dismiss="alert">&times;</button>';
  		echo  '<strong>Oh snap ! You cannot upload files of this type !</strong>';
		echo  '</div>';
  }
?>
