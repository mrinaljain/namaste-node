import http from "http";
import { Worker } from "worker_threads";
const server = http.createServer((req, res) => {
  const worker = new Worker("./child_process.js");
  // ! handeling CORS
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ greetings: "Hello World" }));
      break;
    case "/slow":
      worker.on("message", (j) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ data: j }));
      });

      break;
    default:
      res.write("<h1>Welcome to default </h1>");
      res.end();
      break;
  }
});
const port = 8080;
server.listen(port, () => {
  console.log(`Challla do gaddi highway pe  http://localhost:${port}`);
});
