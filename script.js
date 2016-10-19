var player = prompt("Rock, paper, or scissors?");
var player = player.toLowerCase();
var roll = Math.random();
var result;
var player2Hands = document.getElementById("player2");

//identification of computer choice and changes to the dom to reflect that
if (roll <= 0.33)
{
  roll = "rock";
  document.getElementById("player2label").innerHTML = "<span class='p.label'>Rock</span>";
  player2Hands.className = "hands";
  player2Hands.innerHTML = "<i class=\"fa fa-hand-rock-o\"></i>";
}
else if (roll <= 0.66 && roll > 0.33) {
  roll = "paper";
  document.getElementById("player2label").innerHTML = "<span class='p.label'>Paper</span>";
  player2Hands.className = "hands";
  player2Hands.innerHTML = "<i class=\"fa fa-hand-paper-o\"></i>";
}
else {
  roll = "scissors";
  document.getElementById("player2label").innerHTML = "<span class='p.label'>Scissors</span>";
  player2Hands.className = "hands";
  player2Hands.innerHTML = "<i class=\"fa fa-hand-scissors-o\"></i>";
  }

/*changes for player text to identify whether he used r, p, or s
if (player = "rock")
{
  document.getElementById("player1label").innerHTML = "Rock";
}
else if(player = "paper"){
  document.getElementById("player1label").innerHTML = "Paper";
}
else if (player = "scissors"){
  document.getElementById("player1label").innerHTML = "Scissors";
}
*/

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
      }
      else {
          window.result = "Win";
          document.getElementById("message").style.color = "#00e600";
      }

    }
  }

function replay(){
    location.reload();
}

winners(player, roll);

console.log(player);
console.log(roll);
console.log(result);
