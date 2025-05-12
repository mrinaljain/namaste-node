// cluster.js
import cluster from "node:cluster";
import os from "node:os";

if (cluster.isPrimary) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  import("./before.js");
}
