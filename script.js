let playerSelection,
    computerSelection,
    roundResult,
    gameCanceled;

let playerWins = 0,
    computerWins = 0,
    roundCount = 0;

function convertPlayerSelection(playerSelection) {
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.at(0), playerSelection.at(0).toUpperCase());
    return playerSelection;
}

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
        ++playerWins;
        ++computerWins;
        roundResult = `\nTie! Both computer and you chose ${playerSelection}!\n `;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        ++playerWins;
        roundResult = `\nYou win! ${playerSelection} beat(s) ${computerSelection}!\n `;
    } else {
        ++computerWins;
        roundResult = `\nComputer wins! ${computerSelection} beat(s) ${playerSelection}!\n `;
    }
}

function playGame() {
    while (roundCount < 5) {
        playerSelection = prompt('Choose Rock, Paper, or Scissors:');
        if (playerSelection === null) {
            alert('Game canceled. Reload the page to start again.');
            roundCount = 5;
            gameCanceled = true;
        } else if (playerSelection == '') {
            alert('Please enter a valid choice!');
        } else {
            playerSelection = convertPlayerSelection(playerSelection);
            computerSelection = getComputerChoice();
            if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
                playRound(playerSelection, computerSelection);
                console.log(
                    `${roundResult}\n     SCORE      \n----------------\n You   Computer \n----------------\n  ${playerWins}       ${computerWins} \n----------------`
                );
                ++roundCount;
            } else {
                alert('Please enter a valid choice!');
            }
        }
    } if (gameCanceled === true) {
        console.log('Game canceled. Reload the page to start again.')
    } else if (playerWins === computerWins) {
        console.log('\nIt\'s a tie! Reload the page to try again.');
    } else if (playerWins > computerWins) {
        console.log('\nCongratulations! You beat computer! Reload the page to try again.');
    } else {
        console.log('\nComputer beat you! Reload the page to try again.');
    }
}

playGame();