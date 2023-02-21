console.log("JavaScript tutorial 3:let,var,const");

let a = "zeeshan";
let b = 18;
var c = null;
var d = undefined;
const author = "zeeshan ";  // throws an error if const changed 
console.log(author);
{
  let b = "this";
  console.log(b);
}
console.log(b);
