const fs = require("node:fs");

const a = 100;
setImmediate(() => {
  console.log("setImmediate ( OUTSIDE ): Do this Immediatly,");
});
setTimeout(() => {
  console.log("SetTimeout ( OUTSIDE ): of 0 second");
}, 0);

Promise.resolve("Promise resolved..!").then((data) => {
  console.log(data);
});

fs.readFile("../operations/file.txt", "utf8", (err, data) => {
  setTimeout(() => {
    console.log("SetTimeout  ( INSIDE ): of 0 second");
  }, 0);

  process.nextTick(() => {
    console.log("Process nexttick  ( INSIDE )");
  });
  setImmediate(() => {
    console.log("setImmediate  ( INSIDE ): Do this Immediatly,");
  });
  console.log("File Read operation");
  console.log(data);
});

process.nextTick(() => {
  console.log("Process nexttick ( OUTSIDE )");
});

function printA() {
  console.log(`A = ${a}`);
}

printA();

console.log("Last line of the file");

// Explaination
// In case of function chaining theentry and exit point is same ,  do not reset the event loop
