//asks player wether he wants rock paper or scissors
var player = prompt("Rock, paper, or scissors?");
var roll = Math.random();
var result;
var player2Hands = document.getElementById("player2");
var player2Labels = document.getElementById("player2label");
var player1Labels = document.getElementById("player1label");
var player1Hands = document.getElementById("player1");
var player2win;


/*
//a, s, and d mapped out to mean r, p and s
$(document).ready(function() {
  $(document).bind('keydown', function(e){
    if(e.keyCode == 65){
      player = "rock";
    }
    $(document).bind('keydown', function(e){
      if(e.keyCode == 83){
        player = "paper";
      }
      $(document).bind('keydown', function(e){
        if(e.keyCode == 68){
          player = "scissors";
        }
      });
    });
  });
});
*/

player = player.toLowerCase();

//changes for player text to identify whether he used r, p, or s
if (player == "rock"){
  player1Hands.className = "hands";
  player1Hands.innerHTML = "<i class=\"fa fa-hand-rock-o\"></i>";
  player1Labels.className = "label";
  player1Labels.innerHTML = "Rock";
}
else if(player == "paper"){
  player1Hands.className = "hands";
  player1Hands.innerHTML = "<i class=\"fa fa-hand-paper-o\"></i>";
  player1Labels.className = "label";
  player1Labels.innerHTML = "Paper";
}
else if (player == "scissors"){
  player1Hands.className = "hands";
  player1Hands.innerHTML = "<i class=\"fa fa-hand-scissors-o\"></i>";
  player1Labels.className = "label";
  player1Labels.innerHTML = "Scissors";
}

//identification of computer choice and changes to the dom to reflect that
  if (roll <= 0.33)
  {
    roll = "rock";
    player2Labels.className = "label";
    player2Labels.innerHTML = "Rock";
    player2Hands.className = "hands";
    player2Hands.innerHTML = "<i class=\"fa fa-hand-rock-o\"></i>";
  }
  else if (roll <= 0.66 && roll > 0.33) {
    roll = "paper";
    player2Labels.className = "label";
    player2Labels.innerHTML = "Paper";
    player2Hands.className = "hands";
    player2Hands.innerHTML = "<i class=\"fa fa-hand-paper-o\"></i>";
  }
  else {
    roll = "scissors";
    player2Labels.className = "label";
    player2Labels.innerHTML = "Scissors";
    player2Hands.className = "hands";
    player2Hands.innerHTML = "<i class=\"fa fa-hand-scissors-o\"></i>";
    }

var winners = function(results1, results2){
  if(results1 === results2){
      window.result = "Draw";
      document.getElementById("message").style.color = "#4d0026";
      document.getElementById("message").innerHTML = "Draw!";
  }
  else if (results1 === "rock") {
    if(results2 === "paper"){
        window.result = "Lost";
        document.getElementById("message").style.color = "#ff3300";
        document.getElementById("message").innerHTML = "You lost!";
        player2win = true;
    }
    else {
      window.result = "Win";
      document.getElementById("message").style.color = "#00e600";
    }
  }
  else if (results1 === "paper") {
      if (results2 === "scissors") {
          window.result = "Lost";
          document.getElementById("message").style.color = "#ff3300";
          document.getElementById("message").innerHTML = "You lost!";
          player2win = true;
      }
      else {
          window.result = "Win";
          document.getElementById("message").style.color = "#00e600";
      }
    }
    else if (results1 === "scissors") {
      if (results2 === "rock") {
          window.result = "Lost";
          document.getElementById("message").style.color = "#ff3300";
          document.getElementById("message").innerHTML = "You lost!";
          player2win = true;
      }
      else {
          window.result = "Win";
          document.getElementById("message").style.color = "#00e600";
      }

    }
  }

/*
  if (player2win = true)
  {
    var player2El = document.getElementsByClassName("player2textthings");

    for(var i = 0; player2El.length; i++)
    {
      player2El[i].className = "winnerColor";
    }
  }
*/


function replay(){
    location.reload();
}


winners(player, roll);

console.log(player);
console.log(roll);
console.log(result);
