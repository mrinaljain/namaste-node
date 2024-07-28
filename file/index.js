const fs = require("fs");

// Read data from a file
const data = fs.readFileSync("./file.txt", "utf8");

console.log(data);

// Write data to a file

// fs.appendFileSync("./file.txt", "Appended from outside");

const updatedData = fs.readFileSync("./file.txt");

console.log(updatedData.toString());

// create a new directory and file
// fs.mkdirSync("dynamic");
fs.writeFileSync("./dynamic/dynamic.txt", "this is dynamically created file");

// copying

fs.copyFileSync("./dynamic/dynamic.txt", "../file/new.txt");
