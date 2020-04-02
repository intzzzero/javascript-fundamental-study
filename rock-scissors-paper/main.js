/*
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Just input rock, paper, scissors please');
  }
}

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 2) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Win!';
    } else if (computerChoice === 'scissors') {
      return 'You Win!';
    }
  }
    
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You Win!';
    } else if (computerChoice === 'rock') {
      return 'Computer Win!';
    }
  }
    
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Win!';
    } else if (computerChoice === 'scissors') {
      return 'Computer Win!';
    }
  }
}

// test
// determineWinner(getUserChoice('rock'), getComputerChoice());

const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('paper');
