import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ msg: "No token provided" });

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Users.findById(decoded.id);

    if (!user) return res.status(401).json({ msg: "User not found" });

    req.user = user;   // <-- MUST set this for /me route
    req.userId = decoded.id; // optional, if you use req.userId elsewhere
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ msg: "Unauthorized" });
  }
};
