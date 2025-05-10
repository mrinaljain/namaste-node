// process is a global variable available which tracks all the processes running

process.on("message", (data) => {
  console.log(`Message: ${data.msg}`);
  // sending back to parent
  process.send({ reply: "Hello from child" });
});
