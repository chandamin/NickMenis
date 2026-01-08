import crypto from "crypto";
import Users  from "../models/Users.js";
import { sendEmail } from "../utils/mailer.js";
import SellerLeads from "../models/SellerLeads.js";
import ServiceArea from "../models/ServiceArea.js";

export const getServiceAreas = async (req, res) => {
  const areas = await ServiceArea.find().sort({ provinceName: 1 });
  res.json(areas);
};

export const toggleProvince = async (req, res) => {
  const { isActive } = req.body;

  await ServiceArea.findByIdAndUpdate(req.params.id, { isActive });

  res.json({ message: "Province updated" });
};


export const toggleCity = async (req, res) => {
  const { cityId, isActive } = req.body;

  const result = await ServiceArea.updateOne(
    { "cities._id": cityId },
    { $set: { "cities.$.isActive": isActive } }
  );

  if (result.modifiedCount === 0) {
    return res.status(404).json({ message: "City not found" });
  }

  res.json({ message: "City updated" });
};


export const matchAgentToLead = async (req, res) => {
  try {
    const { agentIds } = req.body;
    const leadId = req.params.id;

    if (!Array.isArray(agentIds) || agentIds.length === 0) {
      return res.status(400).json({ message: "agentIds array is required" });
    }

    const lead = await SellerLeads.findById(leadId);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const agents = await Users.find({
      _id: { $in: agentIds },
      role: "agent",
      //status: "approved",
    });

    if (!agents.length) {
      return res.status(400).json({ message: "No valid agents found" });
    }

    const existingAgentIds = lead.matchedAgents.map(a =>
      a.agentId.toString()
    );

    const newAgents = agents.filter(
      agent => !existingAgentIds.includes(agent._id.toString())
    );

    if (!newAgents.length) {
      return res.status(400).json({ message: "Agents already matched" });
    }

    newAgents.forEach(agent => {
      lead.matchedAgents.push({
        agentId: agent._id,
        status: "pending",
        matchedAt: new Date(),
      });
    });

    lead.status = "Matched";
    await lead.save();

    res.json({
      message: "Agents added to match queue",
      added: newAgents.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



/* ======================================================
   GET ALL LEADS (ADMIN)
====================================================== */
export const getAllLeads = async (req, res) => {
  try {
    const leads = await SellerLeads.find()
      .sort({ createdAt: -1 })
      .lean();

    const formattedLeads = leads.map(lead => ({
      id: lead._id,
      leadName: lead.leadName,
      type: lead.propertyType,
      matchedAgents: lead.matchedAgents,
      area: lead.area,
      value: lead.price,
      tier: lead.tier,
      status: lead.status,
      summary: lead.summary || "",
      ageDays: Math.floor(
        (Date.now() - new Date(lead.createdAt)) /
        (1000 * 60 * 60 * 24)
      ),
    }));

    res.status(200).json(formattedLeads);
  } catch (error) {
    console.error("Admin get leads error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getLeadById = async (req, res) => {
  try {
    const lead = await SellerLeads.findById(req.params.id).lean();
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({
      id: lead._id,
      leadName: lead.leadName,
      type: lead.propertyType,
      area: lead.area,
      value: lead.price,
      tier: lead.tier,
      timeline: lead.timeline,
      matchedAgents: lead.matchedAgents,
      status: lead.status,
      summary: lead.summary || "",
      ageDays: Math.floor(
        (Date.now() - new Date(lead.createdAt)) /
        (1000 * 60 * 60 * 24)
      ),
      createdAt: lead.createdAt,
    });
  } catch (error) {
    console.error("Admin get lead error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const markLeadMatched = async (req, res) => {
  try {
    const lead = await SellerLeads.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    if (lead.status === "Matched") {
      return res.json({ message: "Lead already matched" });
    }

    // 1️⃣ Find approved agents (you can later filter by service area)
    const agents = await Users.find({
      role: "agent",
      status: "approved"
    }).limit(5);

    if (!agents.length) {
      return res.status(400).json({ message: "No approved agents available" });
    }

    // 2️⃣ Update lead
    lead.status = "Matched";
    lead.matchedAt = new Date();

    lead.matchedAgents = agents.map(agent => ({
      agentId: agent._id,
      status: "pending",
      matchedAt: new Date()
    }));

    await lead.save();

    // 3️⃣ Notify seller
    const user = await Users.findById(lead.sellerId);

    if (user?.email) {
      await sendEmail({
        to: user.email,
        subject: "Your property has been successfully matched",
        html: `
          <p>Hello ${user.firstName || "Home Owner"},</p>
          <p>Your property has been matched with local agents.</p>
          <p>Please log in to review and respond.</p>
        `,
      });
    }

    res.json({
      message: "Lead matched and agents queued successfully",
      matchedAgents: lead.matchedAgents
    });

  } catch (error) {
    console.error("Mark matched error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const assignLeadToAgent = async (req, res) => {
  try {

    const { agentId } = req.body;
    if (!agentId) {
      return res.status(400).json({ message: "agentId is required" });
    }

    const lead = await SellerLeads.findById(req.params.id);
    const agent = await Users.findById(agentId).select("firstName email");

    if (!lead || !agent) {
      return res.status(404).json({ message: "Lead or agent not found" });
    }

    const user = await Users.findById(lead.sellerId);

    lead.matchedAgents.push({
      agentId,
      status: "accepted"
    });

    lead.status = "Assigned";
    lead.assignedAt = new Date();
 
    await lead.save();

    if (user.email) {
      await sendEmail({
        to: user.email,
        subject: "An agent has been assigned to your property",
        html: `
          <p>Hello ${user.firstName || "Home Owner"},</p>
          <p>${agent.firstName} has been assigned to your property.</p>
          <p>Email: ${agent.email}</p>
        `,
      });
    }

    res.json({ message: "Agent assigned and email sent" });
  } catch (error) {
    console.error("Assign lead error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const inviteAgent = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Users.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const inviteToken = crypto.randomBytes(32).toString("hex");

    await Users.create({
      firstName: "Agent",
      email,
      role: "agent",
      status: "pending",
      invitedAt: new Date(),
      inviteToken,
    });

    const inviteLink = `${process.env.APP_URL}/accept-invite?token=${inviteToken}`;

    await sendEmail({
    to: email, // seller/home owner email
    subject: "You're invited to join as an agent",
    html: `
        <p>Hello,</p>
        <p>You’ve been invited to join as an agent.</p>
        <p>
          <a href="${inviteLink}">Accept Invitation</a>
        </p>
        <p>This invite will expire in 7 days.</p>
      `,
    });

    res.json({ message: "Agent invited successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to invite agent" });
  }
};

export const acceptInvite = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Token and password required" });
    }

    const user = await Users.findOne({
      inviteToken: token,
      role: "agent",
      status: "pending",
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired invite" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Activate agent
    user.password = hashedPassword;
    user.status = "approved";
    user.inviteToken = null;
    user.joinedAt = new Date();

    await user.save();

    res.json({ message: "Invitation accepted successfully" });
  } catch (error) {
    console.error("Accept invite error:", error);
    res.status(500).json({ message: "Failed to accept invitation" });
  }
};


export const getAgents = async (req, res) => {
  const agents = await Users.find({ role: "agent" })
    .select("firstName email status joinedAt invitedAt");

  res.json(agents);
};


export const updateAgentStatus = async (req, res) => {
  const { status } = req.body;

  await Users.findByIdAndUpdate(req.params.id, { status });

  res.json({ message: "Agent status updated" });
};


