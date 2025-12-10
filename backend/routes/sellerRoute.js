// import express from "express";
// import SellerUser from "../models/SellerUser.js"; // login model
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// // Seller login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ success: false, message: "All fields required" });

//     const seller = await SellerUser.findOne({ email });
//     if (!seller) return res.status(401).json({ success: false, message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, seller.password);
//     if (!isMatch) return res.status(401).json({ success: false, message: "Invalid password" });

//     const token = jwt.sign({ id: seller._id, role: "seller" }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     return res.json({ success: true, token, role: "seller" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Seller signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { firstName, email, password, confirmPassword } = req.body;

//     if (!firstName || !email || !password || !confirmPassword) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ success: false, message: "Passwords do not match" });
//     }

//     const existingUser = await SellerUser.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: "Email already registered" });
//     }

//     const newUser = new SellerUser({
//       firstName,
//       email,
//       password
//     });

//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id, role: "seller" }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.json({ success: true, message: "Seller registered successfully", token, role: "seller" });

//   } catch (err) {
//     console.error("Seller signup error:", err);
//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// });


// export default router;


import express from "express";
import SellerUser from "../models/SellerUser.js";
import Agent from "../models/Agent.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();
// -------------------------------
// SELLER LOGIN
// -------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    const seller = await SellerUser.findOne({ email });
    if (!seller) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", seller.password);
    // Compare password
    const isMatch = await bcrypt.compare(password, seller.password);
    console.log("Password Match:", isMatch);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: seller._id, role: "seller" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({ success: true, token, role: "seller" });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
// -------------------------------
// SELLER SIGNUP
// -------------------------------
router.post("/signup", async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword } = req.body;
    if (!firstName || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
    // Check all tables for existing email
    const existingUser =
      (await SellerUser.findOne({ email })) ||
      (await Agent.findOne({ email })) ||
      (await Admin.findOne({ email }));
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered with another account",
      });
    }
    // STORE PLAIN PASSWORD — MODEL HOOK HASH KAREGA
    const newSeller = new SellerUser({
      firstName,
      email,
      password, // plain password → schema will hash automatically
    });
    await newSeller.save();
    const token = jwt.sign(
      { id: newSeller._id, role: "seller" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({
      success: true,
      token,
      role: "seller",
      message: "Seller registered successfully",
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
export default router;