const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/about":
      res.write("<h1>Welcome to about </h1>");
      break;
    case "/contact":
      res.write("<h1>Welcome to Contatct </h1>");
      break;
    default:
      res.write("<h1>Welcome to default </h1>");
      break;
  }
  res.end();
});

server.listen(5010, () => {
  console.log("Challla do gaddi highway pe...");
});
