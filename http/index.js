// const http = require("http");
import http from "http";

const server = http.createServer((req, res) => {
  // ! handeling CORS
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  // ! handeling CORS
  switch (req.url) {
    case "/about":
      res.statusCode = 555;
      res.write("<h1>Welcome to about </h1>");
      break;
    case "/contact":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ greetings: "Hello World" }));
      break;
    default:
      res.write("<h1>Welcome to default </h1>");
      break;
  }
  //! Error handeling
  req.on("error", (err) => {
    console.log("Request error occurred :>> ", err);
    res.statusCode = 400;
    return res.end("Bad Request!");
  });

  res.on("error", (err) => {
    console.log("Response error occurred :>> ", err);
    res.statusCode = 500;
    return res.end("Internal Server Error!");
  });
  res.end();
});
const port = 5010;
server.listen(port, () => {
  console.log(`Challla do gaddi highway pe  http://localhost:${port}`);
});
