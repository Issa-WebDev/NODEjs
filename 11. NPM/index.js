import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-type": "text/html" });
  res.end("<h1> nodemon is so power and awesome ==> next</h1>");
});

server.listen(8100, () => console.log("Server Up and running on port 8100"));
