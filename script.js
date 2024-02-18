const playerSelection = 'Rock'; // change to prompt later
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! Both computer and you chose ${playerSelection}!`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } 
    // to come around 'scissors beats'
      else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beat ${computerSelection}!`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `Computer wins! ${computerSelection} beat ${playerSelection}!`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    }
}