import jwt from "jsonwebtoken";

export const sellerAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.sellerId = decoded.id; // users ID
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
