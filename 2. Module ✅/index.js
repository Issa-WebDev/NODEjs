const { a, moyen } = require("./moyen");
const { jhonNotes, issaNotes, sylaNotes } = require("./students");

console.log(a);

const jhonMoyen = moyen(jhonNotes);
const issaMoyen = moyen(issaNotes);
const sylaMoyen = moyen(sylaNotes);

console.log(`Jhon : ${jhonMoyen}`);
console.log(`Issa : ${issaMoyen}`);
console.log(`Syla : ${sylaMoyen}`);
