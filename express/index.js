const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express....");
});

app.get("/data", (req, res) => {
  const data = [{ index: 5 }, { index: 1 }, { index: 1 }];
  res.statusCode = 200;
  res.contentType("application/json");
  res.send(JSON.stringify(data));
});
app.listen(5235, () => {
  console.log("Server Started");
});