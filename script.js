let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(min, max) {
    let randomNum =  Math.floor(Math.random()* (max - min + 1)) + min;
    return options[randomNum];
}


function winner() {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors?", "Rock, Paper, or Scissors")
    let computerSelection = getComputerChoice(0, options.length -1)
    alert(`computer chose ${computerSelection}`)

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

    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Draw!";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Draw!";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Draw!";
    }

}



function game() {
    
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {

        let theWinner = winner();
        alert(theWinner);
        
        if (theWinner === "You Lose! Paper beats Rock" || theWinner === "You Lose! Rock beats Scissors" || theWinner === "You Lose! Scissors beats Paper") {
            computer++;
            alert(`computer has ${computer} points`)
        } else if (theWinner === "You Win! Rock beats Scissors" || theWinner === "You Win! Scissors beats Paper" || theWinner === "You Win! Paper beats Rock") {
            player++;
            alert(`player has ${player} points`)
        } else if (theWinner === "Draw!") {
            alert("It was a Draw so no points are added!")
        }
        
    }
    if (player > computer) {
        alert(`Congratulations you win with ${player} points`)
    } else if (player < computer){
        alert(`You Lose, the score is (${computer} - ${player}) to computer, better luck next time.`)
    } else if (player = computer) {
        alert("This can't be, there must be a problem here!")
    }
}

