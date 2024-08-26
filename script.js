//checking to make sure script is linked properly
console.log("Hello World")


//function for computer input
function getComputerChoice() {
    array = new Array("Rock","Paper","Scissors") //creating a new array for rock paper and scissors
    return array[Math.floor(Math.random() * array.length)];
    //credit to krishivga from TOP for this function
}
console.log(getComputerChoice())

//function for user input
function getHumanChoice(){
    return prompt("Enter Rock, Paper, or Scissors to play the game!");
}

//creating a playRound function
function playRound(humanChoice, computerChoice) {
    //convert humanChoice to match computerChoice
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    //defining tie
    let tie = `No Winner!`;
    if(humanChoice == computerChoice){
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return tie;
    }else if(humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors!");
        return true;
    }else if(humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock!");
        return true;
    }else if(humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper!");
        return true;
    }else if(humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors!");
        return false;
    }else if(humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock!");
        return false;
    }else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats Paper!");
        return false;
    }
}

//playing the whole game with 5 round
function playGame(round) {
//creating variables for keeping score
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < round; i++){
    score = playRound(getHumanChoice(), getComputerChoice());
    if (score == true) {
        humanScore++;
    }else if ( score == false) {
        computerScore++;
    }
}
console.log(`The player has ${humanScore} points and the computer has ${computerScore} points`);
}


playGame(5)