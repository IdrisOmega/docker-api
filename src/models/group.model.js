import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String }
}, { timestamps: true });

export default mongoose.model("Group", groupSchema);
