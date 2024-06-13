/* Defines container*/
const container = document.querySelector(".container");

/*Creates 3 button elements to handle Selection*/
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

/* Assign labels for each Selection*/
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

/* Add class "button" to the 3 Selections for CSS applications*/
rock.classList.add("button");
paper.classList.add("button");
scissors.classList.add("button");

/* Append Selections to Container div*/
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener('click', function(onClick) {
  if (computerScore < 5 && humanScore < 5) {
    playGame('rock');
  }
})





let humanScore = 0;
let computerScore = 0;

/*function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?: ");
  return choice;
}*/

function getComputerChoice() {
  let temp = Math.floor(Math.random() * 3) + 1;
      
  switch (temp) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playGame(humanChoice) {
  let computerSelection = getComputerChoice();
  let humanSelection = humanChoice;

  playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();

      if (humanChoice == computerChoice) {
        console.log(`You both used ${humanChoice}. This round is a tie.`);
      } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log('The computer beats rock with paper. The computer wins this round.');
        computerScore++;
      } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log('You beat scissors with rock. You win this round.');
        humanScore++;
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log('You beat paper with scissors. You win this round.');
        humanScore++;
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log('The computer beats scissors with rock. The computer wins this round.');
        computerScore++;
      } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log('You beat rock with paper. You win this round.');
        humanScore++;
      } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log('The computer beats paper with scissors. The computer wins this round.');
        computerScore++;
      } else {
        console.log('That was not valid input.');
      }
      
      if (humanScore >= 5) {
        console.log('');
        console.log('You win with 5 points!');
      } else if (computerScore >= 5) {
        console.log('');
        console.log('You lose... the computer reached 5 points first.');
      }
    }
}

/*playGame();*/