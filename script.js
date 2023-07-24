let options = ["Rock", "Paper", "Scissors"] // array of computer choices

const comChoice = document.querySelector('.comChoice');
const Btn = document.querySelectorAll('.Btn');
const body = document.body;
const fate = document.querySelector('#fate');
const buttons  = document.querySelector('.buttons')

function clickSound(audioName) { // function for button click sounds
    let audio = new Audio(audioName);
    audio.loop = false;
    audio.play();
}
Btn.forEach((button) => { // each button clicked return => clickSound function
    button.addEventListener('click', function() { clickSound('ButtonClick1.mp3')})});

function playSound(audioName) { // function for background music
    let audio = new Audio(audioName);
    audio.loop = true;
    audio.play();
}
playSound('Elevator Music.mp3')


let getComputerChoice = function () { // random choice of computer
    let randomNum =  Math.floor(Math.random()* ((options.length - 1) - 0 + 1)) + 0;
    comChoice.textContent = "Computer Chose " + '"' + options[randomNum] + '"';
}

Btn.forEach((button) => { // each button clicked gets a random computer choice
    button.addEventListener('click', function() { getComputerChoice()})});



const result = document.querySelector('.result');
const BtnR = document.querySelector('.BtnR');
BtnR.addEventListener('click', function playerSelection() { // returns who wins the round when pressing Rock button
    if (comChoice.textContent === 'Computer Chose "Paper"') {
        result.textContent = "You Lose! Paper beats Rock"
    } else if (comChoice.textContent === 'Computer Chose "Rock"') {
        result.textContent = "Draw!"
    } else if (comChoice.textContent === 'Computer Chose "Scissors"') {
        result.textContent = "You Win! Rock beats Scissors"
    }
})


const BtnP = document.querySelector('.BtnP');
BtnP.addEventListener('click', function playerSelection() { // returns who wins the round when pressing Paper button
    if (comChoice.textContent === 'Computer Chose "Paper"') {
        result.textContent = "Draw!"
    } else if (comChoice.textContent === 'Computer Chose "Rock"') {
        result.textContent = "You Win! Paper beats Rock"
    } else if (comChoice.textContent === 'Computer Chose "Scissors"') {
        result.textContent = "You Lose! Scissors beats Paper"
    }
})


const BtnS = document.querySelector('.BtnS');
BtnS.addEventListener('click', function playerSelection() { // returns who wins the round when pressing Scissors button
    if (comChoice.textContent === 'Computer Chose "Paper"') {
        result.textContent = "You Win! Scissors beats Paper"
    } else if (comChoice.textContent === 'Computer Chose "Rock"') {
        result.textContent = "You Lose! Rock beats Scissors"
    } else if (comChoice.textContent === 'Computer Chose "Scissors"') {
        result.textContent = "Draw!" 
    }
})


const mainDiv = document.querySelector('.main');
const score = document.createElement('div');
score.classList.add('score');
mainDiv.appendChild(score)

let player = 0;
let computer = 0;

function theWinner() { // returns a score to the winner and prints it + winLose function
    fate.textContent = "CHOOSE YOUR FATE!"
    
    if (result.textContent === "You Lose! Paper beats Rock" || result.textContent === "You Lose! Rock beats Scissors" || result.textContent === "You Lose! Scissors beats Paper") {
        computer++;
    } else if (result.textContent === "You Win! Rock beats Scissors" || result.textContent === "You Win! Scissors beats Paper" || result.textContent === "You Win! Paper beats Rock") {
        player++;
    }
    score.textContent = `Computer ${computer} Player ${player}`;
    console.log(`${computer} "+" ${player}`)


winLose()
}


function lastResults() { // executes some commands to delete and add new lines to document
    player = 0;
    computer = 0;
    result.textContent = ""
    comChoice.textContent = ""
    BtnR.remove()
    BtnP.remove()
    BtnS.remove()
    const newButton = document.createElement('button');
    newButton.textContent = "Play Again";
    newButton.addEventListener('click', function() {
        location.reload();
    })
    newButton.classList.add('Btn')
    newButton.classList.add('playAgainButton')
    buttons.appendChild(newButton);
}

function winLose() { // decides who wins the game with the help of lastResults function

    if (player === 5) {
        fate.textContent = "Congratulations, You Won!"
        lastResults()
    }   else if (computer === 5) {
        fate.textContent = "Oops, You Lost!"
        lastResults()
    }
}


Btn.forEach((button) => { // executes theWinner() function whenever the buttons are clicked
    button.addEventListener('click', function() { theWinner()})});



