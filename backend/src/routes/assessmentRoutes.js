const express = require("express");

const {
  saveAssessment,
  getAssessments,
} = require("../controllers/assessmentController");

const router = express.Router();

/*
  Save Assessment Result
  POST /api/assessment/submit
*/
router.post(
  "/submit",
  saveAssessment
);

/*
  Get Assessment History
  GET /api/assessment/history
*/
router.get(
  "/history",
  getAssessments
);

module.exports = router;