const {
    generateRawResponse,
  } = require("./geminiService");
  
  const generateQuiz = async (
    topic
  ) => {
    const prompt = `
  Generate EXACTLY 5 MCQs.
  
  Return ONLY valid JSON.
  
  Format:
  
  [
   {
     "question":"...",
     "options":["A","B","C","D"],
     "answer":"..."
   }
  ]
  
  Topic:
  ${topic}
  
  Do NOT explain anything.
  Do NOT add text before JSON.
  Do NOT add text after JSON.
  `;
  
    return await generateRawResponse(
      prompt
    );
  };
  
  module.exports = {
    generateQuiz,
  };