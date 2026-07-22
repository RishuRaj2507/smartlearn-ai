const Roadmap =
  require("../models/Roadmap");

const updateProgress =
  async (req, res) => {
    try {
      const { id } = req.params;

      const { progress } =
        req.body;

      const roadmap =
        await Roadmap.findByIdAndUpdate(
          id,
          {
            progress,
            status:
              progress >= 100
                ? "Completed"
                : progress > 0
                ? "In Progress"
                : "Upcoming",
          },
          { new: true }
        );

      res.json({
        success: true,
        roadmap,
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
  updateProgress,
};