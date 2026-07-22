const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

  const {
    getProfile,
    createEmployee,
    getAllUsers,
  } = require(
    "../controllers/userController"
  );


router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.post(
  "/create",
  createEmployee
);
router.get(
  "/all",
  getAllUsers
);
module.exports = router;