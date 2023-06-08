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

    return computerChoice
    console.log(computerChoice)
}
