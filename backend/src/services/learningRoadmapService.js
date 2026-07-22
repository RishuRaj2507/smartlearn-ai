const {
    generateResponse,
  } = require("./geminiService");
  
  const generateRoadmap = async (
    role,
    skillLevel,
    targetSkill
  ) => {
    const prompt = `
  Create a detailed 90-day learning roadmap.
  
  Role:
  ${role}
  
  Current Skill Level:
  ${skillLevel}
  
  Target Skill:
  ${targetSkill}
  
  Provide:
  
  1. First 30 Days
  2. Next 30 Days
  3. Final 30 Days
  
  For each phase include:
  - Learning Objectives
  - Recommended Courses
  - Practical Tasks
  - Expected Outcome
  `;
    
    return await generateResponse(prompt);
  };
  
  module.exports = {
    generateRoadmap,
  };