const Assessment =
  require("../models/Assessment");

const saveAssessment =
  async (req, res) => {
    try {
      const {
        employeeId,
        topic,
        score,
        totalQuestions,
      } = req.body;

      const percentage =
        Math.round(
          (score /
            totalQuestions) *
            100
        );

      const assessment =
        await Assessment.create({
          employeeId,
          topic,
          score,
          totalQuestions,
          percentage,
        });

      res.status(201).json({
        success: true,
        assessment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

const getAssessments =
  async (req, res) => {
    try {
      const data =
        await Assessment.find();

      res.status(200).json({
        success: true,
        data,
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
  saveAssessment,
  getAssessments,
};