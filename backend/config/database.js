const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shopping", {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("connect to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
