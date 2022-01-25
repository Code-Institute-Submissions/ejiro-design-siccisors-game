const choices = document.getElementsByClassName("choice")
const score = document.getElementsById("score-area")
const replay = document.getElementById("replay")

// add another score variable
const pscore1 = 0;
const pscore2 = 0;
const gameover = false;
const limit = 100;

// updating player score by setting the span tag
const pwon = document.getElementById("#won")
const pdraw = document.getElementById("#draw")
const plost = document.getElementById("#lost")


// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame();
    const winner = getWinner(playerGame, computerGame);
    const score = scoreBoard();

    console.log(computerGame, playerGame, winner)
}
// get computer game
function getComputerGame() {
    const random = Math.random();
    if (random < 0.45) {
        return 'rock';
    } else if (random <= 0.80) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
// getting the winner
function getWinner(p, c) {
    if (p === c || c === p) {
        return 'draw';
    }
    if (p !== c || c !== p) {
        return 'win';
    } else {
        'lose';
    }

}
// show scoreboard area
function scoreBoard(){


}


// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
}