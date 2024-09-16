// This will allows us to use that function from
// that (greet.js) file, and we can use it right here.
const greet = require("./greet");
const { p1, p2, p3 } = require("./person");

greet(p1);
greet(p2);
greet(p3);

console.log("=========================================");
console.log(p1);
console.log(p2);
console.log(p3);
