var pRock = document.getElementById('r-player')
var pPaper = document.getElementById('p-player')
var pScissors = document.getElementById('s-player')

var cRock = document.getElementById('r-com')
var cPaper = document.getElementById('p-com')
var cScissors = document.getElementById('s-com')

var matchResult = document.getElementById('result-p')
var matchResultBox = document.getElementById('result-div')

var refreshText = document.getElementById('refresh-text')

function pilihanComp() {
    const pil = Math.floor(Math.random() * 3);
    if (pil == 0) {
        cRock.style.backgroundColor = "#C4C4C4";
        return "rock";
    } else if (pil == 1) {
        cPaper.style.backgroundColor = "#C4C4C4";
        return "paper";
    } else { // pil==2
        cScissors.style.backgroundColor = "#C4C4C4";
        return "scissors";
    }
}

function playerVsComp(player, computer) {
    if (player == computer) {
        return 'draw'
    } else if (player == 'rock') {
        if (computer == 'paper') {
            return 'lose'
        } else {
            return 'win'
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            return 'lose'
        } else {
            return 'win'
        }
    } else {
        if (computer == 'rock') {
            return 'lose'
        } else {
            return 'win'
        }
    }
}

function reset() {
    matchResultBox.style.visibility = "hidden";
    pRock.style.removeProperty("background-color");
    pPaper.style.removeProperty("background-color");
    pScissors.style.removeProperty("background-color");
    cRock.style.removeProperty("background-color");
    cPaper.style.removeProperty("background-color");
    cScissors.style.removeProperty("background-color");
}

<<<<<<< HEAD

=======
>>>>>>> 0f9a011 (Editing html and adding js file)
function showHasil(result) {
    matchResultBox.style.removeProperty("visibility")
    if (result == "draw") {
        matchResult.innerText = "DRAW";
    } else if (result == "lose") {
        matchResult.innerText = "COM\nWIN";
    } else {
        matchResult.innerText = "PLAYER 1\nWIN";
    }
}

function chooseRock() {
    if (pRock.style.backgroundColor == '#C4C4C4' || pPaper.style.backgroundColor == '#C4C4C4' || pScissors.style.backgroundColor == '#C4C4C4') {
        refreshText.removeProperty('visibility')
    } else {
        reset()
        pRock.style.backgroundColor = "#C4C4C4"
        let player = "rock"
        let computer = pilihanComp()
        let result = playerVsComp(player, computer)
        showHasil(result)
    }
}

function choosePaper() {
    if (pRock.style.backgroundColor == '#C4C4C4' || pPaper.style.backgroundColor == '#C4C4C4' || pScissors.style.backgroundColor == '#C4C4C4') {
        refreshText.removeProperty('visibility')
    } else {
        reset()
        pPaper.style.backgroundColor = "#C4C4C4"
        let player = "paper"
        let computer = pilihanComp()
        let result = playerVsComp(player, computer)
        showHasil(result)
    }
}

function chooseScissor() {
    if (pRock.style.backgroundColor == '#C4C4C4' || pPaper.style.backgroundColor == '#C4C4C4' || pScissors.style.backgroundColor == '#C4C4C4') {
        refreshText.removeProperty('visibility')
    } else {
        reset()
        pScissors.style.backgroundColor = "#C4C4C4"
        let player = "scissors"
        let computer = pilihanComp()
        let result = playerVsComp(player, computer)
        showHasil(result)
    }
}