const router = require("express").Router();
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const testRouter = require("./test.route");
const vaccinationRouter = require("./vaccination.route");
const vaccineRouter = require("./vaccine.route");
const certificationRouter = require("./certification.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/vaccination", vaccinationRouter);
router.use("/vaccine", vaccineRouter);
router.use("/certificate", certificationRouter);
router.use("/test", testRouter);

module.exports = router;
