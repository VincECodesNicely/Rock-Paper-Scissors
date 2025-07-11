// console.log("Hello Welcome");
let humanScore = 0;
let computerScore = 0;
const button = document.querySelector("button");
let humanChoice = "";

// function getHumanChoice() {
//   // let humanChoice = prompt("Enter Rock, Paper, Scissors").toLowerCase();
//   let humanChoice = "";
//   if(humanChoice )

//   return humanChoice;
// }

function getHumanChoice() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      humanChoice = event.target.innerHTML;
      console.log("You Chose:" + humanChoice);
    });
  });
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomComputerChoice = Math.floor(Math.random() * options.length);
  let stringComputerChoice = options[randomComputerChoice];

  return stringComputerChoice;
}

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

// getHumanChoice();

// const computerChoice = getComputerChoice();
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

// button.addEventListener("click", playRound());
