import { Worker } from "worker_threads";


// Spawns a new thread running the file you specify
const thread = new Worker(
  "./parallel-processing/worker_threads/example/worker_thread.js",
  {
    workerData: { input: 20 },
  }
);


console.log("Worker thread " + thread.threadId + " apna kaam kr rah hai ....");

thread.on("message", (data) => {
  console.log(data);
});

thread.on("error",(err)=>{
   console.log(err.message);
   
});

// to stop the thread at any time
thread.terminate();	