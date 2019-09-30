var moves = 0;
var table; 
var rows; 
var columns;
var textMoves;
var arrayForBoard;
var display_image_array;
var change_copy_image;

var timer_is_on = 0;

var totalSeconds = 0;
var tt;

var gameImage;
var gameSize;

function start()
{
  var button = document.getElementById("newGame");
  button.addEventListener( "click", startNewGame, false );

  var button1 = document.getElementById("loadGame");
  button1.addEventListener( "click", loadGame, false );
 
  document.getElementById('hiddenDiv').style.visibility = "hidden"; 
  document.getElementById('Gametime').style.visibility = "hidden"; 
}

function loadGame(){
    document.getElementById('timeElapsed').innerHTML = "0 Seconds"; 
    stopCount();
   gameImage = document.getElementById('SPI').value;
    gameSize = parseInt(document.getElementById('SPS').value); 
    if (gameImage == "0"){
        alert("Please Select Image for the PUZZLE !!");
        document.getElementById('SPI').focus();
        return false;
    } else if (gameSize == "0"){
        alert("Please Select Size for the PUZZLE !!");
        document.getElementById('SPS').focus();
        return false;
    }else {
        textMoves = document.getElementById("moves");
        table = document.getElementById("table");

        rows = gameSize;
        columns = gameSize;

        var number = 0;
        var arrayNumbers = 1;

        display_image_array =new Array(rows*columns);
        var arrayOfNumbers = new Array(rows*columns);
        //alert(display_image_array.length);

        for (var i=0; i<gameSize;i++){
            for (var j=0; j<gameSize;j++){
                if (i == (gameSize-1) && j == (gameSize-1))
                {
                    display_image_array[number] = "0";
                    arrayOfNumbers[number] = 0;
                }
                else
                {
                    display_image_array[number] = gameSize+"_"+i+""+j+".png";
                    arrayOfNumbers[number] = arrayNumbers;
                }
                number = number + 1;
                arrayNumbers = arrayNumbers + 1;
            }
        }
    
        change_copy_image = new Array(rows*columns);   
        change_copy_image = display_image_array;
  
        var count = 0;
        moves = 0;
        document.getElementById("rows").value = gameSize;
        document.getElementById("columns").value = gameSize;

        textMoves.innerHTML = moves;

        arrayForBoard = new Array(gameSize);
        for (var i = 0; i < rows; i++)
        {
           arrayForBoard[i] = new Array(gameSize);
        } 
   
        count = 0;
        for (var i = 0; i < gameSize; i++)
        {
            for (var j = 0; j < gameSize; j++)
            {
              arrayForBoard[i][j] = arrayOfNumbers[count];

              count++;
            }
        }
        showTable();
        document.getElementById('hiddenDiv').style.visibility = "visible"; 
        document.getElementById('Gametime').style.visibility = "visible"; 
    }
}
function pageLoadsStart()
{
   // alert ("start");
    
    var e = document.getElementById('SPI');
  gameImage = e.options[e.selectedIndex].value;
    
  e = document.getElementById('SPS');
  gameSize = e.options[e.selectedIndex].value;    
 // gameImage = document.getElementById('SPI').    
    
  textMoves = document.getElementById("moves");
  table = document.getElementById("table");
  
  rows = gameSize;
  columns = gameSize;
    
    var number = 0;
    var arrayNumbers = 1;
    display_image_array =new Array(gameSize*gameSize);
    var arrayOfNumbers = new Array(gameSize*gameSize);
    
    for (var i=0; i<gameSize;i++){
        for (var j=0; j<gameSize;j++){
            if (i == (gameSize-1) && j == (gameSize-1))
            {
                display_image_array[number] = "0";
                arrayOfNumbers[number] = 0;
            }
            else
            {
                display_image_array[number] = gameSize+"_"+i+""+j+".png";
                arrayOfNumbers[number] = arrayNumbers;
            }
            number = number + 1;
            arrayNumbers = arrayNumbers + 1;
        }
    }
    
    change_copy_image = new Array(gameSize*gameSize);   
    change_copy_image = display_image_array;
    
    var count = 0;
    moves = 0;
    document.getElementById("rows").value = gameSize;
    document.getElementById("columns").value = gameSize;
    
    textMoves.innerHTML = moves;
    
    arrayForBoard = new Array(gameSize);
    for (var i = 0; i < rows; i++)
    {
       arrayForBoard[i] = new Array(gameSize);
    } 
    
    
  count = 0;
  for (var i = 0; i < gameSize; i++)
  {
    for (var j = 0; j < gameSize; j++)
    {
      arrayForBoard[i][j] = arrayOfNumbers[count];
 
      count++;
    }
  }
    
    showTable();
}

function startNewGame()
{
  change_copy_image = new Array(gameSize*gameSize);    
  var arrayOfNumbers = new Array();
  var arrayHasNumberBeenUsed;
  var randomNumber = 0;
  var count = 0;
  moves = 0;
  rows = document.getElementById("rows").value;
  columns = document.getElementById("columns").value;
  textMoves.innerHTML = moves;
    
var number = 0;
display_image_array =new Array(gameSize*gameSize);
for (var i=0; i<gameSize;i++){
    for (var j=0; j<gameSize;j++){
        if (i == 0 && j == 0)
        {
            display_image_array[number] = "";
            number =number + 1;
            display_image_array[number] = gameSize+"_"+i+""+j+".png";
        }
        else
        {
            if ((i !==(gameSize-1)) || (j !==(gameSize-1)))
                display_image_array[number] = gameSize+"_"+i+""+j+".png";
        }
        number = number + 1;
    }
}
    
  // Create the proper board size.
  arrayForBoard = new Array(gameSize);
  for (var i = 0; i < gameSize; i++)
  {
    arrayForBoard[i] = new Array(gameSize);
  }
  // Set up a temporary array for
  // allocating unique numbers.
  arrayHasNumberBeenUsed = new Array( gameSize * gameSize );
  for (var i = 0; i < rows * columns; i++)
  {
    arrayHasNumberBeenUsed[i] = 0;
  }
 
  // Assign random numbers to the board.
  for (var i = 0; i < rows * columns; i++)
  {
    randomNumber = Math.floor(Math.random()*gameSize * gameSize);
    // If our random numer is unique, add it to the board.
    if (arrayHasNumberBeenUsed[randomNumber] == 0) 
    {
      arrayHasNumberBeenUsed[randomNumber] = 1;
      arrayOfNumbers.push(randomNumber);
    }
    else // Our number is not unique. Try again.
    {
      i--;
    }
  }
  
  // Assign numbers to the game board.
  count = 0;
    var image_index = 0;
  for (var i = 0; i < rows; i++)
  {
    for (var j = 0; j < columns; j++)
    {
      arrayForBoard[i][j] = arrayOfNumbers[count];
      
      var indx = arrayOfNumbers[count];
      
      change_copy_image[image_index] = display_image_array[indx]; 
        
      count++;
      image_index++;
        
    }
  }
 
  var duplicate_array = change_copy_image;
    if (checkSolvable(arrayOfNumbers))
    {
        totalSeconds = 0;
        startCount();
        showTable();
    }
    else 
        startNewGame();  
    //showTable();
    
}

function showTable()
{
  var outputString = "";
  for (var i = 0; i < rows; i++)
  {
    outputString += "<tr>";
    for (var j = 0; j < columns; j++)
    {
      if (arrayForBoard[i][j] == 0)
      {
	       outputString += "<td class=\"blank\"> </td>";
      }
      else
      {
         var idx = getPosition(i,j); 
         var display_image = "images/"+gameImage+"/"+change_copy_image[idx];
         var string = "";
         string = "url("+display_image+")";
          var id = i+""+j;
	outputString += "<td id="+id+" class=\"tile\" style=\"background-image:"+string+"; background-repeat: no-repeat;background-size:100% 100%;\"  onclick=\"moveThisTile(" + i + ", " + j + ")\" onmouseout=\"change_back_style("+i+","+j+")\"  onmouseover = \"change_style("+i+","+j+")\">"+arrayForBoard[i][j]+"</td>";
      }
    } // end for (var j = 0; j < columns; j++)
    outputString += "</tr>";
      
  } // end for (var i = 0; i < rows; i++)
  document.getElementById('hideLabel').innerHTML=change_copy_image;
    table.style.width = gameSize*100+".px";
    table.style.height = gameSize*100+".px";
    table.style.backgroundSize="100% 100%";
  table.innerHTML = outputString;
}

function change_style(tableRow, tableColumn){
    var id = tableRow+""+tableColumn;
    if (checkIfMoveable_changeStyle(tableRow, tableColumn, "up") ||
      checkIfMoveable_changeStyle(tableRow, tableColumn, "down") ||
      checkIfMoveable_changeStyle(tableRow, tableColumn, "left") ||
      checkIfMoveable_changeStyle(tableRow, tableColumn, "right") )
  {
     document.getElementById(id).style.borderColor="red";
    document.getElementById(id).style.textDecoration="underline";
    document.getElementById(id).style.color="#006600";
      
      document.getElementById(id).style.animationName = "blinker";
      document.getElementById(id).style.animationDuration = "5s";
      document.getElementById(id).style.animationTimingFunction = "linear";
      document.getElementById(id).style.animationIterationCount="infinite";
  }
    else{
         document.getElementById(id).style.borderColor="black";
    document.getElementById(id).style.textDecoration="none";
    document.getElementById(id).style.color="black";
    }
}

function change_back_style(tableRow, tableColumn){
    var id = tableRow+""+tableColumn;
   document.getElementById(id).style.borderColor="black";
    document.getElementById(id).style.textDecoration="none";
    document.getElementById(id).style.color="black";
}

function checkIfMoveable_changeStyle(rowCoordinate, columnCoordinate, direction)
{
  // The following variables an if else statements
  // make the function work for all directions.
  var change_position_index = getPosition(rowCoordinate, columnCoordinate);
  rowOffset = 0;
  columnOffset = 0;
    
  var new_image_index = 0;
    
  if (direction == "up")
  {
    rowOffset = -1;
    new_image_index = change_position_index - gameSize;  
  }
  else if (direction == "down")
  {
    rowOffset = 1;
    new_image_index = change_position_index + gameSize; 
  }
  else if (direction == "left")
  {
    columnOffset = -1;
    new_image_index = change_position_index - 1;
  }
  else if (direction == "right")
  {
    columnOffset = 1;
    new_image_index = change_position_index + 1;
  }  
  
    
  // Check if the tile can be moved to the spot.
  // If it can, move it and return true.
  if (rowCoordinate + rowOffset >= 0 && columnCoordinate + columnOffset >= 0 &&
    rowCoordinate + rowOffset < rows && columnCoordinate + columnOffset < columns)
  {
    if ( arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] == 0)
    {
        return true;
    }
  }
}

function moveThisTile(tableRow, tableColumn)
{
    var str = document.getElementById('hideLabel').innerHTML;
    var res = str.split(",");
    change_copy_image = res;
    
  if (checkIfMoveable(tableRow, tableColumn, "up") ||
      checkIfMoveable(tableRow, tableColumn, "down") ||
      checkIfMoveable(tableRow, tableColumn, "left") ||
      checkIfMoveable(tableRow, tableColumn, "right") )
  {
    incrementMoves();
  }
  else
  {
    alert("ERROR: Cannot move tile!\nTile must be next to a blank space.");
  }
    
  if (checkIfWinner())
  {
    alert("Congratulations! You solved the puzzle in " + moves + " moves and with "+totalSeconds+" Seconds");
      stopCount();
    startNewGame();
  }
}

function getPosition(x, y){
    var index = 0;
   // alert("("+x+"=="+rows+") && ("+y+"=="+columns+")");
    var nbox = 0;
    for (var i = 0; i < rows; i++)
    {
       for (var j = 0; j < rows; j++)
       {
          // alert("("+x+"=="+i+") && ("+y+"=="+j+")");
           if ((x==i) && (y==j))
           {
              // alert(nbox);
               return nbox;
           }
           nbox = nbox + 1;
       } 
    }
}

function checkIfMoveable(rowCoordinate, columnCoordinate, direction)
{
  // The following variables an if else statements
  // make the function work for all directions.
  var change_position_index = getPosition(rowCoordinate, columnCoordinate);
  rowOffset = 0;
  columnOffset = 0;
    
  var new_image_index = 0;
  if (direction == "up")
  {
    rowOffset = -1;
    new_image_index = change_position_index - (gameSize);  
  }
  else if (direction == "down")
  {
    rowOffset = 1;
    new_image_index = change_position_index + (gameSize); 
  }
  else if (direction == "left")
  {
    columnOffset = -1;
    new_image_index = change_position_index - 1;
  }
  else if (direction == "right")
  {
    columnOffset = 1;
    new_image_index = change_position_index + 1;
  }  
  // Check if the tile can be moved to the spot.
  // If it can, move it and return true.
  if (rowCoordinate + rowOffset >= 0 && columnCoordinate + columnOffset >= 0 &&
    rowCoordinate + rowOffset < rows && columnCoordinate + columnOffset < columns)
  {
    if ( arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] == 0)
    {
      arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset] = arrayForBoard[rowCoordinate][columnCoordinate];
      
     // alert(rowCoordinate+"-"+columnCoordinate+" index "+change_position_index+"-"+new_image_index);
     // if ((change_position_index >= 0 && change_position_index <= (gameSize-1)) && (new_image_index >= 0 //&& new_image_index <= (gameSize-1)))
     // {
         // alert(change_copy_image[change_position_index]+" content "+change_copy_image[new_image_index]);
         
          var temp = change_copy_image[new_image_index];
         // if (change_position_index[new_image_index] == "")
         //   change_copy_image[change_position_index] = "";
         // else 
              change_copy_image[new_image_index] = change_copy_image[change_position_index];
          
          change_copy_image[change_position_index] = temp;
          
       // var temp =   change_copy_image[change_position_index]
          
         // alert(change_copy_image); 
     /// }
     // changeImage(xaxis, yxais, rowCoordinate, columnCoordinate);    
        
      arrayForBoard[rowCoordinate][columnCoordinate] = 0;
      // alert(change_copy_image); 
      showTable();
      return true;
    }
  }
  return false; 
}


//Checking for Solvable puzzle or not
 function checkSolvable(pList){
    //alert("checkSolvable called with : " + pList);
    var inversions = 0;

    for(var i=0; i<pList.length;i++){
        for(var j=i+1; j<pList.length;j++){
            if(pList[j]>pList[i]){
                inversions++;
            }
        }
    }

    if(inversions%2 == 1){
       // alert("It's Unsolvable");
        return false;
    }else{
       // alert("It's Solvable");
        return true;
    }
}
//checking for end of the game notification
function checkIfWinner()
{
  var count = 1;
  for (var i = 0; i < rows; i++)
  {
    for (var j = 0; j < columns; j++)
    {
      if (arrayForBoard[i][j] != count)
      {
	if ( !(count === rows * columns && arrayForBoard[i][j] === 0 ))
	{
	  return false;
	}
      }
      count++;
    }
  }
  
  return true;
}

function timedCount() {
    document.getElementById('timeElapsed').innerHTML = totalSeconds+" Seconds";
    totalSeconds = totalSeconds + 1;
    tt = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    totalSeconds = 0;
    clearTimeout(tt);
    timer_is_on = 0;
    document.getElementById('timeElapsed').innerHTML = "0 Seconds";
}

function incrementMoves()
{
  moves++;
  if (textMoves) // This is nessessary.
  {
    textMoves.innerHTML = moves;
  }
}

window.addEventListener( "load", start, false ); // This event listener makes the function start() execute when the window opens. 