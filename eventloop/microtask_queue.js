process.nextTick(() => {
  console.log("Process nextick 1");
});
process.nextTick(() => {
  console.log("Process nextick 2");
  process.nextTick(() => {
    console.log("Process nextick  2.1");
  });
});

process.nextTick(() => {
  console.log("Process nextick 3");
});
Promise.resolve().then(() => {
  console.log("Promise resolve 1");
});
Promise.resolve().then(() => {
  console.log("Promise resolve 2");
  process.nextTick(() => {
    console.log("Process nextick Inside Promise 2");
  });
});
Promise.resolve().then(() => {
  console.log("Promise resolve 3");
});

// Inference

//1) queue k sare task khatam krne k baad hi que change hogi. which means k agar promise queue mai hai to sare WAITING AREA(callback queus) vale promise khatam honge pehle.
