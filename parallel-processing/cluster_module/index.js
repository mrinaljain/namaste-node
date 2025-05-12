import cluster from "cluster";
import http from "http";
import os from "os";

//this will help us create diffrent workers
// workers will work independently on there individual tasks
// no connection with the master
console.log(os.cpus().length);
if (cluster.isPrimary) {
  console.log("Master cluster running ..." + process.pid);
  cluster.fork();
  cluster.fork();
} else {
  console.log("Workers(child processes) cluster running ..." + process.pid);

  const server = http.createServer((req, res) => {
    switch (req.url) {
      case "/normal":
        res.write("Hello Normal Page");
        console.log(process.pid);
        res.end();
        break;
      case "/slow":
        for (let i = 0; i < 999999999999; i++) {}
        res.write("Hello Slow Page");
        console.log(process.pid);
        res.end();
        break;
      default:
        break;
    }
  });

  server.listen(8000, () => console.log("server is running"));
}
