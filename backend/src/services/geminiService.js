const Groq = require("groq-sdk");

const {
  getUserProfile,
} = require("./personalizationService");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateResponse = async (
  prompt,
  employeeId = "EMP001"
) => {
  try {
    const user =
      getUserProfile(employeeId);

    const personalizedPrompt = `
You are an Industrial Learning & Development AI Coach.

Employee:
${user?.name}

Role:
${user?.role}

Department:
${user?.department}

Skill Level:
${user?.skillLevel}

Interests:
${user?.interests?.join(", ")}

User Request:
${prompt}
`;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are an Industrial Learning Assistant.",
          },
          {
            role: "user",
            content: personalizedPrompt,
          },
        ],
      });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to generate response"
    );
  }
};

const generateRawResponse = async (
  prompt
) => {
  try {
    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "Return only the requested output. No explanation.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to generate response"
    );
  }
};

module.exports = {
  generateResponse,
  generateRawResponse,
};