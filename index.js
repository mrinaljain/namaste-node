import express from "express";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
import connectDb from "./database/mongodb.js";
import "./database/database.js";
import "dotenv/config";
const app = express();

// in order to enable access to the post request body
app.use(express.json());

app.get("*", (req, res) => {
  res.send("Welcome to server");
});
app.get("/ping", (req, res) => {
  res.send("Welcome to server , Its working fine");
});
app.use("/api/user", userRoute);

app.use("/api/auth", authRoute);

app.listen(5003, async () => {
  // await connectDb();
  console.log("App is running on port 5011");
});
