const Skill = require("../models/Skill");
const Roadmap = require("../models/Roadmap");
const generateRoadmap = require("../services/roadmapGenerator");

exports.createRoadmap = async (req, res) => {
  try {
    console.log("USER:", req.user);

    const skills = await Skill.find({
      userId: req.user?.id,
    });

    console.log("SKILLS:", skills);

    const roadmapData =
      generateRoadmap(skills);

    console.log(
      "ROADMAP DATA:",
      roadmapData
    );

    const roadmap =
      await Roadmap.insertMany(
        roadmapData.map((item) => ({
          ...item,
          userId: req.user?.id,
        }))
      );

    console.log(
      "SAVED ROADMAP:",
      roadmap
    );

    res.json({
      success: true,
      roadmap,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Roadmap generation failed",
    });
  }
};