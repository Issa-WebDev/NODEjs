import http from "http";

// Create my server
const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.setHeader("Content-type", "text/html")
  //   res.statusCode = 404;
  //   res.statusMessage = "BAB";
  // shothand for status code (code, message & header)
  //   res.writeHead(200, "GOOD", { "Content-type": "text/html" });
  //   res.write("<h1> Hello from Node.js Server! </h1>");
  //   res.end("<h1> Hello from Node.js Server! </h1>");
});

server.listen(8000, () => console.log("Server Up!"));
