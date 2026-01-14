// middleware/canMessage.js
import SellerLeads from "../models/SellerLeads.js";

export const canMessage = async (req, res, next) => {
  const lead = await SellerLeads.findById(req.params.leadId);

  if (!lead || lead.status !== "Assigned") {
    return res.status(403).json({ message: "Messaging locked" });
  }

  const userId = req.userId;

  if (
    userId !== lead.sellerId.toString() &&
    userId !== lead.assignedAgent.toString()
  ) {
    return res.status(403).json({ message: "Not authorized" });
  }

  next();
};
