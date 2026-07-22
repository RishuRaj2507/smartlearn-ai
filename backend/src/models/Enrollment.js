const mongoose = require("mongoose");

const enrollmentSchema =
  new mongoose.Schema(
    {
      employeeId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      courseId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },

      progress: {
        type: Number,
        default: 0,
      },

      status: {
        type: String,
        default: "Enrolled",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Enrollment",
    enrollmentSchema
  );