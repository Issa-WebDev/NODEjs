// Routing
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    res.end("<h1>HOME<a href='/contact'>go to contact page</a></h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    res.end("<h1>ABOUT SECTION</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "Good", { "Content-type": "text/html" });
    res.end("<h1>ABOUT CONTACT</h1>");
  } else {
    res.writeHead(404, "BAB", { "Content-type": "text/html" });
    res.end("<h1>404 PAGES NOT FOUND :(</h1>");
  }
});

server.listen(5000, () => console.log("Server Up!"));
