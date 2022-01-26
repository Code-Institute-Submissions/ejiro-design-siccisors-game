const choices = document.getElementsByClassName("choice")
const replay = document.getElementById("replay")
// const scoreBoard ={
//     won : 0,
//     draw : 0,
//     lost : 0
// }

// start game
function startGame(event) {
    replay.style.display = "inline-block"
    const playerGame = event.target.id
    const computerGame = getComputerGame();
    const winner = getWinner(playerGame, computerGame);

    console.log(computerGame, playerGame, winner, incrementDraw, incrementLost, incrementWon)
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
        incrementDraw(), incrementWon();
        return 'draw'; 
    }
    if (p !== c || c !== p) {
        return 'win';
    } else {
        incrementLost()
        'lose';
    }

}
// show scoreboard area and increment score
function incrementWon(){
    let wonScore = parseInt(document.getElementsById("won").innerText)
    document.getElementsById("won").innerText = ++wonScore
}

function incrementDraw(){
    let drawScore = parseInt(document.getElementsById("draw").innerText)
    document.getElementsById("draw").innerText = ++drawScore
}

function incrementLost(){
    let lostScore = parseInt(document.getElementsById("lost").innerText)
    document.getElementsById("lost").innerText = ++lostScore
}
    // if(winner === 'win'){
    //     scoreBoard.won++;
    // }
    // else if (winner === "lose"){
    //     scoreBoard.lost--;
    // }
    // else{
    //     scoreBoard.draw++;

    // }



// event listeners
for (let choice of choices) {
    choice.addEventListener("click", startGame)
}