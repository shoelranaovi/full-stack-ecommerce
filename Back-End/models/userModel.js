const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    propic: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const usermodel = mongoose.model("user", userSchema);

module.exports = usermodel;
