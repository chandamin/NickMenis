import express from "express";
import { checkAgentApproved } from "../middleware/agentStatusMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
 
  checkAgentApproved,
  (req, res) => {
    res.json({ message: "Welcome Agent" });
  }
);

export default router;
