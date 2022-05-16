var mary = {
  firstname: "Mary",
  developer: true,
};

console.log(mary);
console.log(JSON.stringify(mary)); //form json object to string

var response = '{"firstname":"Julie" ,"developer" :true}';
var julie = JSON.parse(response); //from string to json object
console.log(julie);
