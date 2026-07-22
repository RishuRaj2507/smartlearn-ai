const mongoose = require("mongoose");

const knowledgeSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      default: "training-document",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Knowledge",
  knowledgeSchema
);