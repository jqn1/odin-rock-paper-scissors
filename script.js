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




function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound(getHumanChoice,getComputerChoice) {
    console.log("Player -> ",getHumanChoice);
    console.log("Computer -> ",getComputerChoice);
    switch (getHumanChoice) {
      case "rock":
        if (getComputerChoice === "paper") {
          computerScore++;
          console.log("You lose! ",getComputerChoice," beats ",getHumanChoice)
        } else if (getComputerChoice === "scissors") {
            humanScore++;
            console.log("You win! ",getHumanChoice," beats ",getComputerChoice)
        } else {
          console.log("Draw");
        }
        break;

      case "paper":
        if (getComputerChoice === "scissors") {
          computerScore++;
          console.log("You lose! ",getComputerChoice," beats ",getHumanChoice)
        } else if (getComputerChoice === "rock") {
            humanScore++;
            console.log("You win! ",getHumanChoice," beats ",getComputerChoice)
        } else {
          console.log("Draw");
        }
        break;
      
      case "scissors":
        if (getComputerChoice === "rock") {
          computerScore++;
          console.log("You lose! ",getComputerChoice," beats ",getHumanChoice)
        } else if (getComputerChoice === "paper") {
            humanScore++;
            console.log("You win! ",getHumanChoice," beats ",getComputerChoice)
        } else {
          console.log("Draw");
        }
        break;

      default:
        break;
    }
    
  }
  playRound(getHumanChoice(),getComputerChoice())
  console.log("")
  playRound(getHumanChoice(),getComputerChoice())
  console.log("")
  playRound(getHumanChoice(),getComputerChoice())
  console.log("")
  playRound(getHumanChoice(),getComputerChoice())
  console.log("")
  playRound(getHumanChoice(),getComputerChoice())

 
}
playGame()
