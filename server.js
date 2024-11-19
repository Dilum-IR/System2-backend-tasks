const functions = require("firebase-functions");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

// const port = process.env.PORT || 8000;
const port = 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

exports.api = functions.https.onRequest(app);