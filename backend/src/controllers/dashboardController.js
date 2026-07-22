const User = require("../models/User");
const Assessment = require("../models/Assessment");
const Document = require("../models/Document");

const getDashboardStats =
  async (req, res) => {
    try {

      const totalUsers =
        await User.countDocuments();

      const totalAssessments =
        await Assessment.countDocuments();

      const totalDocuments =
        await Document.countDocuments();

      const assessmentData =
        await Assessment.find();

      let avgScore = 0;

      if (
        assessmentData.length > 0
      ) {
        avgScore =
          assessmentData.reduce(
            (sum, item) =>
              sum + item.percentage,
            0
          ) /
          assessmentData.length;
      }

      res.status(200).json({
        success: true,

        stats: {
          totalUsers,
          totalAssessments,
          totalDocuments,
          averageScore:
            avgScore.toFixed(2),
        },
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

module.exports = {
  getDashboardStats,
};