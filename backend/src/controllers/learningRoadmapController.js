const {
    generateRoadmap,
  } = require(
    "../services/learningRoadmapService"
  );
  
  const createRoadmap = async (
    req,
    res
  ) => {
    try {
      const {
        role,
        skillLevel,
        targetSkill,
      } = req.body;
  
      const roadmap =
        await generateRoadmap(
          role,
          skillLevel,
          targetSkill
        );
  
      res.status(200).json({
        success: true,
        roadmap,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  module.exports = {
    createRoadmap,
  };