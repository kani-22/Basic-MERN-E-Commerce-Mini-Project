const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

// Routes
app.use("/api/products", productRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});