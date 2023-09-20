let div = document.getElementById("home");
div.style.cssText = "text-align: center; font-style: italic; font-size: 50px; padding: 20px";

let p = document.createElement("p");
p.textContent = `The world is coming to an end, with the invasion of Alians, and the fate of the world lies in your ability to beat the Alians at a game of Rock, Paper, Scissors. We trust you as you are our last bet. GOD LUCK!`;
p.style.cssText = "font-size: 30px; text-align: center; color: gray;";
div.appendChild(p);

// creating a container to hold all the three buttons
let divButton = document.createElement("div");
divButton.classList.add("div-button");

// Declaring functions for the Player Selection and Computer Selection
function getComputerChoice() {
    // computer selection plays at random, and invoking the math function for this purpose
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(player, computer) {
    player = player.toLowerCase();
    if (player === computer) {
        return { result: `It's a tie!`, winner: null };
    } else if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
        return { result: `You Win! ${player} beats ${computer}`, winner: "player" };
    } else {
        return { result: `You lose! ${computer} beats ${player}`, winner: "computer" };
    }
}

// Creating three button for each of the player selection
let rockButton = document.createElement("button");
rockButton.classList.add("btn");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    updateScore(result);
});

let paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.classList.add("btn");
paperButton.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    updateScore(result);
});

let scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.classList.add("btn");
scissorsButton.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    updateScore(result);
});

divButton.appendChild(rockButton);
divButton.appendChild(paperButton);
divButton.appendChild(scissorsButton);
div.appendChild(divButton);

let playerScore = 0;
let computerScore = 0;

let resultsDiv = document.createElement("div");
resultsDiv.classList.add("result");
resultsDiv.textContent = `Player Score: ${playerScore}  | Computer Score: ${computerScore}`;
divButton.appendChild(resultsDiv);

function updateScore(result) {
    let roundResultDiv = document.createElement("div");
    roundResultDiv.textContent = result.result;
    div.appendChild(roundResultDiv);

    if (result.winner === "player") {
        playerScore++;
    } else if (result.winner === "computer") {
        computerScore++;
    }

    resultsDiv.textContent = `Player Score: ${playerScore}  | Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        let winner = document.createElement("div");
        winner.textContent = "Congratulations! You won the game!";
        resultsDiv.appendChild(winner);
        disableButtons();
    } else if (computerScore === 5) {
        let winner = document.createElement("div");
        winner.textContent = "Game over! Computer wins the game!";
        resultsDiv.appendChild(winner);
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
