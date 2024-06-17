//! inbuild modules of NODE
const path = require("path");

console.log(__filename);

// Delimiter and seperator
console.log("Delimiter", path.delimiter);
console.log("Seperator", path.sep);

// find relative path between 2 files
console.log(
  path.relative(
    "/Users/mrinaljain/Sites/namaste-node/new-file-2.txt",
    __filename
  )
);
// get extention name
console.log(path.extname(__filename));
