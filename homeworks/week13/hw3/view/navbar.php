<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  	<a class="navbar-brand" href="#">留言板</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
                <?php  
				if ($account) {
				?>
            		<li class="nav-item">
                		<a class="nav-link" href="./logout.php">登出</a>
            		</li>
                <?php
				} else {
			    ?>
		            <li class="nav-item nav-button">
		                <a class="nav-link login__btn" href="./login.php">登入</a>
		            </li>
		            <li class="nav-item">
		                <a class="nav-link register__btn" href="./register.php">註冊</a>
		            </li>
            <?php
				}
			?>
        </ul>
    </div>
</nav>