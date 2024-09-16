// FS module
import * as fs from "fs/promises";

// Creating Directory / Folder
// try {
//   await fs.mkdir("c:\\index.js", {
//     recursive: true,
//   });
//   console.log("Folder Created ...");
// } catch (error) {
//   console.log(error);
// }

// Read the content of directory
// try {
//   const files = await fs.readdir("c:\\nodejs");

//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Folder / Directory (Should have to be empty)
// try {
//   await fs.rmdir("c:\\nodejs\\courses");
//   console.log("Folder Removed ...");
// } catch (error) {
//   console.log(error);
// }

// Create and Write Files
// try {
//   await fs.writeFile("README.md", "# Hello Nodejs");
// } catch (error) {
//   console.log(error);
// }

// remove file
// async function deleteFile() {
//   try {
//     await fs.unlink("app.md");
//     console.log("files deleted...");
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteFile();


// Read File
// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Appending the data
// try {
//   await fs.appendFile("README.md", "Issa is also the best Programmer");
// } catch (error) {
//   console.log(error);
// }

// Copy File
// try {
//   await fs.copyFile("README.md", "info.txt");
//   console.log("File Copied ...");
// } catch (error) {
//   console.log(error);
// }

// Get File Information
try {
  const info = await fs.stat("info.txt");
  // console.log(info);
  console.log(info.isFile());
  console.log(info.isDirectory());
} catch (error) {
  console.log(error);
}
