const calculateSkillGap = (
    currentSkills,
    requiredSkills
  ) => {
    const missingSkills =
      requiredSkills.filter(
        (skill) =>
          !currentSkills.includes(skill)
      );
  
    const completion =
      Math.round(
        (currentSkills.length /
          requiredSkills.length) *
          100
      );
  
    return {
      completion,
      missingSkills,
    };
  };
  
  module.exports = {
    calculateSkillGap,
  };