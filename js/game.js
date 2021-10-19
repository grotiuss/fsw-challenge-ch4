var refresh = document.getElementById('reset')
var versus = document.getElementById('versus')
var matchResult = document.getElementById('result')

function notEmpty() {
    refresh.children[0].style.width = '8em'
    console.log('Refresh button was clicked')
}

class Participant {
    constructor() {
        this.name = this.constructor.name
        this.selection = undefined
        this.tool = undefined
    }

    selected() {
        var tool = document.getElementById(this.selection)
        tool.style.backgroundColor = '#C4C4C4'
        tool.style.borderRadius = '25px'
    }

    reset() {
        var tool = document.getElementById(this.selection)
        refresh.children[0].style.width = '5em'
        if (tool) {
            tool.style.backgroundColor = ''
            tool.style.borderRadius = ''
        }
        this.selection = undefined
        this.tool = undefined
    }
}

class Player extends Participant {
    constructor() {
        super()
    }

    chooseRock() {
        if (!this.selection) {
            this.selection = 'r-player'
            this.tool = 'rock'
            this.selected()
            config()
        } else {
            notEmpty()
            console.log('Object is not empty')
        }
    }

    choosePaper() {
        if (!this.selection) {
            this.selection = 'p-player'
            this.tool = 'paper'
            this.selected()
            config()
        } else {
            notEmpty()
            console.log('Object is not empty')
        }
    }

    chooseScissor() {
        if (!this.selection) {
            this.selection = 's-player'
            this.tool = 'scissor'
            this.selected()
            config()
        } else {
            notEmpty()
            console.log('Object is not empty')
        }
    }
}

class Computer extends Participant {
    constructor() {
        super()
    }

    randomToolSelection() {
        const pil = Math.floor(Math.random() * 3);
        switch (pil) {
            case 0:
                this.tool = 'rock'
                this.selection = 'r-com'
                break
            case 1:
                this.tool = 'paper'
                this.selection = 'p-com'
                break
            case 2:
                this.tool = 'scissor'
                this.selection = 's-com'
                break
        }
    }
}

// var player = new Player()

var player = new Player()
var computer = new Computer()

function result(){
    versus.style.display = 'none'
    matchResult.style.visibility = 'visible'
}

function config(){
    console.log("Computer's turn")
    computer.randomToolSelection()
    computer.selected()
    result()
    
}

function reset(){
    player.reset()
    computer.reset()
    versus.style.display = ''
    matchResult.style.visibility = 'hidden'
}