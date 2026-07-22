const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    employeeId: String,

    name: String,

    department: String,

    role: String,

    skillLevel: {
      type: String,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
      ],
      default: "Beginner",
    },

    interests: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "UserProfile",
  userProfileSchema
);