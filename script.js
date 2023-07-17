let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(min, max) {
    let randomNum =  Math.floor(Math.random()* (max - min + 1)) + min;
    return options[randomNum];
}


function winner() {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors?", "Rock, Paper, or Scissors")
    let computerSelection = getComputerChoice(0, options.length -1)
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    }

}




winner("Rock")