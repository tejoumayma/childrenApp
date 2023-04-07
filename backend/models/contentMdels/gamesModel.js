const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    URLgame: {
      type: String,
      required: true,
    },

    gameName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Game", gameSchema);
