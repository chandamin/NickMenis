// import express from "express";
// import Agent from "../models/Agent.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// // Agent login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ success: false, message: "All fields required" });

//     const agent = await Agent.findOne({ email });
//     if (!agent) return res.status(401).json({ success: false, message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, agent.password);
//     if (!isMatch) return res.status(401).json({ success: false, message: "Invalid password" });

//     const token = jwt.sign({ id: agent._id, role: "agent" }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     return res.json({ success: true, token, role: "agent" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // Agent signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, confirmPassword, phone } = req.body;

//     if (!firstName || !email || !password || !confirmPassword) {
//       return res.status(400).json({ success: false, message: "All required fields must be filled" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ success: false, message: "Passwords do not match" });
//     }

//     const existingAgent = await Agent.findOne({ email });
//     if (existingAgent) {
//       return res.status(400).json({ success: false, message: "Email already registered" });
//     }

//     const newAgent = new Agent({
//       firstName,
//       lastName,
//       email,
//       password,
//       phone
//     });

//     await newAgent.save();

//     const token = jwt.sign({ id: newAgent._id, role: "agent" }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.json({ success: true, message: "Agent registered successfully", token, role: "agent" });

//   } catch (err) {
//     console.error("Agent signup error:", err);
//     return res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// export default router;


import express from "express";
import Agent from "../models/Agent.js";
import SellerUser from "../models/SellerUser.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();
// -------------------------------
// AGENT LOGIN
// -------------------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password){
      return res.status(400).json({ success: false, message: "All fields required" });
     }
    const agent = await Agent.findOne({ email });
    if (!agent){
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", agent.password);
    const isMatch = await bcrypt.compare(password, agent.password);
    console.log("Password Match:", isMatch);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: agent._id, role: "agent" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({ success: true, token, role: "agent" });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
// -------------------------------
// AGENT SIGNUP
// -------------------------------
router.post("/signup", async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword } = req.body;
    if (!firstName || !email || !password || !confirmPassword)
      return res.status(400).json({ success: false, message: "All fields required" });
    if (password !== confirmPassword)
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    // CHECK EMAIL ACROSS ALL TABLES (Agent, Seller, Admin)
    const existingUser =
      (await Agent.findOne({ email })) ||
      (await SellerUser.findOne({ email })) ||
      (await Admin.findOne({ email }));
    if (existingUser)
      return res.status(400).json({ success: false, message: "Email already registered with another account" });
    // HASH PASSWORD
    //const hashedPassword = await bcrypt.hash(password, 10);
    const newAgent = new Agent({
      firstName,
      email,
      password: password,
    });
    await newAgent.save();
    const token = jwt.sign(
      { id: newAgent._id, role: "agent" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.json({
      success: true,
      token,
      role: "agent",
      message: "Agent registered successfully"
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});
export default router;