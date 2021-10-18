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
        if(this.selection == null){
            this.selection = 'rock'
            toolSelected('r-player')
            config()
        }
    }

    choosePaper() {
        if(this.selection == null){
            this.selection = 'paper'
            toolSelected('p-player')
            config()
        }
    }

    chooseScissor() {
        if(this.selection == null){
            this.selection = 'scissor'
            toolSelected('s-player')
            config()
        }
    }

    wasSelected() {
        console.log(`${this.selection} was selected by the Player`)
    }
}

class Computer extends Participant {
    constructor(){
        super()
    }
    
    choosingTool(){
        const pil = Math.floor(Math.random() * 3);
        switch (pil){
            case 0:
                this.selection = 'rock'
                toolSelected('r-com')
                break
            case 1:
                this.selection = 'paper'
                toolSelected('p-com')
                break
            case 2:
                this.selection = 'scissor'
                toolSelected('s-com')
                break
        }
        console.log(`${this.selection} was selected by the Computer`)
    }
}

var player  = new Player();
var computer = new Computer
console.log(player.name)
console.log(computer.name)

function toolSelected(toolId) {
    var toolSelected = document.getElementById(toolId)
    toolSelected.style.backgroundColor= '#C4C4C4'
    toolSelected.style.borderRadius = '25px'
}

function result(a,b){
    if (a == 'rock'){
        if (b == 'rock'){
            return 'draw'
        } else if(b == 'paper'){
            return 'lose'
        } else{
            return 'win'
        }
    } else if (a == 'paper'){
        if (b == 'rock'){
            return 'win'
        } else if(b == 'paper'){
            return 'draw'
        } else{
            return 'lose'
        }
    } else{
        if (b == 'rock'){
            return 'lose'
        } else if(b == 'paper'){
            return 'win'
        } else{
            return 'draw'
        }
    }
}

function config(){
    player.wasSelected()
    computer.choosingTool()
    console.log(result(player.selection, computer.selection))
}
