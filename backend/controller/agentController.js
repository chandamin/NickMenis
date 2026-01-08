import Users from "../models/Users.js";

export const completeSignup = async (req, res) => {
  const { email, firstName, password } = req.body;

  const agent = await Users.findOne({ email, role: "agent" });
  if (!agent) return res.status(404).json({ message: "Invite not found" });

  agent.firstName = firstName;
  agent.password = password;
  agent.joinedAt = new Date();

  await agent.save();

  res.json({ message: "Signup completed. Awaiting approval." });
};
