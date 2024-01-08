const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 8000;

connectDB();

app.use(bodyParser.json());

// app.use("/products", productRoutes);

app.get("/", function (req, res) {
  res.send("Hello jii kaise hai sare");
});

app.get("/pro", (req, res)=>{
  res.send({pro:"Products"})
})

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
