const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please add your name"],
    },
    phone: {
      type: Number,
      required: [true, "Please add your phone"],
    },
    childName: {
      type: String,
      required: [true, "Please add your child s name name"],
    },
    childSex: {
      type: String,
      required: [true, "Please add your child sex"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
    },
    password: {
      type: String,
      required: [true, "Please add your passeword"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
