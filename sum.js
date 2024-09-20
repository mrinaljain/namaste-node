let def = 20;
export default def;

function calculateSum(a, b) {
  let sum = a + b;

  console.log(sum);
}

//CJS pattern for exporting
// module.exports = { calculateSum: calculateSum, a: a };

// MJS pattern for Exporting (named export)
export { calculateSum };
