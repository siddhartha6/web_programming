<?php
	$message = "";
	if(isset($_POST['login'])){
		$password = $_POST['pass'];
		$username = $_POST['user'];
		if($password == 'guest'){
			session_start();
			$_SESSION['username'] = $username;
			header('location:Correct.php');
		}
		else{
			$message = "Wrong Username or Password";
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Correct!</title>
  <link rel="stylesheet" href="login.css" media="screen" type="text/css" />
</head>
<body>
  <div class="login-card">
    <h1>Correct!</h1><br>
  <form action="#" method="post">
    <input type="text" name="user" placeholder="Username">
    <input type="password" name="pass" placeholder="Password">
    <input type="submit" name="login" class="login login-submit" value="login">
  </form>
  <?php if($message != ""){ 
  	echo $message;
  }?>
</div>
</body>
</html>