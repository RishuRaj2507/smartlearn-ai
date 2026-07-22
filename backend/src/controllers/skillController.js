const Skill = require("../models/Skill");

/*
  Create Skill
*/
exports.createSkill = async (
  req,
  res
) => {
  try {
    const skill =
      await Skill.create(req.body);

    res.status(201).json({
      success: true,
      skill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
  Get All Skills
*/
exports.getSkills = async (
  req,
  res
) => {
  try {
    const skills =
      await Skill.find();

    res.json({
      success: true,
      skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
  Skill Analytics
*/
exports.getSkillAnalytics =
  async (req, res) => {
    try {
      const skills =
        await Skill.find();

      const skillData =
        skills.map((skill) => ({
          skill:
            skill.skillName,

          score: Math.round(
            (skill.currentLevel /
              skill.requiredLevel) *
              100
          ),
        }));

      res.status(200).json({
        success: true,
        skills: skillData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };