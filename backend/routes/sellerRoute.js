import express from "express";
import { getSellerProfile, saveSellerDetails, getSellerDetails } from "../controller/sellerController.js";
import { sellerAuth } from "../middleware/sellerAuth.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/profile", sellerAuth, getSellerProfile);

router.get("/details", sellerAuth, getSellerDetails);
router.put("/details", sellerAuth, saveSellerDetails);

export default router;