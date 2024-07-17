const ITEMS = ["rock","paper","scissors"];

function getComputerChoice() {
  number = Math.trunc(Math.random() * 3) ;
  
  election = ITEMS[number];
  return election;
}

function getHumanChoice() {
  let election = ITEMS[parseInt(prompt("Type 1 to play rock\nType 2 to play paper\nType 3 to play scissors"))-1] ;
  return election;
}

function checkWinner(p1Score,p2Score,p1Name,p2Name) {
  if (p1Score === 5) {
    return p1Name;
  } else if (p2Score === 5) {
    return p2Name;
  }
}




let computerScore = 0;
let humanScore = 0;
function playRound(getHumanChoice,getComputerChoice,outcomeContainer) {
  if (computerScore === 5 || humanScore === 5) {
    computerScore = 0;
    humanScore = 0;
  }
  console.log("Player -> ",getHumanChoice);
  console.log("Computer -> ",getComputerChoice);
  switch (getHumanChoice) {
    case "rock":
      if (getComputerChoice === "paper") {
        computerScore++;
        outcomeContainer.textContent = "Computer scores! "+getComputerChoice+" beats "+getHumanChoice;
      } else if (getComputerChoice === "scissors") {
          humanScore++;
          outcomeContainer.textContent = "You score! "+getHumanChoice+" beats "+getComputerChoice;
      } else {
        outcomeContainer.textContent = ("Draw");
      }
      break;

    case "paper":
      if (getComputerChoice === "scissors") {
        computerScore++;
        outcomeContainer.textContent = "Computer scores! "+getComputerChoice+" beats "+getHumanChoice;
      } else if (getComputerChoice === "rock") {
          humanScore++;
          outcomeContainer.textContent = "You score! "+getHumanChoice+" beats "+getComputerChoice;
      } else {
        outcomeContainer.textContent = ("Draw");
      }
      break;
    
    case "scissors":
      if (getComputerChoice === "rock") {
        computerScore++;
        outcomeContainer.textContent = "Computer Scores! " +getComputerChoice+" beats " +getHumanChoice;
      } else if (getComputerChoice === "paper") {
          humanScore++;
          outcomeContainer.textContent = "You score! "+getHumanChoice+" beats "+getComputerChoice;
      } else {
        outcomeContainer.textContent = ("Draw");
      }
      break;

    default:
      break;
  }
  if (checkWinner(humanScore,computerScore,"Human","Computer")) {
    let winner = checkWinner(humanScore,computerScore,"Human","Computer")
    body.removeChild(options);
    const winnerMessage = document.createElement("div");
    const playAgain = document.createElement("button");
    winnerMessage.textContent = winner+" wins the game!!!";
    winnerMessage.style.fontWeight = "900";
    playAgain.textContent = "Play Again";
    body.appendChild(winnerMessage);
    body.appendChild(playAgain);
    playAgain.addEventListener("click", function() {
      location.reload(true);
    });

  }
}


const body = document.querySelector("body");
const options = document.querySelector(".options");
const result = document.querySelector(".result");
const computerScoreContainer = document.querySelector(".computerScoreContainer");
const humanScoreContainer = document.querySelector(".humanScoreContainer");
options.addEventListener("click",(event) => {
  let target = event.target;
  playRound(target.id,getComputerChoice(),result)
  computerScoreContainer.textContent = "Computer Score: "+computerScore;
  humanScoreContainer.textContent = "Human Score: "+humanScore;
}) 
