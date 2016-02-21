////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput()
 {    
    var move = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
   
    return move;
    
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }

}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   // var move; // Write an expression that operates on a variable called `move`
    
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal     `getInput()`.
    if (move === undefined || move ===  null) {
          move = getInput();
          return move;
         }
     else {
        return move;
          }

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    //var move;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     if (move=== undefined || move=== null)
     {
       move = randomPlay();
       return move;
     }
     else{
           document.getElementById("demo1").innerHTML=  move;
           return move;
     }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if (playerMove=="rock" && computerMove=="rock"){    
            winner = "tie";
        }else if (playerMove=="rock" && computerMove=="paper") {
                winner ="computer";
        }else if(playerMove== "rock" && computerMove=="scissors"){
                winner ="player";
        }
    
    if (playerMove=="paper" && computerMove=="paper"){    
            winner = "tie";
        }else if (playerMove=="paper" && computerMove=="scissors") {
                winner ="computer";
        }else if(playerMove== "paper" && computerMove=="rock"){
                winner ="player";
        }
    
    if (playerMove=="scissors" && computerMove=="scissors"){    
            winner = "tie";
        }else if (playerMove==" scissors" && computerMove=="rock") {
                winner ="computer";
        }else if(playerMove== "scissors" && computerMove=="paper"){
                winner ="player";
        }
    
    return winner;

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    
    while(computerWins < 5 && playerWins < 5)
    {    
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
    
      console.log('Player choose ' + playerMove + ' while Computer choose ' + computerMove);

      var winner = getWinner(playerMove, computerMove);
      
        if (winner=== "computer")
        { 
            computerWins = computerWins + 1 ;
            console.log("The move is of " + winner + "and is playing" + computerMove);
        } 
        else if (winner === "player"){
            
            playerWins = playerWins + 1;
            console.log("The move is of " + winner + "and is playing" + playerMove);
        } 
        else{
            console.log("Move is tie.");
        }
        
        console.log('The score of player is ' + playerWins + ' and computer is ' + computerWins + '\n');
        
    }
    return [playerWins, computerWins];
    
    
     // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  
  /* YOUR CODE HERE */


}

 //playToFive();