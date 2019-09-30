
<!doctype html>
<html>
<head>
<title>Javascript Assignment - 4</title>
<link rel="stylesheet" type="text/css" href="assignment4.css"/>
<script type="text/javascript" src="assign.js"></script>
</head>
<body>
	<br/><a href="assignment4.php">PART-A</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="partb.php">PART-B</a>
	<h1> Javascript Assignment - 4 (Part-C)</h1>
	<h2>MEMORY MATCHING GAME</h2>
	
	<form action ="startgame.php" method="post" onSubmit="return checkGameDetails();">
		<div class="mainDiv">
			<table>
				<tr><td class="title">Choice No. Of Pictures : </td>
					<td><select name="choice" id = "choice"><option value="0">SELECT</option>
						<option value="4">8 Pictures</option>
						<option value="5">10 Pictures</option>
						<option value="6">12 Pictures</option></select></td><td><label id="choiceMsg"></label></td></tr>
				<tr><td class="title">Game Level : </td>
					<td><select name="level" id = "level"><option value="0">SELECT</option>
						<option value="e">Easy - (8 Seconds to MEMORIZE)</option>
						<option value="m">Medium - (5 Seconds to MEMORIZE)</option>
						<option value="d">Diffculty - (3 Seconds to MEMORIZE)</option></select></td><td><label id="levelMsg"></label></td></tr>
				<tr><td></td><td><input type="submit" value="START GAME" /></td><td></td></tr></table>
		</div>	
	</form>
</body>
</html>
