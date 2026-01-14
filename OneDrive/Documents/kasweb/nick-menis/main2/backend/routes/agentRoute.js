import express from "express";
import { userAuth } from "../middleware/userAuth.js";

import {
  createCheckoutSession,
  getAgentPayments,
  getAgentLeads,
  completeLead
 , releaseLead,
 getAgentMessages,
  sendAgentMessage,
} from "../controller/agentController.js";


const router = express.Router();

router.get("/me", userAuth, async (req, res) => {

  res.json(req.user);
});


router.get("/payments", userAuth, getAgentPayments);


router.post("/payments/checkout", userAuth, createCheckoutSession);


// Get messages for agent's active lead
router.get("/messages/:leadId", userAuth, getAgentMessages);

// Send message to seller
router.post("/messages/:leadId", userAuth, sendAgentMessage);


/**
 * Agent dashboard - assigned leads
 */
router.get("/leads", userAuth, getAgentLeads);

/**
 * Complete lead
 */
router.post("/leads/:id/complete", userAuth, completeLead);

/**
 * Release lead
 */
router.post("/leads/:id/release", userAuth, releaseLead);

export default router;
