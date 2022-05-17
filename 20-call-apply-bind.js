var person = {
  firstname: "john",
  lastname: "doe",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var logname = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1, lang2);
};

var myboundfunc = logname.bind(person);

myboundfunc("en", "es");

var xyz = {
  getFullName: function () {
    return "David Miller";
  },
};

myboundfunc = logname.bind(xyz);
myboundfunc("hindi", "telugu");

logname.call(person, "Tamil", "Marathi");

logname.apply(person, ["Urdu", "Arabic"]);
