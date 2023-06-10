const buttons = document.querySelectorAll("button");
// For each button click, call playRound function with the correct playerSelection //
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.getAttribute('id')
        console.log(playerSelection)
        playRound(playerSelection)
    } );
});




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
    let playerWin;
    let computerSelection = getComputerChoice()
    // let playerSelection = prompt("Rock, Paper, or Scissors?")
    // playerSelection = playerSelection.toLowerCase();
    // playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let result;

    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "You Win! " + playerSelection + " beats " + computerSelection + ".";
        playerWin = true;
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        result = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        playerWin = false;
    } else {
        result = "Tie";
    }

    console.log(result)

    return playerWin
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0
    let playerWin;
    // for (let i = 0; i < 5; i++) {
       playerWin = playRound()
       if (playerWin) {
        playerScore += 1;
       } else if (!playerWin) {
        computerScore += 1;
       } else {
        ties += 1
       }
    // }
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("Ties: " + ties)

    if (playerScore > computerScore) {
        console.log("You win the game.")
    } else if (playerScore < computerScore) {
        console.log("You lose the game.")
    } else {
        console.log("You tied the game.")
    }

    
}

//game()

