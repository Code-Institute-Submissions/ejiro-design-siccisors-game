const choices = document.getElementsByClassName("choice")
const score = document.getElementById("score-area")
const replay = document.getElementById("replay")
const scoreboard = {
    draw: 0,
    win: 0,
    lost: 0
};

// start game
function startGame(event){
console.log(event.target.id)
}
// event listeners
for(let choice of choices){
    choice.addEventListener("click", startGame)
}
