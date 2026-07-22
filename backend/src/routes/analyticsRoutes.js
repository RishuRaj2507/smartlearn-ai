const express = require("express");

const router = express.Router();

const {
  getAnalytics,
  getLearningTrend,
  getCourseCompletion,
} = require("../controllers/analyticsController");

// Analytics Overview
router.get(
  "/overview",
  getAnalytics
);

// Learning Trend
router.get(
  "/trend",
  getLearningTrend
);

// Course Completion
router.get(
  "/completion",
  getCourseCompletion
);

module.exports = router;