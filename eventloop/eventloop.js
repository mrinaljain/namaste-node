const fs = require("node:fs");

const a = 100;
function promis() {
  const pr = new Promise((res, rej) => {
    res("Promise resolved");
  });
  return pr;
}
setImmediate(() => {
  console.log("setImmediate : Do this Immediatly,");
});

promis().then((data) => {
  console.log(data);
});

fs.readFile("../operations/file.txt", "utf8", (err, data) => {
  console.log("File Read operation");
  console.log(data);
});

setTimeout(() => {
  console.log("SetTimeout: of 0 second");
}, 0);

process.nextTick(() => {
  console.log("Process nexttick");
});

function printA() {
  console.log(`A = ${a}`);
}

printA();

console.log("Last line of the file");
