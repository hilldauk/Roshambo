// Import Commander, the npm package used for creating command line programs.
const { Command } = require('commander')
const commander = require('commander')
const program = new Command();

// Creates the different flags that can be run on the roshambo node.
program
    .option('-r, --rock', 'rock')
    .option('-p, --paper', 'paper')
    .option('-s, --scissors', 'scissors')

// Represents the user input on the command line
program.parse(process.argv);


// Creates the Roshambo class, which contains the methods necessary to run a game of roshambo in the command line.
class Roshambo {

    constructor() {
        this.move = Math.random() * 100
    }

    // Generates the computers move, by using Math.random to calculate a number between 0 and 99, and alloting a string value to every third of the possible outcome.
    computerMove() {
        if (Math.floor(this.move) <= 33) {
            return 'rock'
        } else if (Math.floor(this.move) > 33 && Math.floor(this.move) <= 66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    // Determines whether the player or the computer wins the game of Roshambo.
    determineVictor() {

        // Determines all instances of throwing 'rock'. 
        if (program.rock) {
            if (this.computerMove() == 'rock') {
                console.log("You throw Rock... \n The computer throws Rock! \n You tie!")
            } else if (this.computerMove() == 'paper') {
                console.log("You throw Rock... \n The computer throws Paper! \n You lose!")
            } else {
                console.log("You throw Rock... \n The computer throws Scissors! \n You win!")
            }
        } 
        
        // Determines all instances of throwing 'paper'.
        else if (program.paper) {
            if (this.computerMove() == 'paper') {
                console.log("You throw Paper... \n The computer throws Paper! \n You tie!")
            } else if (this.computerMove() == 'scissors') {
                console.log("You throw Paper... \n The computer throws Scissors! \n You lose!")
            } else {
                console.log("You throw Paper... \n The computer throws Rock! \n You win!")
            }
        } 
        
        // Determines all instances of throwing 'scissors'.
        else if (program.scissors) {
            if (this.computerMove() == 'scissors') {
                console.log("You throw Scissors... \n The computer throws Scissors! \n You tie!")
            } else if (this.computerMove() == 'rock') {
                console.log("You throw Scissors... \n The computer throws Rock! \n You lose!")
            } else {
                console.log("You throw Scissors... \n The computer throws Paper! \n You win!")
            }
        } 
        
        // In the case that a player doesn't make a move, or inputs something invalid, outputs this line.
        else {
            console.log("You didn't throw anything :/")
        }
        
    }
}

// Runs the Roshambo instance to make the command line work.
var newGame = new Roshambo();
newGame.determineVictor();
