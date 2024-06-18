// const express = require("express");
import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is auth Route");
});

route.get("/login", (req, res) => {
  res.send("This is user login");
});

export default route;
