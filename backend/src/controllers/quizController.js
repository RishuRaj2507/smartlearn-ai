const {
    generateQuiz,
  } = require("../services/quizService");
  
  const createQuiz = async (
    req,
    res
  ) => {
    try {
      const { topic } = req.body;
  
      if (!topic) {
        return res.status(400).json({
          success: false,
          message: "Topic is required",
        });
      }
  
      const quizText =
        await generateQuiz(topic);
  
      let quiz;
  
      try {
        // Remove markdown wrappers if AI returns them
        const cleanedQuiz =
          quizText
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
  
        quiz = JSON.parse(cleanedQuiz);
  
      } catch (parseError) {
        console.error(
          "Quiz Parse Error:",
          parseError
        );
  
        return res.status(400).json({
          success: false,
          message:
            "AI returned invalid quiz format",
          rawResponse: quizText,
        });
      }
  
      return res.status(200).json({
        success: true,
        totalQuestions: quiz.length,
        quiz,
      });
  
    } catch (error) {
      console.error(
        "Quiz Generation Error:",
        error
      );
  
      return res.status(500).json({
        success: false,
        message:
          "Failed to generate quiz",
        error: error.message,
      });
    }
  };
  
  module.exports = {
    createQuiz,
  };