import express from "express";

import {
  getAgents,
  inviteAgent,
  acceptInvite,
  updateAgentStatus,
  getAllLeads,
  getLeadById,
  markLeadMatched,
  assignLeadToAgent,
  getServiceAreas,
  toggleProvince,
  toggleCity,
  matchAgentToLead,
} from "../controller/adminController.js";

const router = express.Router();

// Agents
router.get("/agents", getAgents);
router.post("/agents/invite", inviteAgent);
router.post("/agents/accept-invite", acceptInvite);
router.patch("/agents/:id/status", updateAgentStatus);

// Leads
router.get("/leads", getAllLeads);
router.get("/leads/:id", getLeadById);
router.put("/leads/:id/match", markLeadMatched);
router.put("/leads/:id/assign", assignLeadToAgent);
router.post("/leads/:id/match-agents", matchAgentToLead);


// Services

router.get("/service-areas", getServiceAreas);

// province on/off
router.put("/service-areas/province/:id", toggleProvince);

// city on/off
router.put("/service-areas/city/:provinceId", toggleCity);

export default router;
