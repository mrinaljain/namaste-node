const fs = require("node:fs");
const crypto = require("node:crypto");

console.log("Helllo World..!");

function add(a, b) {
  console.log(a + b);
}
// Synchronous blocking I/O call

const data = fs.readFileSync("./file.txt", "utf8");
console.log("Line after sync call is done");
console.log(data);

add(10, 20);
