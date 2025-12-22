import SellerDetails from "../models/SellerDetails.js";
import Users from "../models/Users.js";


export const getSellerProfile = async (req, res) => {
  try {
    const seller = await Users
      .findById(req.sellerId)
      .select("-password");

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const saveSellerDetails = async (req, res) => {
  try {
   
    const sellerId = req.sellerId; // from sellerAuth middleware

    const {
      propertyType,
      price,
      city,
      neighbourhood,
      timeline,
      reason
    } = req.body;

    const details = await SellerDetails.findOneAndUpdate(
      { sellerId },
      {
        sellerId,
        propertyType,
        price,
        city,
        neighbourhood,
        timeline,
        reason
      },
      {
        new: true,
        upsert: true   // creates if not exists
      }
    );

    res.status(200).json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save seller details" });
  }
};

export const getSellerDetails = async (req, res) => {
  try {

    const sellerId = req.sellerId;

    const details = await SellerDetails.findOne({ sellerId });

    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch seller details" });
  }
};