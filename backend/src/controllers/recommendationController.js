const Skill = require("../models/Skill");

exports.getRecommendations = async (req, res) => {
  try {
    const skills = await Skill.find();

    const recommendations = [];

    skills.forEach((skill) => {
      const gap =
        skill.requiredLevel -
        skill.currentLevel;

      if (gap > 0) {
        recommendations.push({
          skill: skill.skillName,
          gap,

          recommendation:
            gap >= 20
              ? `Complete Advanced ${skill.skillName} Training Program`
              : `Practice ${skill.skillName} through workshops and assessments`,
        });
      }
    });

    res.json({
      success: true,
      recommendations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};