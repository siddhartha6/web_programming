<?php 
if (isset($_POST) && ($_POST['choice'] !== "0") && ($_POST['level'] !== "0")){
	$tableRowCount = $_POST['choice'];
	$GameTime = $_POST['level'];
}
//echo $_POST['choice'];
?>
<!doctype html>
<html>
<head>
<title>Javascript Assignment - 4</title>
<link rel="stylesheet" type="text/css" href="match.css">
<script type="text/javascript" src="assign.js"></script>
<script type="text/javascript">
var level = "<?php echo $GameTime; ?>";
var choice = "<?php echo $tableRowCount; ?>";
//alert(level);
</script>
</head>
<body onload="setup(choice,level)">

<br/><a href="assignment4.php">PART-A</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="partb.php">PART-B</a>
	<h1> Javascript Assignment - 4 (Part-C)</h1>
	<h2>MEMORY MATCHING GAME</h2>
	
	<label id="gameTypeDisplay"></label><br/>
    <?php $time = "";
		if ($tableRowCount == '4') 
   			$time="02:00";
	else if ($tableRowCount == '5') 
			$time="02:00";
	else if ($tableRowCount == '6') 
			$time="02:00";
	?>
	<span id=count><?php echo $time;?></span>
<br/><label class="displayLabel">Click the READY button when ready to play or restart a new game.</label>
<button  onclick="displayData(choice, level)">READY</button>
<div id="memory_board"></div>
<script></script>
</body>
</html>
