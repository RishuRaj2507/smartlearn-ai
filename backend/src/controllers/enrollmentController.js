const Enrollment =
  require("../models/Enrollment");

const Course =
  require("../models/Course");

exports.assignCourse =
  async (req, res) => {
    try {
      const {
        employeeId,
        courseId,
      } = req.body;

      const exists =
        await Enrollment.findOne({
          employeeId,
          courseId,
        });

      if (exists) {
        return res.status(400).json({
          success: false,
          message:
            "Course already assigned",
        });
      }

      const enrollment =
        await Enrollment.create({
          employeeId,
          courseId,
        });

      await Course.findByIdAndUpdate(
        courseId,
        {
          $inc: {
            enrolled: 1,
          },
        }
      );

      res.status(201).json({
        success: true,
        enrollment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

exports.getEnrollments =
  async (req, res) => {
    try {
      const enrollments =
        await Enrollment.find()
          .populate(
            "employeeId",
            "name email"
          )
          .populate(
            "courseId",
            "title level"
          );

      res.json({
        success: true,
        enrollments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };
  exports.getMyCourses =
  async (req, res) => {
    try {
      const enrollments =
        await Enrollment.find({
          employeeId:
            req.params.employeeId,
        })
          .populate(
            "courseId"
          )
          .populate(
            "employeeId",
            "name email"
          );

      res.json({
        success: true,
        enrollments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };
  
exports.updateProgress =
  async (req, res) => {
    try {
      const {
        progress,
      } = req.body;

      let status =
        "In Progress";

      if (
        Number(progress) >= 100
      ) {
        status =
          "Completed";
      }

      const enrollment =
        await Enrollment.findByIdAndUpdate(
          req.params.id,
          {
            progress,
            status,
          },
          {
            new: true,
          }
        );

      res.json({
        success: true,
        enrollment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };