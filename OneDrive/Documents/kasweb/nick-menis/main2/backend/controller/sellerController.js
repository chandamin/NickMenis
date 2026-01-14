import SellerLeads from "../models/SellerLeads.js";
import Users from "../models/Users.js";
import Messages from "../models/Messages.js";


export const cancelSellerLead = async (req, res) => {
  try {
    const sellerId = req.userId;

    const lead = await SellerLeads.findOne({ sellerId });

    if (!lead) {
      return res.status(404).json({ message: "No active lead found" });
    }

    // 🔒 HARD RULE: cannot cancel after agent assigned
    if (lead.status === "Assigned") {
      return res.status(403).json({
        message: "Cannot cancel after agent assignment"
      });
    }
     
    await SellerLeads.deleteOne({ _id: lead._id });

    res.json({ message: "Lead request cancelled" });
  } catch (err) {
    console.error("Cancel lead error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


export const getAvailability = async (req, res) => {
  try {
    const lead = await SellerLeads.findOne({ sellerId: req.userId });

    if (!lead || !lead.availability) {
      return res.json({
        days: [],
        timeRange: { from: "", to: "" }
      });
    }

    res.json(lead.availability);
  } catch (err) {
    console.error("Get availability error", err);
    res.status(500).json({ message: "Server error" });
  }
};


export const saveAvailability = async (req, res) => {
  try {
    const { days, from, to } = req.body;

    const lead = await SellerLeads.findOne({ sellerId: req.userId });
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    lead.availability = {
      days,
      timeRange: { from, to }
    };

    await lead.save();
    res.json({ message: "Availability saved" });
  } catch (err) {
    console.error("Save availability error", err);
    res.status(500).json({ message: "Server error" });
  }
};


// Get messages for a lead
export const getMessages = async (req, res) => {
  const { leadId } = req.params;
  try {
    const messages = await Messages.find({ leadId })
      .populate("senderId", "name role")
      .populate("receiverId", "name role")
      .sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  const { leadId } = req.params;
  const { text, attachments = [] } = req.body;
  const senderId = req.userId;

  try {
    const lead = await SellerLeads.findById(leadId);

    if (!lead) {
      return res.status(404).json({ msg: "Lead not found" });
    }

    const sellerId = lead.sellerId?.toString();
    const agentId = lead.assignedAgent?.toString();

    // 🔒 HARD STOP: no agent assigned
    if (!sellerId || !agentId) {
      return res.status(400).json({
        msg: "Messaging is locked until an agent is assigned"
      });
    }

    // 🔒 AUTH CHECK
    if (![sellerId, agentId].includes(senderId)) {
      return res.status(403).json({
        msg: "Not authorized to message this lead"
      });
    }

    // 🎯 Receiver logic
    const receiverId =
      senderId === sellerId ? agentId : sellerId;

    const message = await Messages.create({
      leadId,
      senderId,
      receiverId,
      text,
      attachments
    });

    res.status(201).json(message);

  } catch (err) {
    console.error("sendMessage error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* ============================
   GET AGENT MATCH QUEUE
============================ */
export const getAgentQueue = async (req, res) => {
  try {
    const sellerId = req.userId;

    const lead = await SellerLeads.findOne({
      sellerId,
      status: { $in: ["Matched", "Assigned"] }   // ✅ KEY FIX
    }).populate("matchedAgents.agentId", "firstName lastName email");

    if (!lead) return res.json([]);

    res.json(
      lead.matchedAgents.map(m => ({
        matchId: m._id.toString(),
        agentId: m.agentId._id.toString(),
        name: `${m.agentId.firstName} ${m.agentId.lastName}`,
        email: m.agentId.email,
        status: m.status,
        matchedAt: m.matchedAt
      }))
    );
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

    const { matchId, action } = req.body;


    if (!["accepted", "rejected"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }

    const lead = await SellerLeads.findOne({ sellerId: req.userId });

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const match = lead.matchedAgents.id(matchId);

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    match.status = action;

    if (action === "accepted") {
  lead.assignedAgent = match.agentId;
  lead.assignedAt = new Date();
  lead.status = "Assigned";
  lead.paymentStatus = "unpaid";

   await Users.findByIdAndUpdate(match.agentId, {
    hasActiveLead: true,
    activeLeadId: lead._id,
    paymentStatus: "unpaid"
  });
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
      summary,
    } = req.body;

    // Validate required fields
    if (!propertyType || !price || !area || !timeline) {
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
