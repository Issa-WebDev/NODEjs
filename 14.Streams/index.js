// streams
// streams in node js
import { createReadStream } from "fs";
// const stream = createReadStream("./data.js", {highWaterMark: 90000});

const stream = createReadStream("./data.js", { encoding: "utf-8" });

stream.on("data", (data) => {
  console.log(data);
});
