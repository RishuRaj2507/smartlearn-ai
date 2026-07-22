const express = require("express");

const {
  createQuiz,
} = require(
  "../controllers/quizController"
);

const router = express.Router();

router.post(
  "/generate",
  createQuiz
);

module.exports = router;