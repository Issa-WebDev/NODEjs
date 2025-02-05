// PATH MODULE
import path from "path";

//basename() => just give the last portion of this path (index.js)
// console.log(path.basename("c:\\nodejs\\app.html"));
// console.log(path.basename("c:\\nodejs\\app.js", ".js"));

// To get directory name
// console.log(path.dirname("c:\\nodejs\\app.html"));

// To get extention
// console.log(path.extname("c:\\nodejs\\app.html"));

// To join and create path
console.log(path.join("c:", "nodejs", "app.html"));
console.log(path.join("c:", "nodejs", "app.html", ".."));
console.log(path.join("c:", "nodejs", "app.html", "..", ".."));

// normalize (refactor) the ugly path
// console.log(path.normalize("c:\\nodejs\\name\\cool"));

// const paths = path.parse("c:\\nodejs\\app.html");
// console.log(paths);

// console.log(paths.root);
// console.log(paths.dir);
// console.log(paths.base);
// console.log(paths.name);
// console.log(paths.ext);

const paths = "c:/courses/nodejs/index.js";
console.log(path.normalize(paths));
const pathParsed = path.parse(paths);
console.log(pathParsed.root);
console.log(pathParsed.dir);
console.log(pathParsed.base);
console.log(pathParsed.name);
console.log(pathParsed.ext);
console.log(pathParsed);
