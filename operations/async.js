// Async non blocking io

// int thhis we can se example of nonblocking I/O as the final console is not blocked by th read file operation, because readfile to libUV k pass offload kr diya gaya hai.

const fs = require("node:fs");

console.log("Welcome to operations..!");
function multByTwo(x) {
  console.log(`2 Multiply by ${x} is:  ${x * 2}`);
}

// Non blocking i/o call ( this will not block calls  written bellow this line)
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(data);
});
console.log("Line after read file");

setTimeout(() => {
  console.log("Settimeout after 5 second");
}, 5000);
multByTwo(5);
