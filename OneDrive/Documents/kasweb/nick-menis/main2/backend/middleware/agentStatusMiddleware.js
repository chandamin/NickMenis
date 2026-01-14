export const checkAgentApproved = (req, res, next) => {
  if (req.user.role === "agent" && req.user.status !== "approved") {
    return res
      .status(403)
      .json({ message: "Awaiting admin approval" });
  }
  next();
};

