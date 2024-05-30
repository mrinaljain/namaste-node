const fs = require("fs");

// const data = fs.readFileSync("file.txt");
// fs.readFile("file.txt", (err, data) => {
//   console.log("" + data);
// });
// console.log("File" + data);

//! Write data

// const content = " New content of file..!";
// fs.writeFile("file.txt", content, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file modiified");
// });

//! Rename File
fs.rename("new-file.txt", "new-file-2.txt", (err) => {
  if (err) {
    console.log("File can not be renamed");
  }
  console.log("File renamed successfully");
});

//! make directory
