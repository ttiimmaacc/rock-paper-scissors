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
// Global constants used inplace of strings to avoid typos

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK},${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  // prompts for user input and then converts string to capital case
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ){
    alert(`Invalid choice! We chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}
// if not equal to rock, and not equal to paper and not equal to scissors, alert user and return default value of rock or return user selection

startGameBtn.addEventListener('click', function(){
  if (gameIsRunning) {
    return;
  }
  // check if game is running and stop starting ew game on click
  gameIsRunning = true;
  console.log('Game is starting...')
  const playerSelection = getPlayerChoice();
  // Calls variable function and stores value in a new local constaint of the anonymous function
  console.log(playerSelection);
});
// On the fly, Anonymous function - for use when you will never need to use the function inside of your code again.
// function takes a function as an argument
