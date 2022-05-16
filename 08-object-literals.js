var person = {};

console.log(person);

var person = {};

var person = { firstname: "Alex", lastname: "Miller" };

console.log(person);

var john = {
  firstname: "John",
  lasname: "Miller",
  address: {
    street: "123 xyz st",
    city: "NY",
  },
};

console.log(john);

function greet(person) {
  console.log("Hi " + person.firstname);
}

greet(john);

greet({ firstname: "Mary" });

greet({ street: "x" });

greet(3);
