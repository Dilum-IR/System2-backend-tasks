const functions = require("firebase-functions");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

exports.api = functions.https.onRequest(app);
