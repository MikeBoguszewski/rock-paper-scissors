function getComputerChoice () {
    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (choiceNumber === 0) {
        computerChoice = "Rock";
    }
    else if (choiceNumber === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection)
    let result;

    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "You Win! " + playerSelection + " beats " + computerSelection + "."
    
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        result = "You Lose! " + computerSelection + " beats " + playerSelection + "."

    } else {
        result = "Tie"
    }

    return result
}


