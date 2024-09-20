const fs = require("node:fs");

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
  console.log("File Read operation");
  console.log(data);
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("Process nexttick  ( INSIDE )");
  });
  console.log("Process nexttick  ( OUTSIDE )");
});

console.log("Last line of the file");

// Explaination
// NextTick chaining has the highest priorty above anything
