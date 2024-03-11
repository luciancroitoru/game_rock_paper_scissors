console.log(`Rock, Paper, Scissors. Let the game begin...`);

// array with 3 options for the buttons
let array = [`Rock`, `Paper`, `Scissors`];
let userChoice;
let result = ``;
// selection of display element
const displayAnswer = document.querySelector(`#display-answer`);

const generateNumber = () => Math.floor(Math.random() * 3);
let computerChoice;
// play function implementation
function play(event) {

  userChoice = event.target.textContent;
  // saves user choice string for display purpose
  let userString = `${userChoice}`;
  computerChoice = array[generateNumber()];

  // console log for testing purposes. if a new play function call gives the same result, the UI will not change,
  // but the console will log the new game.
  console.log(userChoice);
  console.log(computerChoice);

  extractStringFromUserButton();
  verifyResult();
  prepareComputerStringForDisplay();
  //displays outcome of the game in the UI
  displayAnswer.textContent = `Your choice: ${userString}. Computer choice: ${computerChoice}. ${result}`;
}

function extractStringFromUserButton() {
  //extracts substrings for comparison
  if (userChoice.includes("Rock")) {
    userChoice = `Rock`;
  } else if (userChoice.includes("Paper")) {
    userChoice = `Paper`;
  } else {
    userChoice = `Scissors`;
  }
}

function verifyResult() {
  // if else conditional statement
  if (userChoice === computerChoice) {
    result = `It's a tie!`;
  } else if (userChoice === `Rock`) {
    if (computerChoice === `Paper`) {
      result = `Computer wins!`;
    } else {
      result = `You win!`;
    }
  } else if (userChoice === `Paper`) {
    if (computerChoice === `Rock`) {
      result = `You win!`;
    } else {
      result = `Computer wins!`;
    }
  } else if (userChoice === `Scissors`) {
    if (computerChoice === `Paper`) {
      result = `You win!`;
    } else {
      result = `Computer wins!`;
    }
  }
}

function prepareComputerStringForDisplay() {
  //prepares computer choice string for display
  if (computerChoice.includes("Rock")) {
    computerChoice = `Rock ✊`;
  } else if (computerChoice.includes("Paper")) {
    computerChoice = `Paper 🖐`;
  } else {
    computerChoice = `Scissors ✌`;
  }
}