const Knowledge = require("../models/Knowledge");

const chunkText = require(
  "../utils/chunkText"
);

const {
  extractTextFromPDF,
} = require("../services/documentService");

const processDocument = async (
  req,
  res
) => {
  try {
    const text =
      await extractTextFromPDF();

    const chunks = chunkText(text);

    await Knowledge.deleteMany({});

    const documents = chunks.map(
      (chunk) => ({
        content: chunk,
      })
    );

    await Knowledge.insertMany(
      documents
    );

    res.status(200).json({
      success: true,
      chunksStored: chunks.length,
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
  processDocument,
};