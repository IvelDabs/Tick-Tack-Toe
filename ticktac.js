function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playerChoice() {
  console.log(
    "What do you choice: Rock, Paper, or Scissors, type out your choice? "
  );
  const player = prompt("Enter a choice: ").toLowerCase();
  console.log(player);
  return player;
}

function gameRound(player, computer) {
  player = player.toLowerCase();

  if (player === computer) {
    return `It's a tie!`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return `You Win! ${player} beats ${computer}`;
  } else {
    return `You lose! ${computer} beats ${player}`;
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (i = 0; i < 5; i++) {
    const player = playerChoice();
    const computer = getComputerChoice();
    const result = gameRound(player, computer);
    console.log(result);

    if (result === `You Win! ${player} beats ${computer}`) {
      playerScore += 1;
      console.log(`playerScore: ${playerScore}`);
    } else if (result === `You lose! ${computer} beats ${player}`) {
      computerScore += 1;
      console.log(`computerScore: ${computerScore}`);
    }

    if (playerScore === 5) {
      console.log(`game over!, The winner of this round is you`);
      break;
    } else if (computerScore === 5) {
      console.log(`game over!, computer wins`);
      break;
    }
  }
}

game();
