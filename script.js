// console.log("Hello Welcome");
const humanScoreDisplay = document.querySelector("#player");
const computerScoreDisplay = document.querySelector("#computer");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
let humanScore = 0;
let computerScore = 0;

//gameRules object was declared so that I avoid using massive amounts of if statements
//got this idea from https://www.reddit.com/r/learnjavascript/comments/1cla2el/rock_paper_scissors_a_more_efficient_way/
var gameRules = {
  "rock": {
    "rock": "draw",
    "paper": "lose",
    "scissors": "win",
  },
  "paper": {
    "paper": "draw",
    "rock": "win",
    "scissors": "lose",
  },
  "scissors": {
    "scissors": "draw",
    "paper": "win",
    "rock": "lose",
  },
};

// getHumanChoice();
// getComputerChoice();

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(humanSelection, computerSelection));
//   }

// function playRound(humanChoice, computerChoice) {
//   var result = gameRules[humanChoice][computerChoice];
//   if (result == "win") {
//     console.log("You Win! " + humanChoice + " beats " + computerChoice);
//     humanScore += 1;
//     console.log("You: " + humanScore + " Computer: " + computerScore);
//   } else if (result == "lose") {
//     console.log("You Lose! " + computerChoice + " beats " + humanChoice);
//     computerScore += 1;
//     console.log("You: " + humanScore + " Computer: " + computerScore);
//   } else if (result == "draw") {
//     console.log(
//       "It is a draw you chose: " +
//         humanChoice +
//         " the computer chose" +
//         computerChoice
//     );
//   } else {
//     console.log("Something went wrong");
//   }
// }

//   if (humanScore > computerScore) {
//     console.log(
//       "You win! your score: " + humanScore + " computer score: " + computerScore
//     );
//   } else if (humanScore < computerScore) {
//     console.log(
//       "You lose! your score: " +
//         humanScore +
//         " computer score: " +
//         computerScore
//     );
//   } else if (humanScore == computerScore) {
//     console.log(
//       "You tied! your score: " +
//         humanScore +
//         "  computer score: " +
//         computerScore
//     );
//   } else {
//     console.log("Something went wrong");
//   }
// }

// playGame();

// const computerChoice = getComputerChoice();
function playRound(humanSelection) {
  const options = ["rock", "paper", "scissors"];
  const randomComputerChoice = Math.floor(Math.random() * options.length);
  let computerSelection = options[randomComputerChoice];
  var result = gameRules[humanSelection][computerSelection];
  if (result == "win") {
    console.log("You Win! " + humanSelection + " beats " + computerSelection);
    humanScore++;
    humanScoreDisplay.textContent = `Player score: ${humanScore}`;
    console.log("You: " + humanScore + " Computer: " + computerScore);
  } else if (result == "lose") {
    console.log("You Lose! " + computerSelection + " beats " + humanSelection);
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    console.log("You: " + humanScore + " Computer: " + computerScore);
  } else if (result == "draw") {
    console.log(
      "It is a draw you chose: " +
        humanSelection +
        " the computer chose: " +
        computerSelection
    );
  } else {
    console.log("Something went wrong");
  }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorButton.addEventListener("click", () => playRound("scissors"));
