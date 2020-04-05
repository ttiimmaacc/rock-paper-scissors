const startGameBtn = document.getElementById('start-game-btn');

// function startGame() {
//   console.log('Game is starting...');
// }
// Standalone function statement

// const start = function() {
//   console.log('Game is starting...');
// };
// Anonymous function expression
// The function keyword can be used to define a function inside an expression. Stores a function inside a variable.

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };
// Basic function stored in an object is called a method.
// Method is just a function attached to an object

// person.greet();
// call a function as a method

// console.dir(startGame);
// a function, while having its own type is an Object
// which would then make functions a Reference type and be stored in the heap
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
// Global constants used inplace of strings to avoid typos

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  // prompts for user input and then converts string to capital case
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ){
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return;
    // Returns Undefined if the user didnt choose anything & stops excution
  }
  return selection;
  //Wont ex
};
// if not equal to rock, and not equal to paper and not equal to scissors, alert user and return default value of rock or return user selection

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34){
    return ROCK;
  } else if (randomValue < 0.67){
    return PAPER;
  } else {
    return SCISSORS;
  }
};
//  generates computers choice

// const getWinner = (cChoice, pChoice) => {
//   if (cChoice === pChoice){
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };
// If statement block

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE ) => {
    return cChoice === pChoice
    ? RESULT_DRAW
    :(cChoice === ROCK && pChoice === PAPER) ||
     (cChoice === PAPER && pChoice === SCISSORS) ||
     (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};
// Ternary Expression

// compares user and computer choice then determines who wins
// Operator precedence will evaluate the && expression

// Default Aruguments, Allow you to set a default value and call the function with only one arg.

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  // check if game is running and stop starting ew game on click
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice(); // might be Undefined
  // Calls variable function and stores value in a new local constaint of the anonymous function
  const computerChoice = getComputerChoice();
  // Stores computers choice in a local const
  let winner;
  if (playerSelection){
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
    // passing value undefined or omitting the second arg value will then use the default value
  }

  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE }, computer picked ${computerChoice}, therefore you `;
  // if playerSelection returns as truthy use value OR use DEFAULT_USER_CHOICE value, this will stop it returning undefined
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS){
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});
// On the fly, Anonymous function - for use when you will never need to use the function inside of your code again.
// function takes a function as an argument
