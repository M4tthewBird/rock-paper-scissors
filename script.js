function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


function getUserName() {
    let playerName = prompt("Enter your name:");
    playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
    return playerName
}

let playerName = getUserName();
let playerCounter = 0;
let computerCounter = 0;

function playRound(playerName) {

    let playerSelection = prompt("Enter your selection:");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerSelection = getComputerChoice();
    console.log(computerSelection)

    if ((playerSelection == `Rock` && computerSelection == `Scissors`) 
    || (playerSelection == `Paper` && computerSelection == `Rock`)
    || (playerSelection == `Scissors` && computerSelection == `Paper`))  {
        console.log(`${playerName}, you won! ${playerSelection} beats ${computerSelection}`)
        playerCounter += 1;
    } else if (playerSelection == computerSelection) {
        console.log(`Its a draw!`)
    } else {
        console.log(`${playerName}, you lost! ${computerSelection} beats ${playerSelection}`)
        computerCounter += 1;
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1} results: `)
        playRound(playerName)
        console.log(`Counter after ${i+1}. round: \n
        ${playerCounter}:${computerCounter}`)
        if (playerCounter == 2 && computerCounter == 2 && i == 5) {
            i -= 1
        }
    }

    if (playerCounter > computerCounter) {
        console.log(`${playerName} you won the 5 round game!`)
    } else if (playerCounter == computerCounter) {
        console.log(`Its a draw!`)
    } else {
        console.log(`${playerName} you lost the 5 round game!`)
    }
}