// callback fs
import * as fs from "fs";

fs.mkdir("c:\\Nodejs\\courses", { recursive: true }, (error) => {
  if (error) throw error;
  console.log("Directory Created...");
});

// { recursive: true } Allow us to create a new directory in unexisted directory
