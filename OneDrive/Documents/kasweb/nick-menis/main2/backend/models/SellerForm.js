import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  propertyType: String,
  propertyValue: String,
  condition: String,
  city: String,
  neighbourhood: String,
  timeline: String,
  sellingReason: String,
  firstName: String,
  email: String,
  phone: String,
  homeOccupied: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Seller", sellerSchema);
