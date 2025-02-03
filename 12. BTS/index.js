import fs from "fs/promises";

console.log("start");

// boccking code
// const data = fs.readFileSync("text.txt", "utf-8");
// console.log(data);

// non boccking code with callback
// fs.readFile("tex.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// non boccking code with async/ await
async function readData() {
  try {
    const data = await fs.readFile("text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readData();

console.log("end");
