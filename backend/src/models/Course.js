const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      default: "Beginner",
    },

    enrolled: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      default: "Published",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Course",
  courseSchema
);