const express =
  require("express");

const router =
  express.Router();

const {
  createCourse,
  getCourses,
  deleteCourse,
} = require(
  "../controllers/courseController"
);

router.post(
  "/create",
  createCourse
);

router.get(
  "/all",
  getCourses
);

router.delete(
  "/:id",
  deleteCourse
);

module.exports = router;