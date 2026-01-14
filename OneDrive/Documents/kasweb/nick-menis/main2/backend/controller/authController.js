import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/Usermodel.js";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role, // seller / admin / agent
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    return res.json({
      success: true,
      token,
      role: user.role,
      user:user
    });
  } catch (error) {
    console.log("Login error:", error);
    return res.json({ success: false, message: "Server error" });
  }
};