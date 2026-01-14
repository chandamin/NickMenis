import mongoose from "mongoose";
import SellerLeads from "../models/SellerLeads.js";
import Users from "../models/Users.js";
import Payments from "../models/Payments.js";
import Messages from "../models/Messages.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


/* =========================================
   GET AGENT PAYMENTS
========================================= */
export const getAgentPayments = async (req, res) => {
  const payments = await Payments.find({
    agentId: req.user._id,
  }).lean();

  res.json(payments);
};

export const createCheckoutSession = async (req, res) => {
  try {
    const agent = req.user;

    if (!agent.activeLeadId) {
      return res.status(400).json({ message: "No active lead" });
    }

    const lead = await SellerLeads.findById(agent.activeLeadId);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    // ✅ Auto 1% calculation
    const amount = Math.round(lead.price * 0.01 * 100); // cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "1% Platform Fee",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/agent/payment-success`,
      cancel_url: `${process.env.FRONTEND_URL}/agent/dashboard`,
    });

    // ✅ Save payment record
    await Payments.create({
      agentId: agent._id,
      leadId: lead._id,
      amount: amount / 100,
      stripeSessionId: session.id,
      paidAt: new Date(),
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Stripe checkout failed" });
  }
};


export const getNewLead = async (req, res) => {
  try {
    const agent = await Users.findById(req.userId);
    if (!agent) return res.status(404).json({ msg: "Agent not found" });

    if (agent.hasActiveLead) {
      return res.status(403).json({
        msg: "You already have an active lead."
      });
    }

    const lead = await SellerLeads.findOne({
      status: "Matched",
      assignedAgent: null
    });

    if (!lead) {
      return res.status(404).json({ msg: "No leads available" });
    }

    lead.assignedAgent = agent._id;
    lead.status = "Assigned";
    lead.assignedAt = new Date();
    await lead.save();

    agent.paymentAmount = Math.round(lead.price * 0.01);
    agent.paymentStatus = "unpaid";
    agent.hasActiveLead = true;
    agent.activeLeadId = lead._id;

    await agent.save();

    res.json({ msg: "Lead assigned", lead });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* ===========================
   GET AGENT MESSAGES
=========================== */
export const getAgentMessages = async (req, res) => {
  const { leadId } = req.params;
  const agentId = req.userId;

  try {
    const lead = await SellerLeads.findById(leadId);

    if (!lead || lead.assignedAgent?.toString() !== agentId) {
      return res.status(403).json({
        msg: "You do not have access to this conversation"
      });
    }

    const messages = await Messages.find({ leadId })
      .populate("senderId", "_id firstName lastName role")
      .populate("receiverId", "_id firstName lastName role")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.error("getAgentMessages error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

/* ===========================
   SEND AGENT MESSAGE
=========================== */
export const sendAgentMessage = async (req, res) => {
  const { leadId } = req.params;
  const { text, attachments = [] } = req.body;
  const agentId = req.userId;

  try {
    const lead = await SellerLeads.findById(leadId);

    if (!lead || lead.assignedAgent?.toString() !== agentId) {
      return res.status(403).json({
        msg: "Messaging not allowed"
      });
    }

    const message = await Messages.create({
      leadId,
      senderId: agentId,
      receiverId: lead.sellerId,
      text,
      attachments
    });

    res.status(201).json(message);
  } catch (err) {
    console.error("sendAgentMessage error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};


/* ======================================================
   GET AGENT LEADS
====================================================== */
export const getAgentLeads = async (req, res) => {
  try {
    const agentId = req.userId;
 
    const leads = await SellerLeads.find({
      assignedAgent: agentId,
      status: { $in: ["Assigned", "Completed"] },
    }).sort({ assignedAt: -1 });

    res.json(leads);
  } catch (err) {
    console.error("Get agent leads error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ======================================================
   MARK LEAD COMPLETED
====================================================== */
export const completeLead = async (req, res) => {
  try {
    const agentId = req.userId;
    const leadId = req.params.id;

    const lead = await SellerLeads.findOne({
      _id: leadId,
      assignedAgent: agentId,
      status: "Assigned",
    });

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    const agent = await Users.findById(agentId);

agent.hasActiveLead = false;
agent.activeLeadId = null;
agent.paymentStatus = "approved"; // or reset if you want per-deal payments
agent.paymentAmount = 0;

await agent.save();


    res.json({ message: "Lead marked as completed" });
  } catch (err) {
    console.error("Complete lead error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ======================================================
   RELEASE LEAD
================================================== */
export const releaseLead = async (req, res) => {
  try {
    const agentId = req.userId;
    const leadId = req.params.id;

    const lead = await SellerLeads.findOne({
      _id: leadId,
      assignedAgent: agentId,
      status: "Assigned",
    });

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    lead.status = "Released";
    lead.assignedAgent = null;
    await lead.save();
    
    const agent = await Users.findById(agentId);

if (!agent) {
  return res.status(404).json({ message: "Agent not found" });
}

agent.hasActiveLead = false;
agent.activeLeadId = null;
agent.paymentStatus = "unpaid";
agent.paymentAmount = 0;

await agent.save();
    


    res.json({ message: "Lead released" });
  } catch (err) {
    console.error("Release lead error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
