const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const fs = require("fs");

const authRouter = require("./Routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRouter);

module.exports = app;
