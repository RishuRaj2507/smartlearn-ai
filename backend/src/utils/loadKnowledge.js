const fs = require("fs");
const path = require("path");

let knowledgeBase = [];

const loadKnowledge = () => {
  const uploadsDir = path.join(__dirname, "../../uploads");

  const files = fs.readdirSync(uploadsDir);

  knowledgeBase = files.map((file) => {
    const content = fs.readFileSync(
      path.join(uploadsDir, file),
      "utf-8"
    );

    return {
      fileName: file,
      content,
    };
  });

  console.log(
    `Loaded ${knowledgeBase.length} knowledge documents`
  );
};

const getKnowledgeBase = () => knowledgeBase;

module.exports = {
  loadKnowledge,
  getKnowledgeBase,
};