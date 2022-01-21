const choices = document.getElementsByClassName("choice")
const score = document.getElementById("score-area")
const replay = document.getElementById("replay")
const scoreboard = {
    draw: 0,
    win: 0,
    lost: 0
};

// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame()

    console.log(playerGame, computerGame)
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

// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
}