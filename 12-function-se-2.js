function log(a) {
  console.log(a);
}

var b = 3;
// log(b);
// log(9);
// log('hello');
// log({ greeting: 'hi' });

// log(function () {
//   console.log('x');
// });

// log(() => {
//   console.log('arrow function');
// });

function b() {
  console.log("printing b");
}

// param is a function
function log2(x) {
  x();
}

var justPrint = () => {
  console.log("functions are objects");
};

log2(() => {
  console.log("functions are objects");
});
