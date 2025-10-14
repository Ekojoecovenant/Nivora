// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost", // leave as is if MySQL is local
  user: "root", // your MySQL username (default is 'root')
  password: "", // your MySQL password (add it if you set one)
  database: "myappdb", // name of the database we’ll create
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
  } else {
    console.log("✅ Connected to MySQL successfully!");
  }
});

// ✅ Create users table if not exists
db.query(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
  )
`,
  (err) => {
    if (err) console.error("Error creating users table:", err);
  }
);

// ✅ Signup route
app.post("/api/signup", (req, res) => {
  console.log("tedt--------");
  console.log("📩 Received signup request:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log("❌ Missing fields in signup");
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("🔥 MySQL error:", err.message);
      return res.status(500).json({ message: err.message });
    }
    console.log("✅ Account created successfully:", result);
    res.status(200).json({ message: "Signup successful" });
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ success: false, message: "Database error." });

    if (results.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "User not found." });
    }

    const user = results[0];
    if (user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }

    res.json({ success: true, message: "Login successful!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
