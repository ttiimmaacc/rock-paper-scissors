const startGameBtn = document.getElementById('start-game-btn');

// function startGame() {
//   console.log('Game is starting...');
// }
// Standalone function statement

const start = function() {
  console.log('Game is starting...');
};
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

startGameBtn.addEventListener('click', start);
