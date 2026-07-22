const express = require("express");
const router = express.Router();

const {
  processDocument,
} = require("../controllers/documentController");

router.get("/process", processDocument);

module.exports = router;