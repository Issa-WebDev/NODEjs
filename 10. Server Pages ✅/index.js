import fs from "fs/promises";
import http from "http";

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      const data = await fs.readFile(
        "./10. Server Pages ✅/home.html",
        "utf-8"
      );
      res.writeHead(200, "OK", { "Content-type": "text/html" });
      res.end(data);
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
    }
  } else if (req.url === "/about") {
    try {
      const data = await fs.readFile(
        "./10. Server Pages ✅/about.html",
        "utf-8"
      );
      res.writeHead(200, "OK", { "Content-type": "text/html" });
      res.end(data);
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
    }
  } else if (req.url === "/contact") {
    try {
      const data = await fs.readFile(
        "./10. Server Pages ✅/contact.html",
        "utf-8"
      );
      res.writeHead(200, "OK", { "Content-type": "text/html" });
      res.end(data);
    } catch (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
    }
  } else {
    res.writeHead(404, "BAB", { "Content-type": "text/html" });
    res.end("<h1 style='color: red;'> PAGES NOT FOUND :(</h1>");
  }
});

server.listen(8100, () => console.log("Server Up and Running on Port 8100!"));
