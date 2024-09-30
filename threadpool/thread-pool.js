var os = require("node:os");
var crypto = require("node:crypto");
var fs = require("node:fs");

process.env.UV_THREADPOOL_SIZE = 2;
console.log(process.env.UV_THREADPOOL_SIZE);

fs.readFile("./file.txt", (err, data) => {
  console.log("1 FS complete");
});

crypto.pbkdf2("password", "salt", 525, 50, "sha512", () => {
  console.log("2 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("3 FS complete");
});

crypto.pbkdf2("password", "salt", 58558, 50, "sha512", () => {
  console.log("4 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("5 FS complete");
});

crypto.pbkdf2("password", "salt", 5858585, 50, "sha512", () => {
  console.log("5 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("6 FS complete");
});
crypto.pbkdf2("password", "salt", 52855, 50, "sha512", () => {
  console.log("7 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("8 FS complete");
});

crypto.pbkdf2("password", "salt", 55858, 50, "sha512", () => {
  console.log("9 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("10 FS complete");
});

crypto.pbkdf2("password", "salt", 58558, 50, "sha512", () => {
  console.log("4 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("5 FS complete");
});

crypto.pbkdf2("password", "salt", 5858585, 50, "sha512", () => {
  console.log("5 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("6 FS complete");
});
crypto.pbkdf2("password", "salt", 52855, 50, "sha512", () => {
  console.log("7 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("8 FS complete");
});

crypto.pbkdf2("password", "salt", 55858, 50, "sha512", () => {
  console.log("9 password encrypted");
});

fs.readFile("./file.txt", (err, data) => {
  console.log("10 FS complete");
});

// mongodb+srv://mrinal:spree12345@cluster0.5yymuvg.mongodb.net/
