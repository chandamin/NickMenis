import SellerLeads from "../models/SellerLeads.js";
import Users from "../models/Users.js";
import ServiceArea from "../models/ServiceArea.js";


/* ============================
   GET AGENT MATCH QUEUE
============================ */
export const getAgentQueue = async (req, res) => {
  try {
    const sellerId = req.userId;
 
    const lead = await SellerLeads.findOne({
    sellerId: sellerId,
    status: "Matched"
  }).populate("matchedAgents.agentId", "firstName lastName email");

    if (!lead) return res.json([]);

    res.json(lead.matchedAgents || []);
  } catch (err) {
    console.error("Get agent queue error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ============================
   ACCEPT / REJECT AGENT
============================ */
export const respondToAgent = async (req, res) => {
  try {
    const { agentId, action } = req.body;

    if (!["accepted", "rejected"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }

    const lead = await SellerLeads.findOne({ sellerId: req.user.id });
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const agent = lead.matchedAgents.find(
      (a) => a.agentId.toString() === agentId
    );

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    agent.status = action;

    if (action === "accepted") {
      lead.assignedAgent = agentId;
      lead.assignedAt = new Date();
      lead.status = "Assigned";
    }

    await lead.save();

    res.json({ message: "Agent response saved" });
  } catch (err) {
    console.error("Respond agent error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ======================================================
   GET SELLER PROFILE
====================================================== */
export const getSellerProfile = async (req, res) => {
  try {
    const seller = await Users.findById(req.userId).select("-password");

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json(seller);
  } catch (error) {
    console.error("Get Seller Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ======================================================
   CREATE / UPDATE SELLER LEAD
====================================================== */
export const saveSellerLeads = async (req, res) => {
  try {
    const sellerId = req.userId; // ✅ FIXED

    const {
      propertyType,
      price,
      area,
      timeline,
      tier,
      summary,
    } = req.body;

    // Validate required fields
    if (!propertyType || !price || !area || !timeline || !tier) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    // Find existing lead by sellerId
    let lead = await SellerLeads.findOne({ sellerId });

    // Create new lead
    if (!lead) {
      const leadCount = await SellerLeads.countDocuments();

      lead = await SellerLeads.create({
        leadName: `L-${1000 + leadCount + 1}`,
        sellerId,
        propertyType,
        price,
        area,
        timeline,
        tier,
        summary,
        status: "New",
      });
    }
    // Update existing lead (if not matched)
    else if (lead.status !== "Matched") {
      lead.propertyType = propertyType;
      lead.price = price;
      lead.area = area;
      lead.timeline = timeline;
      lead.tier = tier;
      lead.summary = summary;

      await lead.save();
    }
    // Block updates if matched
    else {
      return res.status(403).json({
        message: "Lead already matched. Editing is disabled.",
      });
    }

    res.status(200).json(lead);
  } catch (error) {
    console.error("Save Seller Lead Error:", error);
    res.status(500).json({ message: "Failed to save seller lead" });
  }
};

/* ======================================================
   GET SELLER LEAD (SINGLE OBJECT)
====================================================== */
export const getSellerLeads = async (req, res) => {
  try {
    const sellerId = req.userId;

    const details = await SellerLeads.findOne({ sellerId });

    res.status(200).json(details || null);
  } catch (error) {
    console.error("Get Seller Lead Error:", error);
    res.status(500).json({ message: "Failed to fetch seller details" });
  }
};
