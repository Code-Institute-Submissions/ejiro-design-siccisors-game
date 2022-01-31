const choices = document.getElementsByClassName("choice")
const replay = document.getElementById("replay")
const popup = documet.getElementById("myPopup")

/** The start game function calls all the functions when the game starts */
// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame();
    const winner = getWinner(playerGame, computerGame);
    const checkScores = checkScore(winner);
}
/** The comuter game function states the value what ever icon a user picks*/
// get computer game
function getComputerGame() {
    const random = Math.random();
    if (random < 0.45) {
        return "rock";
    } else if (random <= 0.80) {
        return "paper";
    } else {
        return "scissors";
    }
}
/**the winner function determines the icon to win and to lose when playing the game  */
// getting the winner
function getWinner(p, c) {
    if (p === c) {
        return "draw";
    } else if (p === "rock") {
        if (c === 'paper') {
            return "win";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "win"
        } else {
            return "lost"
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "win"
        } else {
            return "lost"
        }
    }

}
/** add popup button to tell the player when he wins or lose */
function popup(){

}
/**the incrment function increment a user scores when they lose, win or if its a draw */
// show scoreboard area and increment score
function incrementWon() {
    let wonScore = parseInt(document.getElementById("won").innerText)
    document.getElementById("won").innerText = ++wonScore
}

function incrementDraw() {
    let drawScore = parseInt(document.getElementById("draw").innerText)
    document.getElementById("draw").innerText = ++drawScore;
}

function incrementLost() {
    let lostScore = parseInt(document.getElementById("lost").innerText)
    document.getElementById("lost").innerText = ++lostScore;

}
/** this function checks and increment a user score if they win or lose */
// check the scores for losers and winners
function checkScore(winner) {
    if (winner === "win") {
        incrementWon();
    } else if (winner === "draw") {
        incrementDraw();
    } else {
        (winner === "lost")
        incrementLost();
    }
}
/** Restart button restarts the game if the user decides to play again */
// replay button
function replayGame() {
    document.getElementById("won").innerText = 0
    document.getElementById("draw").innerText = 0
    document.getElementById("lost").innerText = 0
}
/**this event listens for whan a user interacts with game and the computer will listen and respond */
// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
    replay.addEventListener("click", replayGame)
}