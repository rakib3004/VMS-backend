const certificationController = require("../controllers/certification.controller");
const express = require("express");
const router = express.Router();

router.route("/:n_id").get(certificationController.getCertificate);
router.route("/").post(certificationController.createCertificate);

module.exports = router;
