let humanScore=0;
let computerScore=0;
let winner= "";

function playRound(humanScore, computerScore){
  if(
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
          humanScore++;
          winner= "human";
      }
  else if(
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors")
  ) {
      computerScore++;
       winner= "computer";
  }
  else{
      winner="tie";
  }
  updateScoreMessage(roundWinner, humanChoice, computerChoice);
  // console.log(computerScore);
  // console.log(humanScore);
  // console.log(roundWinner); 
}

function getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
      }
}
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}
//UI
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const humanScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const humanSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//Events
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
}

function playRound(humanScore, computerScore){
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
            humanScore++;
            winner= "human";
        }
    else if(
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        computerScore++;
         winner= "computer";
    }
    else{
        winner="tie"; 
    }
}
function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }

  function updateScoreMessage(winner, humanSelection, computerSelection) {
    if (winner === "tie")
      scoreMessage.textContent = `It's a tie! Both selected ${humanSelection}`;
    else if (winner === "human")
      scoreMessage.textContent = ` ${humanSelection} beats ${computerSelection}`;
    else if (winner === "computer")
      scoreMessage.textContent = ` ${humanSelection} is beaten by ${computerSelection}`;
  }
  
function playGame(humanChoice) {
    if (isGameOver()) {
      alert("Game over!");
      restartGame();
    }
  
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateChoices(humanChoice, computerChoice);
    updateScoreInfo();
  }
function isGameOver() {
    return playerScore === 5 || computerScore === 5;
  }

  function updateChoices(humanChoice, computerChoice) {
    switch (humanChoice) {
      case "rock":
        humanSign.textContent = "✊";
        break;
      case "paper":
        humanSign.textContent = "✋";
        break;
      case "scissors":
        humanSign.textContent = "✌";
        break;
    }
    switch (computerChoice) {
      case "rock":
        computerSign.textContent = "✊";
        break;
      case "paper":
        computerSign.textContent = "✋";
        break;
      case "scissors":
        computerSign.textContent = "✌";
        break;
    }
  }

  function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundWinner = "";
    scoreInfo.textContent = "";
    scoreMessage.textContent = "";
    humanScorePara.textContent = "Player: 0";
    computerScorePara.textContent = "Computer: 0";
    humanSign.textContent = "❔";
    computerSign.textContent = "❔";
  }