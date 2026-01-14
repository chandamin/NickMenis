import mongoose from "mongoose";

const sellerLeadsSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      unique: true
    },
    availability: {
  days: [String],
  timeRange: {
    from: String,
    to: String
  }
},
    leadName: {
      type: String,
      required: true,
      unique: true,
      default: function () {
        return `L-${Date.now()}`;
      }
    },

    propertyType: { type: String, required: true },
    area: { type: String, required: true },
    price: { type: Number, required: true },
    timeline: { type: String, required: true },
    status: {
      type: String,
      enum: ["New", "Matched", "Assigned", "Completed", "Released"],
      default: "New"
    },

    summary: String,

    /* ✅ AGENT MATCH QUEUE */
    matchedAgents: [
    {
      agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
      },
      matchedAt: { type: Date, default: Date.now }
    }
  ],


    /* ✅ FINAL SELECTED AGENT */
    assignedAgent: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Users",
  default: null,
  index: true
},
    assignedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("SellerLeads", sellerLeadsSchema);
