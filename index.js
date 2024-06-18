import express from "express";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";

const app = express();

// in order to enable access to the post request body
app.use(express.json());

app.use("/api/user", userRoute);

app.use("/api/auth", authRoute);

app.listen(5011, () => {
  console.log("App is running on port 5011");
});
