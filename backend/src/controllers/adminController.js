const Skill =
  require("../models/Skill");

const Assessment =
  require("../models/Assessment");

const Roadmap =
  require("../models/Roadmap");

exports.getAdminDashboard =
async (req,res)=>{

  try {

    const skills =
      await Skill.find();

    const assessments =
      await Assessment.find();

    const roadmap =
      await Roadmap.find();

    const employees =
      [...new Set(
        skills.map(
          s => String(s.userId)
        )
      )];

    res.json({
      success:true,

      totalEmployees:
        employees.length,

      totalSkills:
        skills.length,

      totalAssessments:
        assessments.length,

      roadmapItems:
        roadmap.length
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};