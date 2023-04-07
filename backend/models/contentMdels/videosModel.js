const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    URLvd: {
      type: String,
      required: true,
    },
    vdDescription: {
      type: String,
      required: true,
    },
    vdName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Video", videoSchema);
