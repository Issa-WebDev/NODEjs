import http from "http";
import fs from "fs";
const PORT = 1111;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./home.html", (err, data) => {
      err ? console.log(err) : res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./about.html", (err, data) => {
      err ? console.log(err) : res.end(data);
    });
  } else {
    res.end("<h1 style='color: red;'>404 PAGE NOT FOUND :(</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is Up on http://localhost:${PORT}`);
});
