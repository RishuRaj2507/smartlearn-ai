const Course =
  require("../models/Course");

exports.createCourse =
  async (req, res) => {
    try {
      const {
        title,
        description,
        duration,
        level,
      } = req.body;

      const course =
        await Course.create({
          title,
          description,
          duration,
          level,
        });

      res.status(201).json({
        success: true,
        course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

exports.getCourses =
  async (req, res) => {
    try {
      const courses =
        await Course.find().sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        courses,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

exports.deleteCourse =
  async (req, res) => {
    try {
      await Course.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Course deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };