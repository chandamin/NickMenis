import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String },
  inviteToken: { type: String },

  role: {
    type: String,
    enum: ["admin", "agent", "seller"],
    required: true
  },

  // Agent-specific fields
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },


  invitedAt: { type: Date },
  joinedAt: { type: Date },

  createdAt: { type: Date, default: Date.now }
});

// Hash password only if exists
UsersSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model("Users", UsersSchema, "users");
