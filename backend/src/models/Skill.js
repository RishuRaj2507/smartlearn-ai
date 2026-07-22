const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    skillName: {
      type: String,
      required: true,
    },

    currentLevel: {
      type: Number,
      required: true,
    },

    requiredLevel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Skill",
  skillSchema
);