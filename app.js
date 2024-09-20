// var md = require("./module.js");

// Common JS way of importing module
// var { calculateSum, x } = require("./sum.js");

// MJS way of importing module
// import def, { calculateSum } from "./sum.js";

var { calculateMult, calculateSum } = require("./folder");
var name = "namaste node";
var a = 10;
var b = 20;

// console.log(name + def);
// console.log(a + b);
// calculateSum(a, b);
// console.log(global);
// console.log(this);
// console.log(globalThis);

function testModule(a) {
  var z = 10;
  var b = 20;
  function innerTest() {
    console.log(a + b);
  }

  return innerTest;
}

testModule(100)();
