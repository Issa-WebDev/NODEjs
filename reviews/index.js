// http server
import http from "http";

// console.log(http);
const server = http.createServer((req, res) => {
  // console.log(res);
  // console.log(req);
  // res.statusCode = 200;
  // res.statusMessage = "GOOD";
  // res.setHeader("Content-type", "text/html");

  //   Shotland status (code, message, setHeader)
  res.writeHead(404, "BAD", { "Content-type": "text/html" });
  res.write("<h1>This is my Node.js SERVER!");
});

server.listen(8000, () => console.log("Server Up!"));
