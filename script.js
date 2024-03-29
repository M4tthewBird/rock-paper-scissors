function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


function getUserName() {
    let playerName = prompt("Enter your name:");
    if (playerName !== null) {
        playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
    } else {
        playerName = "Player 1"
    }
    return playerName
}

let playerName = getUserName();
let playerCounter = 0;
let computerCounter = 0;
let playerSelection = null;

document.addEventListener("DOMContentLoaded", function() {

    const playerNameElement = document.getElementById("player-name");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    playerNameElement.textContent = playerName;

    function updateScore() {
        playerScoreElement.textContent = playerCounter;
        computerScoreElement.textContent = computerCounter;

        // Remove existing animation class to trigger reflow
        playerScoreElement.classList.remove("score-animation");
        computerScoreElement.classList.remove("score-animation");
        
        // Force reflow to restart the animation
        void playerScoreElement.offsetWidth;
        void computerScoreElement.offsetWidth;

        // Add animation class to trigger animation
        playerScoreElement.classList.add("score-animation");
        computerScoreElement.classList.add("score-animation");
    }

    const rockButton = document.querySelector("#rock-btn");
    const paperButton = document.querySelector("#paper-btn");
    const scissorsButton = document.querySelector("#scissors-btn");

    rockButton.addEventListener("click", function(e) {
        playerSelection = "Rock";
        playRound(playerName, playerSelection);
        updateScore();
    });

    paperButton.addEventListener("click", function(e) {
        playerSelection = "Paper";
        playRound(playerName, playerSelection);
        updateScore();
    });

    scissorsButton.addEventListener("click", function(e) {
        playerSelection = "Scissors";
        playRound(playerName, playerSelection);
        updateScore();
    });
});



function playRound(playerName, playerSelection) {

    /* USER INPUT PROMPT FOR SELECTION
    
    let playerSelection = prompt("Enter your selection:");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    */

    let computerSelection = getComputerChoice();
    let resultInfoElement = document.getElementById("result-info");
    console.log(computerSelection) 

    if ((playerSelection == `Rock` && computerSelection == `Scissors`) 
    || (playerSelection == `Paper` && computerSelection == `Rock`)
    || (playerSelection == `Scissors` && computerSelection == `Paper`))  {
        resultInfoElement.textContent = `${playerName}, you won! ${playerSelection} beats ${computerSelection}`
        playerCounter += 1;
    } else if (playerSelection == computerSelection) {
        resultInfoElement.textContent = `Its a draw!`
        playerCounter += 1;
        computerCounter += 1;
    } else {
        resultInfoElement.textContent = `${playerName}, you lost! ${computerSelection} beats ${playerSelection}`
        computerCounter += 1;
    }
}

/* function playGame() {

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

*/