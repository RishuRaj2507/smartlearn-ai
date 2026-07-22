const {
  getKnowledgeBase,
} = require("../utils/loadKnowledge");

const {
  generateResponse,
} = require("./geminiService");

const Skill =
  require("../models/Skill");

const Assessment =
  require("../models/Assessment");

const Roadmap =
  require("../models/Roadmap");

/**
 * Retrieve relevant document context
 */
const retrieveRelevantContext = (
  query
) => {
  const docs =
    getKnowledgeBase();

  const queryWords =
    query
      .toLowerCase()
      .split(" ");

  let bestMatch = "";
  let highestScore = 0;

  docs.forEach((doc) => {
    let score = 0;

    queryWords.forEach((word) => {
      if (
        doc.content
          .toLowerCase()
          .includes(word)
      ) {
        score++;
      }
    });

    if (
      score > highestScore
    ) {
      highestScore = score;
      bestMatch =
        doc.content;

      console.log(
        "Retrieved:",
        doc.fileName
      );
    }
  });

  return bestMatch;
};

/**
 * Build Employee Learning Profile
 */
const buildEmployeeProfile =
  async () => {
    const skills =
      await Skill.find();

    const assessments =
      await Assessment.find();

    const roadmap =
      await Roadmap.find();

    const skillData =
      skills.length > 0
        ? skills
            .map(
              (s) =>
                `${s.skillName}
Current Level: ${s.currentLevel}
Required Level: ${s.requiredLevel}`
            )
            .join("\n\n")
        : "No skill data available";

    const assessmentData =
      assessments.length > 0
        ? assessments
            .map(
              (a) =>
                `${a.topic}
Score: ${a.percentage}%`
            )
            .join("\n\n")
        : "No assessment data available";

    const roadmapData =
      roadmap.length > 0
        ? roadmap
            .map(
              (r) =>
                `${r.title}
Progress: ${r.progress}%`
            )
            .join("\n\n")
        : "No roadmap data available";

    return `
EMPLOYEE SKILLS:
${skillData}

ASSESSMENTS:
${assessmentData}

LEARNING ROADMAP:
${roadmapData}
`;
  };

/**
 * Personalized RAG + AI Coach
 */
const askRAG = async (
  question
) => {
  const context =
    retrieveRelevantContext(
      question
    );

  const employeeProfile =
    await buildEmployeeProfile();

  const prompt = `
You are an Industrial Learning &
Development AI Coach.

Use the employee profile,
assessment history,
roadmap progress,
and training documents
to provide personalized guidance.

Your response should include:

1. Personalized recommendation
2. Skill gap analysis
3. Suggested next learning activity
4. Expected improvement
5. Industrial relevance

=================================

EMPLOYEE PROFILE:

${employeeProfile}

=================================

TRAINING DOCUMENT CONTEXT:

${context}

=================================

USER QUESTION:

${question}

=================================

Provide a detailed and professional answer.
`;

  return await generateResponse(
    prompt
  );
};

module.exports = {
  askRAG,
  retrieveRelevantContext,
};