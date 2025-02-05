import http from "http";
const PORT = 1000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Found", { "Content-Type": "text/html" });
    res.end("<h1>HOME</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "Found", { "Content-Type": "text/html" });
    res.end("<h1>ABOUT</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "Found", { "Content-Type": "text/html" });
    res.end("<h1>CONTACT</h1>");
  } else {
    res.writeHead(404, "Not Found", { "Content-Type": "text/html" });
    res.end("<h1 style='color: red;'>404 NOT FOUND</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`server up`);
});
