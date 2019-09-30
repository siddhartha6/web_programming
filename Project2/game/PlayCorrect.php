<?php
    session_start();
    $username = "";
    if(isset($_SESSION['username'])){
        $username = $_SESSION['username'];
    }
    else{
      header("location: ../login.php");
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Play Correct!</title>
    <link rel="stylesheet" type="text/css" href="PlayCorrect.css">
    <link rel="stylesheet" type="text/css" href="../stylesheetproject1.css">
</head>
<body>
<table id="mainframe">
    <tr>
        <td>
            <ul>
                <li><a href="../Correct.php">Home</a></li>
                <li><a class="active" href="PlayCorrect.php">Play</a></li>
                <li><a href="../howtoplay.php">How to play</a></li>
                <li class="liclass"> <a href="#">GitHub Repository</a></li>
                <li><a href="../logout.php">Logout</a>
            </ul>
        </td>
    </tr>
    <tr>
        <td><h1>Welcome <?php echo $username; ?></h1></td>
    </tr>
    <?php

        $gameTimer = 120;
        $gridHeight = 3;
        $gridWidth = 4;
        $numberOfCards = $gridHeight * $gridWidth;
        class Card{

            var $face;
            var $match;
            var $flipped;
            var $matched;

            function __construct($face,$match){
                $this->face = $face;
                $this->match = $match;
                $this->flipped = false;
                $this->matched = false;
            }
            function toString(){
                return $this->face . $this->match . $this->flipped . $this->matched ;
            }
        }

        //initialize game if none exists
        if (!isset($_REQUEST["cards"])){

            //create card deck
            $deck = array();
            $letter;
            for($i = 0; $i < $numberOfCards; $i++){
                if(($i % 2) == 0){
                    $letter = "A";
                }else{
                    $letter = "B";
                }
                array_push($deck, new Card("../images/GameDesign/card" . intdiv($i ,2) . $letter .
                    ".png", intdiv($i , 2)));
            }
            shuffle($deck);
            //present new game button and create deck button
           
            echo "
                <tr>
                    <td>
                        <br><br>
                        <form class=\"center\"method=\"post\" action=\"" . '#' . "\">
                            <input type=\"hidden\" name=\"cards\" value=\"" . htmlspecialchars(serialize($deck)) . "\">
                            <input type='hidden' name='firstFlipped' value='-1'>
                            <input type='hidden' name='cardFlipped' value='-1'>
                            <input type=\"submit\" value=\"Play Now!\">
                        </form>
                   </td>
                </tr>
                ";

        //primary game loop
        }else{

            $deck = unserialize($_REQUEST["cards"]);
            $matchMade = 0;
            $firstFlipped = $_REQUEST["firstFlipped"];

            //calculate time remaining
            if(isset($_REQUEST["startTime"])){
                $startTime = $_REQUEST["startTime"];
            }else{
                $startTime = time();
            }
            $timeRemaining = $gameTimer - (time() - $startTime);

            //check for match
            if($_REQUEST["cardFlipped"] != -1){
                if($firstFlipped == -1){
                    $firstFlipped = $_REQUEST["cardFlipped"];
                    $deck[$firstFlipped]->flipped = true;
                }elseif($deck[$firstFlipped]->match == $deck[$_REQUEST["cardFlipped"]]->match){
                    $matchMade = 1;
                    $deck[$firstFlipped]->matched = true;
                    $deck[$_REQUEST["cardFlipped"]]->matched = true;
                    $deck[$_REQUEST["cardFlipped"]]->flipped = true;
                }else{
                    $matchMade = 2;
                    $deck[$_REQUEST["cardFlipped"]]->flipped = true;
                }
            }

            //Calculate score
            $score = 0;
            foreach($deck as $card){
                if($card->matched == true){
                    $score++;
                }
            }

            //display cards
            echo "
                <tr>
                    <td>
                        <div class='row'>
                            <div class='column1'>
                                <table id='cardGrid'>";
            for($i = 0; $i < $gridHeight; $i++){
                echo "          <tr class='center'>";
                for($j = 0; $j < $gridWidth; $j++){
                    if($deck[($i * $gridWidth) + $j]->flipped == true){

                        //apply flip animation for last card flipped
                        if((($i * $gridWidth) + $j) == $_REQUEST["cardFlipped"] ){
                            echo "<td>
                            <div class=\"flipContainer\">
                                <div class=\"flipCard\">
                                       <div class=\"flipFront\">
                                            <img src='../images/GameDesign/backside_of_card.png' class='card'>
                                        </div>
                                        <div class=\"flipBack\">
                                            <img src='" . $deck[(($i * $gridWidth) + $j)]->face ."' class='card'>
                                        </div>
                                    </div>
                                </div>
                            </td>";
                        }else{
                            echo "    <td><img src='" . $deck[(($i * $gridWidth) + $j)]->face ."' class='card'></td>";
                        }
                    }elseif($matchMade == 0){

                        //apply unflip animation to mismatches
                        if(isset($_REQUEST["flipBack1"]) && ($_REQUEST["flipBack1"] == (($i * $gridWidth) + $j) ||
                                (($i * $gridWidth) + $j) == $_REQUEST["flipBack2"])){
                            echo "<td>
                            <div class=\"flipContainer\">
                                <div class=\"flipCard\">
                                       <div class=\"flipFront\">
                                            <img src='" . $deck[(($i * $gridWidth) + $j)]->face ."' class='card'>
                                        </div>
                                        <div class=\"flipBack\">
                                            <form class=\"card\"method=\"post\" action=\"" .
                                                '#' . "\">
                                                <input type=\"hidden\" name=\"cards\" value=\"" . htmlspecialchars(serialize($deck))
                                                 . "\">
                                                 <input type='hidden' name='cardFlipped' value='" . (($i * $gridWidth) + $j) . "'>
                                                <input type='hidden' name='firstFlipped' value='" . $firstFlipped . "'>
                                                <input type='hidden' name='startTime' value='$startTime'>
                                                <input type='image' alt=\"submit\" src='../images/GameDesign/backside_of_card.png'>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </td>";

                        }else{
                            echo "<td><form class=\"card\"method=\"post\" action=\"" .
                                '#'. "\">
                                    <input type=\"hidden\" name=\"cards\" value=\"" . htmlspecialchars(serialize($deck))
                                    . "\">
                                    <input type='hidden' name='cardFlipped' value='" . (($i * $gridWidth) + $j) . "'>
                                    <input type='hidden' name='firstFlipped' value='$firstFlipped'>
                                    <input type='hidden' name='startTime' value='$startTime'>
                                    <input type='image' alt=\"submit\" src='../images/GameDesign/backside_of_card.png'>
                                  </form></td>";
                        }

                    //if match has been attempted, render cards unselectable
                    }else{
                        echo "    <td><img src='../images/GameDesign/backside_of_card.png' class='card'></td>";
                    }
                }
                echo"        </tr>";
            }

            //display time remaining
            echo "              </table>
                            </div>
                            <div class='column2'>
                                <br><br>
                                <h3 class='center'>Time Remaining: $timeRemaining s</h3>";

            //display score
            echo "
                                    <br>
                                    <h2 style='font-family: \"Courier New\"; color: #e84539;' class='center'>Score: $score/$numberOfCards</h2>";

            //check timer
            if($timeRemaining <= 0){
                echo "               <br><br>
                                     <h3 class='center'>You Have Lost!</h3>
                                     <br>
                                     <form class=\"center\" method=\"post\" action=\"" .
                                         '#' . "\">
                                        <input type='submit' value='Play Again'>
                                      </form>";

            //check win condition
            }elseif($score == $numberOfCards){
                echo "               <br><br>
                                     <h3 class='center'>You Have Won!</h3>
                                     <br>
                                     <form class=\"center\" method=\"post\" action=\"" .
                                        '#' . "\">
                                        <input type='submit' value='Play Again'>
                                      </form>";

            //display successful match
            }elseif($matchMade == 1){
                echo "              <br><br>
                                    <p class='center'>You Found a Match!</p>
                                    <br>
                                    <form class='center' method=\"post\" action=\"" .
                                        '#' . "\">
                                        <input type=\"hidden\" name=\"cards\" value=\"" .
                                            htmlspecialchars(serialize($deck)) . "\">
                                        <input type='hidden' name='firstFlipped' value='-1'>
                                        <input type='hidden' name='cardFlipped' value='-1'>
                                        <input type='hidden' name='startTime' value='$startTime'>
                                        <input type='submit' value='Continue'>
                                    </form>";

            //display failed match
            }elseif($matchMade == 2){
                $deck[$_REQUEST["cardFlipped"]]->flipped = false;
                $deck[$firstFlipped]->flipped = false;
                echo "              <br><br>
                                    <p class='center'>These Do Not Match</p>
                                    <br>
                                    <form class='center' method=\"post\" action=\"" .
                                        '#'. "\">
                                        <input type=\"hidden\" name=\"cards\" value=\"" .
                                            htmlspecialchars(serialize($deck)) . "\">
                                        <input type='hidden' name='firstFlipped' value='-1'>
                                        <input type='hidden' name='cardFlipped' value='-1'>
                                        <input type='hidden' name='startTime' value='$startTime'>
                                        <input type='hidden' name='flipBack1' value='$firstFlipped'>
                                        <input type='hidden' name='flipBack2' value='" . $_REQUEST["cardFlipped"] . "'>
                                        <input type='submit' value='Continue'>
                                    </form>";

            //prompt to select a card
            }else{
                echo "              <br><br>
                                    <p class='center'>Select 2 Cards</p>";
            }
        }
    ?>
                </div>
            </div>
        </table>
    </tr>
</table>
</body>
</html>