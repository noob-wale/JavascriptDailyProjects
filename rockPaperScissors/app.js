let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");

rock.addEventListener("click", clickHandler);
paper.addEventListener("click", clickHandler);
scissor.addEventListener("click", clickHandler);

let score = document.querySelector("#score");

function clickHandler(mouseEvent) {
    element = mouseEvent.toElement;
    playerSelection = element.id;
    computerSelection = computerPlay();
    winner = getWinner(playerSelection, computerSelection);
    score.textContent = getOutcomeMessage(winner, playerSelection, computerSelection);
}

function computerPlay() {
    choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "noone";
    } else if (playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "scissor" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else {
        return "computer";
    }
}

function getOutcomeMessage(winner, playerSelection, computerSelection) {
    if (winner === "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (winner === "computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Draw! ${playerSelection} is the same as ${computerSelection}`;
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissor");
        computerSelection = computerPlay();
        winner = getWinner(playerSelection, computerSelection);
        console.log(getOutcomeMessage(winner, playerSelection, computerSelection));
    }
}