const express =
  require("express");

const router =
  express.Router();

const {
  updateProgress,
} = require(
  "../controllers/progressController"
);

router.put(
  "/:id",
  updateProgress
);

module.exports = router;