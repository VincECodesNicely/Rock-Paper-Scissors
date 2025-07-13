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

function playRound(humanSelection) {
  const options = ["rock", "paper", "scissors"];

  const randomComputerChoice = Math.floor(Math.random() * options.length);
  let computerSelection = options[randomComputerChoice];
  var result = gameRules[humanSelection][computerSelection];
  if (result == "win") {
    humanScore++;
    humanScoreDisplay.textContent = `Player score: ${humanScore}`;
    const display = document.querySelector("section");
    const displayChoice = document.querySelector("#displayChoices");
    displayChoice.textContent = `You Win ${humanSelection} beats ${computerSelection}`;
    display.appendChild(displayChoice);
  } else if (result == "lose") {
    console.log("You Lose! " + computerSelection + " beats " + humanSelection);
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    const display = document.querySelector("section");
    const displayChoice = document.querySelector("#displayChoices");
    displayChoice.textContent = `You lose ${computerSelection} beats ${humanSelection}`;
    display.appendChild(displayChoice);
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
  if (humanScore == 5) {
    const displayHumanWinner = document.querySelector("section");
    const displayWinnerText = document.createElement("h1");
    displayWinnerText.classList.add("displayWinnerText");

    displayWinnerText.textContent = "You Win, Winner Winner Chicken Dinner";
    displayHumanWinner.appendChild(displayWinnerText);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
  } else if (computerScore == 5) {
    const dsiplayComputerWin = document.querySelector("section");
    const displayLoserText = document.createElement("h1");
    displayLoserText.classList.add("displayLoserText");

    displayLoserText.textContent = "You Lose";
    dsiplayComputerWin.appendChild(displayLoserText);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorButton.addEventListener("click", () => playRound("scissors"));
