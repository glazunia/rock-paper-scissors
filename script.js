let playerSelection,
    computerSelection;

let playerWins = 0,
    computerWins = 0;

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
    playerSelection = prompt('Choose Rock, Paper, or Scissors:')
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        ++playerWins;
        ++computerWins;
        return `\nTie! Both computer and you chose ${playerSelection}!\n `;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        ++playerWins;
        return `\nYou win! ${playerSelection} beat(s) ${computerSelection}!\n `;
    } else {
        ++computerWins;
        return `\nComputer wins! ${computerSelection} beat(s) ${playerSelection}!\n `;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`${playRound(playerSelection, computerSelection)}\n     SCORE      \n----------------\n You   Computer \n----------------\n  ${playerWins}       ${computerWins} \n----------------`
        );
    }
    if (playerWins > computerWins) {
        console.log('\nCongratulations! You beat computer! Reload the page to try again.')
    } else {
        console.log('\nComputer beat you! Reload the page to try again.')
    }
}

playGame();