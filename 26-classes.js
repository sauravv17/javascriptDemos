class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    return "Hi " + this.firstname;
  }
}

var john = new Person("john", "doe");
console.log(john);
console.log(john.greet());

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return "Hola " + this.firstname;
  }
}

var mary = new InformalPerson("Mary", "Doe");
console.log(mary.greet());

var a = 3;
console.log(typeof a);

var a = "hello";
console.log(typeof a);

var a = {};
console.log(typeof a);

var a = [];
console.log(typeof a);

console.log(typeof john);
console.log(john instanceof Person);
