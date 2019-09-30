<?php    
	session_start();
    $username = "";
    if(isset($_SESSION['username'])){
        $username = $_SESSION['username'];
    }
    else{
      header("location: login.php");
   }
?>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>Correct!</title>
<link rel="stylesheet" type="text/css" href="stylesheetproject1.css">

</head>

<body>

	<table id="mainframe">
		<tr>
			<td>
				<ul>
					<li><a class="active" href="Correct.php">Home</a></li>
					<li><a href="game/PlayCorrect.php">Play</a></li>
					<li><a href="howtoplay.php">How to play</a></li>
					<li class="liclass"> <a href="#">GitHub Repository</a></li>
					<li><a href="logout.php">Logout</a>
				</ul>
			</td>
		</tr>
		<tr>
			<td><h1>Welcome <?php echo $username; ?></h1></td>
		</tr>
		<tr>
			<td>
				<p>The exhilarating programming memory game that tests your
					memory to its limits, while engaging you in a fun interactive
					learning process!</p>
				<p>Users: Age +10</p>
			</td>
		</tr>
		<tr>
			<td>

				<div id="cf">
					<img id="img1" src="images/GameDesign/Slide5.jpg" alt="Correct!"/>
					<img id="img2" src="images/GameDesign/Slide1.jpg" alt="Correct!"/>
					<img id="img3" src="images/GameDesign/Slide2.jpg" alt="Correct!"/>
					<img id="img4" src="images/GameDesign/Slide3.jpg" alt="Correct!"/>
				</div>
			</td>
		</tr>
	</table>

</body>
</html>