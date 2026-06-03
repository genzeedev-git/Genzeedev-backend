import mongoose from "mongoose";

const SiteContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

export default mongoose.model("SiteContent", SiteContentSchema);
