const express = require("express");

const router =
  express.Router();

const {
  generateCertificate,
  getCertificates,
  getEmployeeCertificates,
} = require(
  "../controllers/certificateController"
);

router.post(
  "/generate",
  generateCertificate
);

router.get(
  "/",
  getCertificates
);

router.get(
  "/employee/:employeeId",
  getEmployeeCertificates
);

module.exports = router;