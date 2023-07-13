const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.route("/:n_id").get(userController.getUserByNID);

module.exports = router;
