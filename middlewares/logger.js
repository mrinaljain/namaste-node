import express from "express";
const app = express();

export const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};
