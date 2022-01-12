document.addEventListener("DOMContentLoaded", function(){
   let [won, draw, lost,] = [0,0,0];
   let score = document.getElementById("score-area")
//    lets choose options using switch case
let options;
let optionChoose = [paper, scissors, rock];
for (let i of optionChoose)

switch (optionChoose) {
  case 0:
    options = 'paper';
    break;
  case 1:
    options = 'scissors';
    break;
  case 2:
    options = 'rock';
    break;
  default:
    options = 'wrong. choice';
    }

function playGame(){

}

function checkScore(){

}

function incrementScore(){

}

function decrementScore(){

}

function drawScore(){

}