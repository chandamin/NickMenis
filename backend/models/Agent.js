// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const agentSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phone: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// // Hash password before saving
// agentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// export default mongoose.model("Agent", agentSchema);


import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const agentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
// Hash password before saving
agentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
export default mongoose.model("Agent", agentSchema);