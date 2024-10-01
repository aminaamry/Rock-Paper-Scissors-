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
