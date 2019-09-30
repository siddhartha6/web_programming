function getEmpDetails() {
    var EmpNo = 0;

	var hours = new Array();
	var pay = new Array();
	result = false;
	
	var numbers = "/^[-+]?[0-9]+$/";  
    
	while (result == false)
	{
		var no = EmpNo + 1;
	    var hour = prompt("Please Enter How many hours Employee - "+no+" Worked this week ?\n Note: If you want to stop/exit please enter '-1'");
	    //alert (parseInt(hour));
	    if (hour == null)
	    {
		    
	    	alert("Please Enter '-1' to exit !!!");
		   // result = true;
		   // break;
		}else if (hour == "")
		{
			alert("Please Enter Number of hours Employee work in this week !!!");
			result = false;
		} else if (isNaN(parseInt(hour)))
		{
			alert("Please Enter only Integers !!!");
			result = false;
		}else if (parseInt(hour) == 0)
		{
			var sure = confirm("Are you sure employee works for '0' hours !!!");
			if (sure == false)
				result = false;
			
		} else if (parseInt(hour) <= -2 || parseInt(hour) > 120)
		{
			alert("Please Enter Number of hours Employee work in this week between (1 to 120)!!!");
			result = false;
		}

	
	    if (parseInt(hour) == -1)
 		{
	 		//alert(EmpNo);
	 		if (parseInt(EmpNo) == 0)
	 		{
 				var decide = confirm("You didnt add any employee work details, Sure do you want to exit");
 				if (decide == true)
	 				result = true;
 				else 
	 				result = false;
	 		}
	 		else
	 		{
	 			var s = confirm("You added only "+no+" Employee working hours, Sure do you want to exit !! ");
	 			if (s == true)
	 			{
		 			result = true;
		 			break;
	 			}
	 			else
		 			result = false;
	 				
		 	}
 		}else if (parseInt(hour) > 0 && parseInt(hour) <= 120)
		{
			//alert(parseInt(hour));
			var employeePay = 0;
			//alert(employeePay);

			if (parseInt(hour) <= 40)
			{
				employeePay = parseInt(hour) * 15;
			}
			else{
				employeePay = 40 * 15;
				
				var extra = parseInt(hour) - 40;

				if (extra > 0)
				{
					employeePay = employeePay + parseInt(hour) * 22.5;
				}
			}
			hours[EmpNo] = parseInt(hour);
			pay[EmpNo] = employeePay;
			//alert(employeePay);
			EmpNo = EmpNo + 1;
			result = false;
		}	  
	}
	
	document.write("<a href=partb.php>PART - B</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href=partc.php>PART - C</a>");
	document.write("");
	
	document.write("<h1> Employees Payroll Report</h1>");
	document.body.style.background = "gray";
	document.write("<label id=msg></label>");
	
	var total = 0.0;
	if (EmpNo != 0)
	{
		document.write("<table id=Emptable>");
		document.write("<tr><th class=b>Employee No.</th><th class=b>No.Of Hours Worked</th><th class=b>Earnings</th></tr>");
  
		for (var i=0; i<EmpNo; i++) {
			document.write("<tr><td class=b>"+(i+1)+"</td>");
			document.write("<td class=b>" + hours[i] + "</td>");
			document.write("<td class=b> $" + pay[i] + "</td></tr>");
			total = total + parseFloat(pay[i]);
		}
		document.write("<tr><td class=b></td><td class=b> Total Payment/Week : </td><td class=b>$"+total+"</td></tr>");
		document.write("</table>");
		document.getElementById("msg").innerHTML="";
		document.getElementById("Emptable").style.color = "black";
		document.getElementById("Emptable").style.textAlign = "center";
		document.getElementById("Emptable").style.border = "1px solid black";
		document.getElementsByClassName("b").style.border = "1px solid black";
	}
	else{
			document.getElementById("msg").innerHTML = "No Employees work details are available to display";
	}	
}

var randomNumber = 0;
var NoOfGuess = 1;

function generateRandom(){
	var MIN = 1;
	var MAX = 100;

	randomNumber = Math.floor((Math.random() * 100) + 1);
	document.getElementById("guessNumber").focus();
}
function goodguess(guess){
	if (guess == randomNumber)
		return true;
	else 
		return false;
}

function higherLower(guess){
	if (randomNumber != guess)
	{
		if (guess > randomNumber)
			return "higher";
		else if (guess < randomNumber);
			return "lower"; 	
	}
}

function Sure(){
	var decide = confirm("Sure do you want to EXIT the game ?");
		if (decide == true)
			window.location.reload();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function checkGuess(){
	//alert(randomNumber);
	play();
	startTime();
	var totalGuess = 10;
	var guess = document.getElementById("guessNumber").value;
	if (NoOfGuess <= totalGuess)
	{
		if (guess.length == 0)
		{
			var tag = "th";
			if (NoOfGuess == 1)
				tag = "st";
			else if (NoOfGuess == 2)
				tag = "nd";
			else if (NoOfGuess == 3)
				tag = "rd";
			
			//alert("Please Enter Your "+NoOfGuess+tag+" Guessing number !!!!");
			  document.getElementById("resultLabel").style.color = "blue";
			  document.getElementById("resultLabel").innerHTML = "Please Enter Your "+NoOfGuess+tag+" Guessing number !!!!";
			  document.getElementById("guessNumber").value = "";
			  document.getElementById("guessNumber").focus();
			  stop();
			  startTime();
		}
		else if (isNaN(parseInt(guess)) || parseInt(guess) < 1 || parseInt(guess) > 100)
		{
			//alert("Please Enter only number between 1 to 100");	
			document.getElementById("resultLabel").style.color = "blue";
			document.getElementById("resultLabel").innerHTML = "Please Enter only number between 1 to 100";	
			document.getElementById("guessNumber").value = "";
			document.getElementById("guessNumber").focus();	
			stop();
			startTime();
		}
		else
		{
	 		guess = Math.floor(guess);
			if (higherLower(guess) == "higher") {
			  //alert("!!!!  Turn - "+NoOfGuess+" !!!!\n"+guess+" is bigger then the actual number, So please try again !!!");
			  document.getElementById("resultLabel").style.color = "blue";
			  document.getElementById("resultLabel").innerHTML = "!!!!  Turn - "+NoOfGuess+" !!!!<br/>"+guess+" is bigger then the actual number, So please try again !!! <br/> YOU HAVE "+(totalGuess - NoOfGuess)+" MORE TURN TO GUESS SECRET NUMBER";
			  NoOfGuess = NoOfGuess + 1;
			  document.getElementById("guessNumber").value = "";
			  document.getElementById("guessNumber").focus();	
			  
			 } else if (higherLower(guess) == "lower") {
				//alert("!!!!  Turn - "+NoOfGuess+" !!!!\n"+guess+" is lower then the actual number, So please try again !!!");
				  document.getElementById("resultLabel").style.color = "blue";
				  document.getElementById("resultLabel").innerHTML = "!!!!  Turn - "+NoOfGuess+" !!!!<br/>"+guess+" is lower then the actual number, So please try again !!!<br/> YOU HAVE "+(totalGuess - NoOfGuess)+" MORE TURN TO GUESS SECRET NUMBER";
				NoOfGuess = NoOfGuess + 1;
				document.getElementById("guessNumber").value = "";
				document.getElementById("guessNumber").focus();	
			  } else if (goodguess(guess)){
				//  alert("!!!!  On Turn - "+NoOfGuess+" you got it !!!!\nSucess !!! Your guess is correct");
				//  alert("Game is over now, New game will start !!");
			
				  document.getElementById("resultLabel").style.color = "blue";
				  document.getElementById("resultLabel").innerHTML = "!!!!  On Turn - "+NoOfGuess+" you got it !!!!<br/>Congraulations !!!!"+guess+" is the SECRET NUMBER <br/>Game is over now, New game will start, START GUESSING !!";

				  document.getElementById("time").innerHTML = "";
				  document.getElementById("guessNumber").value = "";
				  document.getElementById("time").innerHTML = "";
			      document.getElementById("guessNumber").focus();
			      
			      document.getElementById("time").innerHTML="";
				  NoOfGuess = 1;
				  generateRandom();
				  stop();
				  	 
			  }	  
		}
	}
	else
	{
		document.getElementById("resultLabel").style.color = "red";
	    document.getElementById("resultLabel").innerHTML = "Sorry.. You have excced total number of guesses.<br/>!!! YOU LOST THE GAME !!! <br/>n Secret Number was : "+randomNumber+"<br/> Will Start the NEW GAME";
	    document.getElementById("guessNumber").value = "";
	    document.getElementById("time").innerHTML = "";
		document.getElementById("guessNumber").focus();	
		NoOfGuess = 1;
		generateRandom();
	    stop();
	}
}

function play() {
    document.getElementById('audio1').play();
   // play();
}

function stop() {
    document.getElementById('audio1').pause();
   // play();
}

function checkGameDetails(){
	var choice = document.getElementById("choice");
	var level = document.getElementById("level");
	
	var dropdown = document.getElementById('gender');
    var dropdown1 = document.getElementById('race');
    
    var cmsg = document.getElementById("choiceMsg");
    var lmsg = document.getElementById("levelMsg");
    
    if (choice.selectedIndex == 0) {
    	cmsg.innerHTML = "Please Choice No. Of Pictures";
    	lmsg.innerHTML = "";
    	choice.focus();
    	return false;
    } else if (level.selectedIndex == 0) {
    	lmsg.innerHTML = "Please Select Game Level";
    	cmsg.innerHTML = "";
    	level.focus();
    	return false;
    } else{
    	lmsg.innerHTML = "";
    	cmsg.innerHTML = "";
    	return true;
    }
}

var memory_image_array = [];
var display_image_array = [];
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var display_tile_values=[];
var tiles_flipped = 0;
var display_game_type = "";
var choice = '';
var level = '';
var counter = 0;
var index = 0;

function setup(choice1, level1){
	choice = choice1;
	level = level1;
	//alert(choice1);
	if (choice == '4'){
		memory_image_array =new Array("fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png",
				              "fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png");

		display_image_array =new Array("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",
	            "9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png");

		display_game_type = "8 Pictures Matching";

	} else if (choice == '5'){
		memory_image_array =new Array("b.png","g.png","fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png",
				              "b.png","g.png","fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png");

		display_image_array =new Array("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",
	            "9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png");

		display_game_type = "10 Pictures Matching";

	}else if (choice == '6'){
		memory_image_array =new Array("s.png","c.png","b.png","g.png","fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png",
				  "s.png","c.png","b.png","g.png","fa.png","f.png","h.png","i.png","su.png","r.png","a.png","d.png");

		display_image_array =new Array("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",
	            "9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png", "21.png", "22.png", "23.png", "24.png");

		display_game_type = "12 Pictures Matching";
	}


	if (level == 'e') display_game_type += " - EASY LEVEL";
	if (level == 'm') display_game_type += " - MEDIUM LEVEL";
	if (level == 'd') display_game_type += " - DIFFCULT LEVEL";
	
	newBoard();
	document.getElementById('gameTypeDisplay').innerHTML = display_game_type
}



Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';

	memory_image_array.memory_tile_shuffle();
	for(var i = 0; i < memory_image_array.length; i++){
		var image_source = "images/"+memory_image_array[i];
		var display_image = "images/"+display_image_array[i];
		var string = "url("+display_image+")";
		output += '<div id="tile_'+i+'" style="background-image:'+string+'; background-repeat: no-repeat; width:70px; height:70px;background-size: 100%;" onclick="memoryFlipTile(this,\''+display_image+'\',\''+image_source+'\')" ></div>';	
	}
	document.getElementById('memory_board').innerHTML = output;
	
	if (choice == '4') document.getElementById('memory_board').style.height = "400px";
	if (choice == '5') document.getElementById('memory_board').style.height = "500px";
	if (choice == '6') document.getElementById('memory_board').style.height = "600px";

	for(var i = 0; i < memory_image_array.length; i++){
		var divId = "tile_"+i;
		document.getElementById(divId).disabled = true;
	}
}

function memoryFlipTile(tile,dis,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		//tile.innerHTML = val;
		var string = "url("+val+")";
		tile.style.backgroundImage = string;
		tile.style.backgroundRepeat = "no-repeat";
		tile.style.width = '70px';
		tile.style.height = '70px';
		tile.style.backgroundSize = "100%";
		//tile.style.background-image ='url(val)';
		if(memory_values.length == 0){
			display_tile_values.push(dis);
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			display_tile_values.push(dis);
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
            	display_tile_values = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_image_array.length){
					alert("Board cleared... generating new board");
					span = document.getElementById("count");
		            var timeDisplay = "";
		            counter = -1;
		            if (choice == '4') timeDisplay = "02:00";
		     	    if (choice == '5') timeDisplay = "02:30";
		     	    if (choice == '6') timeDisplay = "03:00";
		     	    span.innerHTML = timeDisplay;
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
					var dis1 = display_tile_values[0];
					var dis2 = display_tile_values[1];
				    var string1 = "url("+dis1+")";
				    var string2 = "url("+dis2+")";
				    tile_1.style.background = string1;
				    tile_1.style.backgroundRepeat = "no-repeat";
				    tile_1.style.backgroundSize = "100%";
            	    tile_1.innerHTML = "";
				    tile_2.style.background = string2;
				    tile_2.style.backgroundRepeat = "no-repeat";
				    tile_2.style.backgroundSize = "100%";
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
            	    display_tile_values=[];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}


function displayData(choice1, level1){
	newBoard();
	choice = choice1;
	level = level1;
	//alert(memory_image_array.length);
	//alert(choice+"-"+level);
	for(var i = 0; i < memory_image_array.length; i++){
		var image_source = "images/"+memory_image_array[i];
		//alert(image_source);
		
		var divID = "tile_"+i;
		document.getElementById(divID).style.background = '#FFF';
		//tile.innerHTML = val;
		var string = "url("+image_source+")";
		document.getElementById(divID).style.backgroundImage = string;
		document.getElementById(divID).style.backgroundRepeat = "no-repeat";
		document.getElementById(divID).style.width = '70px';
		document.getElementById(divID).style.height = '70px';
		document.getElementById(divID).style.backgroundSize = "100%";
	}

	
	index = 0;
	counter = 0;
	counter1 = 0;
	
	if (level == 'e') counter1 = 8000;
	if (level == 'm') counter1 = 5000;
	if (level == 'd') counter1 = 3000;
	   
	wait(counter1);
	
}

function wait(milliseconds){
	alert("Memorize the Image positions");
    setTimeout(function () {
    	setTimeout("changeImage()", 1000);
    }, milliseconds);
}

function changeImage()
{
 
   var len = 0;
   if (choice == '4') len = 16;
   if (choice == '5') len = 20;
   if (choice == '6') len = 24;

   var timeer = 0;
	if (level == 'e') timeer = 8000;
	if (level == 'm') timeer = 5000;
	if (level == 'd') timeer = 3000;
	
    var display_image = "images/"+display_image_array[index];
    var divID = "tile_"+index;
    index = index + 1;
    
	var string = "url("+display_image+")";
	document.getElementById(divID).style.backgroundImage = string;
	document.getElementById(divID).style.backgroundRepeat = "no-repeat";
	document.getElementById(divID).style.backgroundSize = "100%";
 
   if(index >= len){
	   alert("Your Time Starts now !!! ");
	   if (choice == '4') counter = 120;
	   if (choice == '5') counter = 150;
	   if (choice == '6') counter = 180;
	   //alert("Your Time Starts now !!! ");
	    setInterval(function () {
	        counter--;
	        if (counter >= 0) {
	            span = document.getElementById("count");
	            var time =new Date(counter*1000);
	            var m = time.getMinutes();
	            m = m<10?'0'+m:m;
	            var s = time.getSeconds();
	            span.innerHTML = m+':'+s;
	        }
	        if (counter === 0) {
	        	alert('Sorry, Your time over !! Click READY button is startover a new game !!!');
	            newBoard();
	            span = document.getElementById("count");
	            var timeDisplay = "";
	            if (choice == '4') timeDisplay = "02:00";
	     	    if (choice == '5') timeDisplay = "02:30";
	     	    if (choice == '6') timeDisplay = "03:00";
	     	    span.innerHTML = timeDisplay;
	            clearInterval(counter);
	           // index = 0;
	        }
	        if (counter === -1){
		        counter = 0;
		        //index = 0;
		        }
	    }, 1000);  
   } 

  // fadeImg(img, 100, true);
   setTimeout("changeImage()", 1000);
}

