// const yargs = require('yargs')
const { Command } = require('commander')
const commander = require('commander')
const program = new Command();

program
    .option('-r, --rock', 'rock')
    .option('-p, --paper', 'paper')
    .option('-s, --scissors', 'scissors')


program.parse(process.argv);
// console.log(playerMove)

//if (program.rock) console.log(program.rock); 

// node Roshambo.js -r

class Roshambo {
    constructor() {
        this.move = Math.random() * 100
    }

    computerMove() {
        if (Math.floor(this.move) <= 33) {
            return 'rock'
        } else if (Math.floor(this.move) > 33 && Math.floor(this.move) <= 66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    determineVictor() {

        if (program.rock) {
            // console.log('rock');
            if (this.computerMove() == 'rock') {
                console.log("You tied. fool.")
            }
        } 
        
        else if (program.paper) {
            if (this.computerMove() == 'paper') {
                console.log("You tied. fool.")
            }
        } 
        
        else if (program.scissors) {
            if (this.computerMove() == 'scissors') {
                console.log("You tied. fool.")
            }
        } 
        
        else {
            console.log("You didn't throw anything :/")
        }

    }
}

var newGame = new Roshambo();
newGame.determineVictor();


// ick = () => {
//     number = Math.random() * 100
//     return Math.floor(number);
// }
// console.log(ick());