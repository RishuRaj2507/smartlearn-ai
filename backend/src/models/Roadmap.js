const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    month: String,

    title: String,

    difficulty: String,

    duration: String,

    status: {
      type: String,
      default: "Upcoming",
    },

    progress: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Roadmap",
  roadmapSchema
);