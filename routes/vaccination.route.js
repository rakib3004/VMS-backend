const vaccinationController = require("../controllers/vaccination.controller");
const express = require("express");
const router = express.Router();

router.route("/:user_id").get(vaccinationController.getVaccination);
router.route("/").post(vaccinationController.createVaccination);

module.exports = router;
