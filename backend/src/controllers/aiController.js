const { askRAG } = require("../services/ragService");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    console.log("\n====================");
    console.log("USER QUESTION:");
    console.log(message);

    const response = await askRAG(message);

    console.log("\nAI RESPONSE:");
    console.log(response);
    console.log("====================\n");

    res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};