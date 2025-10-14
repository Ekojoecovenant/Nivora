const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const authRoutes = require("./routes/auth.route");

// Middlewares
app.use(helmet()); // Security
app.use(cors()); // Cross Origin Resource Policy
app.use(express.json()); // JSON response

const app = express();

// Routes
app.get("/", (req, res) => {
  res.json("NIVORA IS ONLINE!!");
});

// External Routes
app.use("/api", authRoutes);

module.exports = app;
