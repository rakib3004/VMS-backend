const vaccineController = require("../controllers/vaccine.controller");
const express = require("express");
const router = express.Router();

router.route("/:vaccine_name").get(vaccineController.getVaccine);
router.route("/name/:vaccine_id").get(vaccineController.getVaccineNameByID);

router.route("/").post(vaccineController.createVaccine);

module.exports = router;
