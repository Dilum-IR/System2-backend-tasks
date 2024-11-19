const fs = require("fs");

const login = async (req, res) => {
  try {
    const userData = JSON.parse(fs.readFileSync("./data/user.json"));

    if (
      userData.username === req.body.username &&
      userData.password === req.body.password
    ) {
      return res.status(200).json({
        status: "success",
        message: "Login Successful!",
        data: userData.username,
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "Username or Password is invalid!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = login;
