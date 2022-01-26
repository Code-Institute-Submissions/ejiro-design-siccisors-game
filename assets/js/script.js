const choices = document.getElementsByClassName("choice")
const replay = document.getElementById("replay")

// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame();
    const winner = getWinner(playerGame, computerGame);
    // const draw1 = incrementDraw();
    // const won1 = incrementWon();
    // const lost1 = incrementLost();
    const checkScore = checkScore();

    console.log(computerGame, playerGame, winner, checkScore)
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

function checkScore(){
    if( winner === "won"){
        alert ('you won');
        incrementWon();
    }
    else{
        alert ('you lost');
        incrementLost();
    }
    if(winner === 'draw'){
        alert ('its a draw, play again');
        incrementDraw()
    }
}

// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
}