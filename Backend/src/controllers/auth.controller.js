const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// ✅ Signup route
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log("❌ Missing fields in signup");
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const existing = await userModel.findUserByEmail(email);
  if (existing)
    return res
      .status(400)
      .json({ success: false, message: "Email already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = { name, email, password: hashed };

  try {
    const newUser = await userModel.createUser(
      user.name,
      user.email,
      user.password
    );

    if (!newUser) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to create user" });
    }

    console.log("✅ Account created successfully:" + newUser);
    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error during registration." });
  }
};

// ✅ Login route
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("❌ Missing fields in login");
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const user = await userModel.findUserByEmail(email);
  if (!user)
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.json({ success: true, message: "Login Successful", token: token });
};

// To get all users (admin only)
exports.getUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  if (users.length < 1)
    return res.status(400).json({ success: false, message: "No User Added" });

  res.json({ success: true, users: users });
};
