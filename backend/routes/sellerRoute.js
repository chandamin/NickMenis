import express from "express";
import { getSellerProfile, saveSellerLeads, getSellerLeads, getAgentQueue, respondToAgent } from "../controller/sellerController.js";
import { userAuth } from "../middleware/userAuth.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/profile", userAuth, getSellerProfile);

router.get("/details", userAuth, getSellerLeads);
router.put("/details", userAuth, saveSellerLeads);
router.get("/agent-queue", userAuth, getAgentQueue);
router.put("/agent-response", userAuth, respondToAgent);


export default router;