const express = require("express");

const {
  createRoadmap,
} = require(
  "../controllers/learningRoadmapController"
);

const router = express.Router();

router.post(
  "/generate",
  createRoadmap
);

module.exports = router;