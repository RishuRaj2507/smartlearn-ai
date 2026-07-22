const Assessment = require("../models/Assessment");
const Roadmap = require("../models/Roadmap");

const getAnalytics = async (req, res) => {
  try {
    const assessments = await Assessment.find();

    const totalAssessments = assessments.length;

    const averageScore =
      totalAssessments > 0
        ? Math.round(
            assessments.reduce(
              (sum, item) =>
                sum + item.percentage,
              0
            ) / totalAssessments
          )
        : 0;

    const highestScore =
      totalAssessments > 0
        ? Math.max(
            ...assessments.map(
              (item) => item.percentage
            )
          )
        : 0;

    res.json({
      success: true,
      analytics: {
        totalAssessments,
        averageScore,
        highestScore,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getLearningTrend = async (
  req,
  res
) => {
  try {
    const assessments =
      await Assessment.find().sort({
        createdAt: 1,
      });

    const trend =
      assessments.map(
        (item, index) => ({
          month: `Attempt ${
            index + 1
          }`,
          score:
            item.percentage,
        })
      );

    res.json({
      success: true,
      trend,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

const getCourseCompletion =
  async (req, res) => {
    try {
      const roadmap =
        await Roadmap.find();

      const total =
        roadmap.length;

      if (total === 0) {
        return res.json({
          success: true,
          completion: {
            completed: 0,
            inProgress: 0,
            notStarted: 0,
          },
        });
      }

      const completed =
        roadmap.filter(
          (item) =>
            item.progress >= 100
        ).length;

      const inProgress =
        roadmap.filter(
          (item) =>
            item.progress > 0 &&
            item.progress < 100
        ).length;

      const notStarted =
        roadmap.filter(
          (item) =>
            item.progress === 0
        ).length;

      res.json({
        success: true,
        completion: {
          completed:
            Math.round(
              (completed / total) *
                100
            ),
          inProgress:
            Math.round(
              (inProgress /
                total) *
                100
            ),
          notStarted:
            Math.round(
              (notStarted /
                total) *
                100
            ),
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
  getAnalytics,
  getLearningTrend,
  getCourseCompletion,
};