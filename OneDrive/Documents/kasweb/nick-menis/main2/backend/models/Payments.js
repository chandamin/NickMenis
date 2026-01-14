import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerLeads",
      required: true,
    },

    amount: {
      type: Number,
      required: true, // 1% amount
    },

    stripeSessionId: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    paidAt: Date,
    approvedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Payments", paymentSchema);
