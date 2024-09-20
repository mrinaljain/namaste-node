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
//!Blocking the main thread
console.log("blocked till main thread is free");
crypto.pbkdf2Sync("passsword", "salt", 99454545, 64, "sha512");

console.log("main thread is free now");

add(10, 20);
