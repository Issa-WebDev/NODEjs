import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "Ok", { "Contebt-Type": "text/html" });
  res.end("<h1>NODE JS SERVER PAGES</h1>")
});

server.listen(1000, () => console.log('server is up'))
