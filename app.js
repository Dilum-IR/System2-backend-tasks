const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const authRouter = require("./Routes/AuthRoutes");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRouter);

module.exports = app;
