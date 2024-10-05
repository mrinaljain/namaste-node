// bufffer jo hai vo running information store kr k rakhta hai
// buffer has limited space once created

const customBuffer = new Buffer.alloc(6, "Mrinal", "utf-8");

console.log(customBuffer);
// <Buffer 4d 72 69 6e 61 6c>

console.log(customBuffer.toString());
// Mrinal

console.log(customBuffer.toJSON());
// { type: 'Buffer', data: [ 77, 114, 105, 110, 97, 108 ] }
