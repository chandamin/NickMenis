import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
// Hash password before saving
UsersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
export default mongoose.model("Users", UsersSchema,"users");