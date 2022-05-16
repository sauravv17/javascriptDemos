var arr1 = [];
var arr1 = [1, 2, 3];
console.log(arr1[0]);
console.log(arr1[1]);

var arr = [
  1,
  2,
  "hello",
  false,
  {
    name: "mark",
  },
  function (name) {
    var greeting = "hello";
    console.log(greeting + " " + name);
  },
];

console.log(arr);

arr[5](arr[4].name);
arr[5](arr[4]["name"]);
