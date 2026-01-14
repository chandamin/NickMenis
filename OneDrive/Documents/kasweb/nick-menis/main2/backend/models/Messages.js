import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellerLeads",
      required: true
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },
    text: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      default: false
    },
    attachments: [{
      type: String // URLs to uploaded files
    }]
  },
  { timestamps: true }
);

export default mongoose.model("Messages", messageSchema);
