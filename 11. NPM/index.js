import http from "http";
import fscb from "fs";
import fs from "fs/promises";
const PORT = 1000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fscb.readFile("home.html", "utf-8", (err, data) => {
      if (err) console.log(err);
      res.end(data);
    });
  } else if (req.url === "/about") {
    try {
      res.writeHead(200, "OK", { "Content-Type": "text/html" });
      const data = await fs.readFile("about.html", "utf-8");
      res.end(data);
    } catch (error) {
      console.log(error);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
