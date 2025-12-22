import mongoose from "mongoose";

const sellerDetailsSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",   // your users model
      required: true,
      unique: true         // one details record per seller
    },

    propertyType: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    neighbourhood: {
      type: String,
      required: true
    },

    timeline: {
      type: String,
      required: true
    },

    reason: {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

const SellerDetails = mongoose.model(
  "SellerDetails",
  sellerDetailsSchema,
  "sellerdetails" // explicit collection name
);

export default SellerDetails;
