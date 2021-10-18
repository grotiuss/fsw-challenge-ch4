class Participant {
    constructor(){
        this.name = this.constructor.name
    }
}

class Player extends Participant {
    constructor(){
        super()
    }

    chooseRock() {
        this.selection = 'rock'
        config()
    }

    choosePaper() {
        this.selection = 'paper'
        config()
    }

    chooseScissor() {
        this.selection = 'scissor'
        config()
    }

    wasSelected() {
        console.log(`${this.selection} was selected`)
    }
}

class Computer extends Participant {
    constructor(){
        super()
    }
    
    choosingTool(){
        
    }
}

var player  = new Player();
console.log(player.name)

function config(){
    player.wasSelected()
}
