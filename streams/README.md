# Streams
Streams are a type of interface in nodejs which help us to move data which is in chunks from one source to another. 

## Types of streams
- Readable Stream
- Writable Stream
- Duplex Stream 
- Transform Stream

![Ecamples](https://cdn-media-1.freecodecamp.org/images/1*lhOvZiDrVbzF8_l8QX3ACw.png?raw=true)


## Example Usage of stream for moving content of one file to another in chunks using stream

```
let readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

let writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
```
