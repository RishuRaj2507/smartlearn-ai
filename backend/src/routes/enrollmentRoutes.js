const express =
  require("express");

const router =
  express.Router();

  const {
    assignCourse,
    getEnrollments,
    updateProgress,
    getMyCourses,
  } = require(
    "../controllers/enrollmentController"
  );

router.post(
  "/assign",
  assignCourse
);

router.get(
  "/all",
  getEnrollments
);

router.put(
  "/progress/:id",
  updateProgress
);

router.get(
    "/my/:employeeId",
    getMyCourses
  );

module.exports =
  router;