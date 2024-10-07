# Cluster

![Cluster](https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png)

Clustering works on the concept of child proceses, which processed to be specific.

- Cluster module allows us to run multiple instances on Node on the same machine depending on it CPU capacity.

- Master Process creates multiple child proceses .

```
import cluster from "node:cluster";
import os from "node:os";

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  import("./task.js");
}
```