
<!doctype html>
<html>
<head>
<title>Javascript Assignment - 4</title>
<link rel="stylesheet" type="text/css" href="assignment4.css" />
<script type="text/javascript" src="assign.js"></script>
</head>
<body onload="generateRandom();">
	
	<br/><a href="assignment4.php">PART-A</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="partc.php">PART-C</a>
	<h1> Javascript Assignment - 4 (Part-B)</h1>
	<label id="time"></label>
	<h2>Simple Guessing Game</h2>
	<h3>Guess one number between 1 and 100 !!!!!<br/> (You have 10 turns to find the Secret Number)</h3>
	<label id="resultLabel"></label><br/>
	<input type="text" id="guessNumber" />
	<audio id="audio1" src="clock.wav"></audio>
	<input  onclick="checkGuess();" type="submit" value="GUESS"/>
	<input  onclick="Sure();" type="submit" value="EXIT"/>
</body>
</html>
