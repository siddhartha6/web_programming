<?php
	$fontfamily = "";
	$fontsize = "";
	$textcolor = "";
	$desc = "";
	if(isset($_POST['submit'])){
		if($_POST['fontfamily'] == 'tnr'){
			$fontfamily = "Times New Roman";
		}
		if($_POST['fontfamily'] == 'hel'){
			$fontfamily = "Helvetica";
		}
		if($_POST['fontfamily'] == 'ss'){
			$fontfamily = "sans-serif";
		}

		if($_POST['fontsize'] == 'normal'){
			$fontsize = "15px";
		}
		if($_POST['fontsize'] == 'it'){
			$fontsize = "25px";
		}
		if($_POST['fontsize'] == 'ob'){
			$fontsize = "35px";
		}
		$textcolor = $_POST["textcolor"];
		$desc = $_POST["desc"];
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>PHP Processor</title>
	<style>
		p{
			font-family:<?php echo $fontfamily; ?>;
			font-size:<?php echo $fontsize; ?>;
			color:<?php echo $textcolor; ?>;
		}
		.pageContainer {
		   width:80%; 
		   max-width: 800px;
		   margin:7px auto; 
		   padding:25px; 
		   background:white;
		   min-height: 500px;
		   border-radius: 10px;
		}
		.centerText, center
		{
		   text-align: center;
		}
	</style>
</head>
<body>
	<div class="pageContainer centerText">
		<h2>Description</h2>
         <p><?php echo $desc; ?> </p>
    </div>
</body>
</html>
