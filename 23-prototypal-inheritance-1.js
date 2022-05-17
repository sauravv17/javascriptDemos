var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

console.log(person);
console.log(john);

//This is only for demo, NEVER DO THIS
john.__proto__ = person;

console.log(john.getFullName());

var jane = {
  firstname: "Jane",
};

//This is only for demo(__proto__), NEVER DO THIS
jane.__proto__ = person;
console.log(jane.getFullName());

person.getFormalFN = function () {
  return this.lastname + "," + this.firstname;
};

console.log(jane.getFormalFN());
console.log(john.getFormalFN());
