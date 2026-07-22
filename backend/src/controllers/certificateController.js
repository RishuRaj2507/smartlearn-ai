const Certificate = require("../models/Certificate");
const User = require("../models/User");
const Course = require("../models/Course");

exports.generateCertificate = async (req, res) => {
  try {
    const { employeeId, courseId } = req.body;

    const employee = await User.findById(employeeId);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const existing =
      await Certificate.findOne({
        employeeId,
        courseId,
      });

    if (existing) {
      return res.json({
        success: true,
        certificate: existing,
        message:
          "Certificate already generated",
      });
    }

    const certificate =
      await Certificate.create({
        employeeId,
        courseId,
        certificateId:
          "CERT-" +
          Date.now(),
      });

    res.status(201).json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCertificates =
  async (req, res) => {
    try {
      const certificates =
        await Certificate.find()
          .populate(
            "employeeId",
            "name email department"
          )
          .populate(
            "courseId",
            "title duration level"
          );

      res.json({
        success: true,
        certificates,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

exports.getEmployeeCertificates =
  async (req, res) => {
    try {
      const certificates =
        await Certificate.find({
          employeeId:
            req.params.employeeId,
        })
          .populate(
            "courseId",
            "title duration level"
          );

      res.json({
        success: true,
        certificates,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };