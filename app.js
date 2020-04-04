const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}
// Standalone function

// const person = {
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };
// Basic function stored in an object is called a method.
// Method is just a function attached to an object

// person.greet();
// call a function as a method

console.dir(startGame);

startGameBtn.addEventListener('click', startGame);
