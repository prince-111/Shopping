const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

connectDB();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello jii kaise hai sare");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
