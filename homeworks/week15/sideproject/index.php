<!-- <?php  
	// require_once('./conn.php');
	// require_once('./utils.php');
?> -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Pug Gallery</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <a class="navbar-brand" href="#">Pug Gallery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ml-auto">
            	<li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign up</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container gallery-image mb-5">
        <div class="row justify-content-center card-container">
           <!--  <?php  
            	// require_once('./card.php');
            ?> -->
        </div>
        <div class="row justify-content-center pagination-container">
			<ul class="pagination">
			    <li class="page-item">
			      	<a class="page-link" href="#">&laquo;</a>
			    </li>
			    <li class="page-item">
			     	<a class="page-link" href="#">1</a>
			    </li>
			    <li class="page-item">
			      	<a class="page-link" href="#">2</a>
			    </li>
			    <li class="page-item">
			      	<a class="page-link" href="#">3</a>
			    </li>
			    <li class="page-item">
			      	<a class="page-link" href="#">4</a>
			    </li>
			    <li class="page-item">
			      	<a class="page-link" href="#">5</a>
			    </li>
			    <li class="page-item">
			      	<a class="page-link" href="#">&raquo;</a>
			    </li>
		  	</ul>
		</div>
    </div>
    <div class="container gallery-upload">
        <!-- <?php  
    		// require_once('./upload_status.php');
    	?> -->
        <div class="row justify-content-center">
            <div class="col-8">
                <form action="./image_upload.php" method="POST" enctype="multipart/form-data" class="image-upload-form mb-5">
                    <legend>Upload Images</legend>
                    <div class="form-group">
                        <input type="text" name="title" class="form-control file-title" placeholder="Image title" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="description" class="form-control file-description" placeholder="Image description" required>
                    </div>
                    <div class="form-group">
                        <input type="file" name="file" accept=".png, .jpg, .jpeg" class="file-choose" required>
                    </div>
                    <button type="submit" name="submit" class="btn btn-primary file-upload">Submit</button>
                </form>
            </div>
        </div>
        <button type="button" class="btn btn-primary" id="BackTop">Back to Top</button>
    </div>
	<script src="js/custom.js"></script>
    <script src="js/all.js"></script>
</body>

</html>