const {
    calculateSkillGap,
  } = require(
    "../services/skillGapService"
  );
  
  const {
    generateResponse,
  } = require(
    "../services/geminiService"
  );
  
  const analyzeSkillGap = async (
    req,
    res
  ) => {
    try {
      const {
        currentSkills,
        requiredSkills,
      } = req.body;
  
      const result =
        calculateSkillGap(
          currentSkills,
          requiredSkills
        );
  
      const recommendation =
        await generateResponse(`
  Employee Current Skills:
  ${currentSkills.join(", ")}
  
  Missing Skills:
  ${result.missingSkills.join(", ")}
  
  Create:
  1. Skill Gap Summary
  2. Learning Plan
  3. Training Recommendations
  4. Estimated Learning Timeline
  `);
  
      res.status(200).json({
        success: true,
        analysis: result,
        recommendation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  module.exports = {
    analyzeSkillGap,
  };