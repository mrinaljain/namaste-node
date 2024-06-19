// const express = require("express");
import express from "express";
import {
  addUser,
  getUser,
  removeUser,
  updateUser,
} from "../controllers/user.controller_remote.js";
import { myLogger } from "../middlewares/logger.js";

const route = express.Router();

route.get("/:userId", myLogger, getUser);
route.post("/", addUser);
route.put("/update", updateUser);
route.delete("/:userId", removeUser);

route.get("*", (req, res) => {
  res.send("You have  come to a random route");
});

export default route;
