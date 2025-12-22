import express from "express";
import Users from "../models/Users.js";
import Admin from "../models/Admin.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

// -------------------------------
// user LOGIN
// -------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", user.password);
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({ success: true, token, role: user.role });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
// -------------------------------
// user SIGNUP
// -------------------------------
router.post("/signup", async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword, role } = req.body;
    if (!firstName || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
    // Check all tables for existing email
    const existingUser =
      (await Users.findOne({ email })) ||
      (await Admin.findOne({ email }));
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered with another account",
      });
    }
    // STORE PLAIN PASSWORD — MODEL HOOK HASH KAREGA
    const newuser = new Users({
      firstName,
      email,
      password, // plain password → schema will hash automatically
      role,
    });
    await newuser.save();
    const token = jwt.sign(
      { id: newuser._id, role: newuser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({
      success: true,
      token,
      role: newuser.role,
      message: newuser.role+" registered successfully",
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});


router.get("/", (req, res) => {
  res.send("Auth route working");
});
export default router;  