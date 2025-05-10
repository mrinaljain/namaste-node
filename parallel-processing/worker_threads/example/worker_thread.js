import { parentPort, workerData } from "worker_threads";



// heavy function 

 function heavyFunction(x){
   let ans = x;
      for (let i = 0; i < x * 1e6; i++) {
        ans = ans + i;
      }
   return ans;

 }

 parentPort.postMessage(heavyFunction(workerData.input));