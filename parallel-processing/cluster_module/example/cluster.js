import cluster  from "cluster";
import os from "os";


if(cluster.isPrimary){
  let cores = os.cpus().length;
  console.log(`Master process running. Spawning ${cores} workers...`);

  for (let i = 1; i < cores; i++) {
    cluster.fork();
  }

  // Listen for worker exit
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
}else{


   makeHeavy();
   // heavy tasks
   function makeHeavy(){
      console.log(process.pid);
      for (let i = 0; i < 99999; i++) {
         
      }
      console.log("long task done");
      
   }
}