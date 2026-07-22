const generateRoadmap = (skills) => {
  const roadmap = [];

  skills.forEach((skill) => {
    const gap =
      skill.requiredLevel - skill.currentLevel;

    if (gap > 0) {
      roadmap.push(
        {
          month: "Month 1",
          title: `${skill.skillName} Fundamentals`,
          difficulty: "Beginner",
          duration: "20 Hours",
          status: "Completed",
          progress: 100,
        },
        {
          month: "Month 2",
          title: `${skill.skillName} Core Concepts`,
          difficulty: "Intermediate",
          duration: "25 Hours",
          status: "Completed",
          progress: 100,
        },
        {
          month: "Month 3",
          title: `${skill.skillName} Practical Applications`,
          difficulty: "Intermediate",
          duration: "30 Hours",
          status: "In Progress",
          progress: 65,
        },
        {
          month: "Month 4",
          title: `${skill.skillName} Industrial Troubleshooting`,
          difficulty: "Advanced",
          duration: "35 Hours",
          status: "Upcoming",
          progress: 0,
        },
        {
          month: "Month 5",
          title: `${skill.skillName} Advanced Projects`,
          difficulty: "Advanced",
          duration: "40 Hours",
          status: "Upcoming",
          progress: 0,
        },
        {
          month: "Month 6",
          title: `${skill.skillName} Certification Preparation`,
          difficulty: "Expert",
          duration: "50 Hours",
          status: "Upcoming",
          progress: 0,
        }
      );
    }
  });

  return roadmap;
};

module.exports = generateRoadmap;