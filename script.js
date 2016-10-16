var player = prompt("Rock, paper, or scissors?");
var player = player.toLowerCase();
var roll = Math.random();
var result;

if (roll <= 0.33)
{
  roll = "rock";
}
else if (roll <= 0.66 && roll > 0.33) {
  roll = "paper";
}
else {
  roll = "scissors";
  }

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
