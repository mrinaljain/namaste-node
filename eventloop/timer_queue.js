setTimeout(() => {
  console.log("settimeout 1");
}, 0);
setTimeout(() => {
  console.log("settimeout 2");
  process.nextTick(() => {
    console.log("Process nextick Inside settimeout 2");
  });
}, 0);
setTimeout(() => {
  console.log("settimeout 3");
}, 0);

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
