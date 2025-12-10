import express from "express";
import SellerForm from "../models/SellerForm.js";

const router = express.Router();

// Save seller form data
router.post("/", async (req, res) => {
  try {
    const seller = await SellerForm.create(req.body);
    return res.json({ 
      success: true, 
      message: "Seller form data saved successfully",
      seller 
    });

  } catch (err) {
    console.error("Error saving seller form:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all seller form submissions
router.get("/", async (req, res) => {
  try {
    const forms = await SellerForm.find().sort({ createdAt: -1 });
    return res.json({ success: true, forms });

  } catch (err) {
    console.error("Error fetching seller forms:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
