# Buffers in NODE

## Creating a Buffer
const customBuffer = new Buffer.alloc(6, "Mrinal", "utf-8");


- Printing buffer directl gives Hexadecimal representation of the characters of the string
### Flow of conversion 
- String --> Char --> via CharSet --> Character Code --> via Char encoding(utf-8) --> binary number --> Hexadecimal number  
console.log(customBuffer);
// <Buffer 4d 72 69 6e 61 6c>


- Printing
console.log(customBuffer.toString());
// Mrinal

console.log(customBuffer.toJSON());
// { type: 'Buffer', data: [ 77, 114, 105, 110, 97, 108 ] }