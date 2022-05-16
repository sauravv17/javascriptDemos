console.log(this);

var a = 2;

// console.log(this.a);

var b = function () {
  console.log(this);
  this.vehicle = "car";
};

// b();

// console.log(vehicle);

var julie = {
  firstname: "julie",
  lastname: "Mary",
  greet: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

julie.greet();
