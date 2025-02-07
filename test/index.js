import fs from "fs";
// const stream = createReadStream("./data.js", {highWaterMark: 90000});

const stream = fs.createReadStream("./data.js", { encoding: "utf-8" });

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("lecture terminer");
});

stream.on("error", (err) => {
  console.log(err);
});
