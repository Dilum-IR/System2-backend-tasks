const functions = require("firebase-functions");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

exports.api = functions.https.onRequest(app);
