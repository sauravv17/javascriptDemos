// IIFE - Immediately invoked function expression

var greet = (function () {
  console.log("hello there");
})();

// console.log(greet);

// IIFE
var greet2 = (function (name) {
  return "Hola " + name;
})("Manny");

console.log(greet2("Carlos"));
// console.log(greet2);
