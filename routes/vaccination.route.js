const vaccinationController = require("../controllers/vaccination.controller");
const express = require("express");
const router = express.Router();

router
  .route("/:user_id/:vaccine_id")
  .get(vaccinationController.getVaccinationDate);

module.exports = router;
