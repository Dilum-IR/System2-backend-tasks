const express = require("express");

const loginController = require("../Controllers/loginController");

const authRouter = express.Router();

authRouter.route("/login").post(loginController);

module.exports = authRouter;
