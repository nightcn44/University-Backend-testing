require("dotenv").config();

const mongoose = require("mongoose");

const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
};

module.exports = DB;
