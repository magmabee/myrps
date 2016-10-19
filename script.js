var player = prompt("Rock, paper, or scissors?");
var player = player.toLowerCase();
var roll = Math.random();
var result;
var player2LabelID = document.getElementById("player2label")

//identification of computer choice and changes to the dom to reflect that
if (roll <= 0.33)
{
  roll = "rock";
  player2LabelID.innerHTML = "Rock";
  document.getElementById("player2").innerHTML = "<i class=\"fa fa-hand-rock-o\" style=\"font-size:196px;\"></i>";
}
else if (roll <= 0.66 && roll > 0.33) {
  roll = "paper";
  player2LabelID.innerHTML = "Paper";
  document.getElementById("player2").innerHTML = "<i class=\"fa fa-hand-paper-o\" style=\"font-size:196px;\"></i>";
}
else {
  roll = "scissors";
  player2LabelID.innerHTML = "Scissors";
  document.getElementById("player2").innerHTML = "<i class=\"fa fa-hand-scissors-o\" style=\"font-size:196px;\"></i>";
  }

/*changes for player text to identify whether he used r, p, or s
if (player = "rock")
{
  document.getElementById("player1label").innerHTML = "Rock";
}
else if(player = "paper"){
  document.getElementById("player1label").innerHTML = "Paper";
}
else{
  document.getElementById("player1label").innerHTML = "Scissors";
}
*/

var winners = function(results1, results2){
  if(results1 === results2){
      window.result = "Draw";
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


winners(player, roll);

console.log(player);
console.log(roll);
console.log(result);
