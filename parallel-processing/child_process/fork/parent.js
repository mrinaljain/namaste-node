import { fork } from "child_process";

let child = fork("./parallel-processing/child_process/fork/child.js");

child.send({ msg: "Hello from Parent..!" });

// listening from child

child.on("message", (data) => {
  console.log(`Message: ${data.reply}`);
});
