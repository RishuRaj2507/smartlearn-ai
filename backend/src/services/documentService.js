const fs = require("fs");
const path = require("path");

const extractTextFromPDF = async () => {
  try {
    const filePath = path.join(
      __dirname,
      "../../knowledge/plc_manual.txt"
    );

    const text = fs.readFileSync(
      filePath,
      "utf8"
    );

    return text;
  } catch (error) {
    console.error(error);

    throw new Error(
      "Unable to read knowledge file"
    );
  }
};

module.exports = {
  extractTextFromPDF,
};