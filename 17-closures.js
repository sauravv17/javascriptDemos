function greet(saywhat, name) {
  return saywhat + " " + name + "!!";
}

console.log(greet("Welcome", "Barry"));

function greet(message) {
  return function (name) {
    console.log(message + " " + name + "!!");
  };
}

var sayhi = greet("Say Hi");
sayhi("Alex");

var saywelcome = greet("Welcome");
saywelcome("Tony");
