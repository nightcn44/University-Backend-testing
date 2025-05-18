const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// error handler
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
