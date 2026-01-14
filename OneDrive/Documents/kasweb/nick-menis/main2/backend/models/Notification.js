const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  message: String,
  read: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Notifications", notificationSchema);
