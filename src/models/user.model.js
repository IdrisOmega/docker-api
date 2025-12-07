import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  grupo: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
