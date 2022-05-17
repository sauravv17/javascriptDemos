var arr1 = [1, 2, 3];
console.log(arr1);

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);

//loop array and store
function mapForEach(arr, fn) {
  var newarr = [];
  for (var i = 0; i < arr1.length; i++) {
    newarr.push(fn(arr[i]));
  }
  return newarr;
}

//add 2 to each element
console.log(
  mapForEach(arr1, function (item) {
    return item + 2;
  })
);

//multiply 2 to each element
console.log(
  mapForEach(arr1, function (item) {
    return item * 2;
  })
);
