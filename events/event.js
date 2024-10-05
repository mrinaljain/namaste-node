import EventEmitter from "events";
// const EventEmitter = require("node:events");
let emitter = new EventEmitter();
console.log("First Line of the page");
// listening  to an event
emitter.on("pizza-party", (prop1, prop2) => {
  console.log(`Listening to  pizza party and we will make ${prop1} , ${prop2}`);
});

console.log("Do this before emmiting event");

// Registering an event
emitter.emit("pizza-party", "halwa", "puri");

console.log("Last Line of the page");
