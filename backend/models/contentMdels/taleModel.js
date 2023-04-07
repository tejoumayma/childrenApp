const mongoose = require("mongoose");

const taleSchema = new mongoose.Schema(
  {
    URLtale: {
      type: String,
      required: true,
    },
    taleDescription: {
      type: String,
      required: true,
    },
    taleName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Tale", taleSchema);
