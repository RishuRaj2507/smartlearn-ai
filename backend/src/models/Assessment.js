const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  topic: String,

  score: Number,

  totalQuestions: Number,

  percentage: Number,

  completedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Assessment",
  assessmentSchema
);