function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("function person is invoked");
}

// console.log(Person);

var john = Person("john", "doe");
var john = new Person("john", "doe");

Person.prototype.getFN = function () {
  return this.firstname + " " + this.lastname;
};

console.log(john.getFN());

Person.prototype.getformalFN = function () {
  return this.lastname + "," + this.firstname;
};
console.log(john.getformalFN());

Person.prototype.isEligible = function (age) {
  if (age > 18) {
    return this.lastname + "," + this.firstname + " yes you can";
  } else {
    return this.lastname + "," + this.firstname + " no ";
  }
};

console.log(john.isEligible(10));

var jane = new Person("jane", "carter");
console.log(jane.isEligible(19));
