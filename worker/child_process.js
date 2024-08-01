import { parentPort } from "worker_threads";
var j = 0;

for (let i = 0; i < 99999999; i++) {
  j = i;
}

parentPort.postMessage(j);
