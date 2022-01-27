const choices = document.getElementsByClassName("choice")
const replay = document.getElementById("replay")

// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame();
    const winner = getWinner(playerGame, computerGame);
    const checkScores = checkScore(winner);

    // console.log(computerGame, playerGame, winner, checkScores, replayGame )
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
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return "win"
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "win"
        } else {
            return "lost"
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return "win"
        } else {
            return "lost"
        }
    }

}
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
// check the scores for losers and winners
function checkScore(winner) {
    if (winner === 'win') {
        incrementWon();
    } else if (winner === 'draw') {
        incrementDraw();
    } else {
        (winner === 'lost')
        incrementLost();
    }
}
// replay button
function replayGame() {
    // console.log('replay Game')
    document.getElementById("won").innerText = 0
    document.getElementById("draw").innerText = 0
    document.getElementById("lost").innerText = 0
}

// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
    replay.addEventListener('click', replayGame)
}