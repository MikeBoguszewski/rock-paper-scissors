const buttons = document.querySelectorAll(".inputs");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");
const roundResult = document.querySelector("#round-result");

const restartButton = document.querySelector("#restart")

score.textContent = "You: 0 Computer: 0 Ties: 0";
let playerScore = 0;
let computerScore = 0;
let ties = 0
let gameOver = false
// For each button click, call playRound function with the correct playerSelection //
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameOver === false) {
            let playerSelection = button.getAttribute('id');
            didWin = playRound(playerSelection);
            calculateScore(didWin);
        }
        

    } );
});

restartButton.addEventListener("click", restartGame )



function getComputerChoice () {
    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (choiceNumber === 0) {
        computerChoice = "Rock";
    } else if (choiceNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playRound (playerSelection) {
    let didWin;
    let computerSelection = getComputerChoice()
    let result;

    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection + ".";
        didWin = true;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        didWin = false;
    } else {
        roundResult.textContent = "Tie";
    }

    return didWin
}

function calculateScore() {
    if (didWin === true) {
        playerScore += 1;
    } else if (didWin === false) {
        computerScore += 1;
    } else {
        ties += 1
    }
    score.textContent = ("You: " + playerScore + " Computer: " + computerScore + " Ties: " + ties )

    if (playerScore === 5) {
        finalResult.textContent = "You Win!"
        gameOver = true
    } else if (computerScore === 5) {
        finalResult.textContent = "Computer Wins!"
        gameOver = true
    } else if (computerScore === 5 && playerScore === 5){
        finalResult.textContent = "Tied game!"
        gameOver = true
    }
    
}

function restartGame () {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    score.textContent = "You: 0 Computer: 0 Ties: 0";
    finalResult.textContent = ""
    roundResult.textContent = ""
}

