import express from "express";
import { cancelSellerLead, getAvailability, saveAvailability, getSellerProfile, saveSellerLeads, getSellerLeads, getAgentQueue, respondToAgent,getMessages,sendMessage } from "../controller/sellerController.js";
import { userAuth } from "../middleware/userAuth.js";
import { canMessage } from "../middleware/canMessage.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/profile", userAuth, getSellerProfile);

router.get("/details", userAuth, getSellerLeads);
router.put("/details", userAuth, saveSellerLeads);
router.get("/agent-queue", userAuth, getAgentQueue);
router.put("/agent-response", userAuth, respondToAgent);

router.get("/messages/:leadId", userAuth, canMessage, getMessages);
router.post("/messages/:leadId", userAuth, canMessage, sendMessage);

router.put("/availability", userAuth, saveAvailability);
router.get("/availability", userAuth, getAvailability);
router.put("/cancel", userAuth, cancelSellerLead);







export default router;