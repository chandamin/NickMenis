import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  isActive: { type: Boolean, default: false }
});

const serviceAreaSchema = new mongoose.Schema(
  {
    provinceName: {
      type: String,
      required: true,
      unique: true
    },

    isActive: {
      type: Boolean,
      default: false // province-level toggle
    },

    cities: [citySchema]
  },
  { timestamps: true }
);

export default mongoose.model("ServiceArea", serviceAreaSchema);
