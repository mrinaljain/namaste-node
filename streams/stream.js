import fs from "node:fs";

//Example Usage of stream for moving content of one file to another in chunks using stream

//1 . Create a redable stream from the file where data will be read from.
//2 . Create a writable stream from the file where data will be written
//3 . listen to the "data" event of the readable stream and writd data on writable stream.

let readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

let writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
