let options = ["Rock", "Paper", "Scissors"]

const comChoice = document.querySelector('.comChoice');
const Btn = document.querySelectorAll('.Btn');


function clickSound(audioName) {
    let audio = new Audio(audioName);
    audio.loop = false;
    audio.play();
}
Btn.forEach((button) => {
    button.addEventListener('click', function() { clickSound('ButtonClick1.mp3')})});

function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.loop = true;
    audio.play();
}
playSound('Elevator Music.mp3')


let getComputerChoice = function () {
    let randomNum =  Math.floor(Math.random()* ((options.length - 1) - 0 + 1)) + 0;
    comChoice.textContent = "Computer Chose " + '"' + options[randomNum] + '"';
}

Btn.forEach((button) => {
    button.addEventListener('click', function() { getComputerChoice()})});



const result = document.querySelector('.result');
const BtnR = document.querySelector('.BtnR');
BtnR.addEventListener('click', function playerSelection() {
    if (comChoice.textContent === 'Computer Chose "Paper"') {
        result.textContent = "You Lose! Paper beats Rock"
    } else if (comChoice.textContent === 'Computer Chose "Rock"') {
        result.textContent = "Draw!"
    } else if (comChoice.textContent === 'Computer Chose "Scissors"') {
        result.textContent = "You Win! Rock beats Scissors"
    }
})


const BtnP = document.querySelector('.BtnP');
BtnP.addEventListener('click', function playerSelection() {
    if (comChoice.textContent === 'Computer Chose "Paper"') {
        result.textContent = "Draw!"
    } else if (comChoice.textContent === 'Computer Chose "Rock"') {
        result.textContent = "You Win! Paper beats Rock"
    } else if (comChoice.textContent === 'Computer Chose "Scissors"') {
        result.textContent = "You Lose! Scissors beats Paper"
    }
})


const BtnS = document.querySelector('.BtnS');
BtnS.addEventListener('click', function playerSelection() {
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

function theWinner() {

    if (result.textContent === "You Lose! Paper beats Rock" || result.textContent === "You Lose! Rock beats Scissors" || result.textContent === "You Lose! Scissors beats Paper") {
        computer++;
        
    } else if (result.textContent === "You Win! Rock beats Scissors" || result.textContent === "You Win! Scissors beats Paper" || result.textContent === "You Win! Paper beats Rock") {
        player++;
        // score.textContent = `Computer ${computer} Player ${player}`;
    }
    score.textContent = `Computer ${computer} Player ${player}`;
    console.log(`${computer} "+" ${player}`)



}


Btn.forEach((button) => {
    button.addEventListener('click', function() { theWinner()})});




        
//     // }
//     if (player > computer) {
//         alert(`Congratulations you win with ${player} points`)
//     } else if (player < computer){
//         alert(`You Lose, the score is (${computer} - ${player}) to computer, better luck next time.`)
//     } else if (player = computer) {
//         alert("This can't be, there must be a problem here!")
//     }
// }


