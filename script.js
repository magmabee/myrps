var player = prompt("Rock, paper, or scissors?");
var player = player.toLowerCase();
var roll = Math.random();
var result;

if (roll <= 0.33)
{
  roll = "Rock";
}
else if (roll <= 0.66 && roll > 0.33) {
  roll = "Paper";
}
else {
  roll = "Scissors";
  }

var winners = function(results1, results2){
  if(results1 === results2){
      window.result = "Draw";
  }
  else if (results1 === "rock") {
    if(results2 === "Paper"){
        window.result = "Lost";
    }
    else {
      window.result = "Win";
    }
  }
  else if (results1 === "paper") {
      if (results2 === "Scissors") {
          window.result = "Lost";
      }
      else {
          window.result = "Win";
      }
    }
    else if (results1 === "scissors") {
      if (results2 === "Rock") {
          window.result = "Lost";
      }
      else {
          window.result = "Win";
      }

    }
  }

winners(player, roll);

console.log(player);
console.log(roll);
console.log(result);
