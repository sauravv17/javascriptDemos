function a() {
  function b() {
    console.log(myvar);
  }

  myvar = 2;
  console.log(myvar);
  b();
}
var myvar = 1;
a();
