document.addEventListener("DOMcontentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
      buttons.addEventListener("click", playGame)
    }
    let score = document.getElementById("score-area")
    let draw = document.getElementsByClassId("draw")
    let lost = documen.getElementsByClassId("lost")
    let won = document.getElementById("won")
})

let result = {
    player: 0,
    computer:0,
}
// play game
function playGame(event){
    console.log(event.target.id)
}
// event listener

function checkScore() {

}

function incrementScore() {

}

function decrementScore() {

}

function drawScore() {

}
