const express = require("express");

const router = express.Router();

const {
  createSkill,
  getSkills,
  getSkillAnalytics,
} = require("../controllers/skillController");

/*
  Create Skill
  POST /api/skills
*/
router.post(
  "/",
  createSkill
);

/*
  Get All Skills
  GET /api/skills
*/
router.get(
  "/",
  getSkills
);

/*
  Skill Analytics
  GET /api/skills/analytics
*/
router.get(
  "/analytics",
  getSkillAnalytics
);

module.exports = router;