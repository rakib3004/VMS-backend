const router = require("express").Router();
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const testRouter = require("./test.route");
const vaccinationRouter = require("./vaccination.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/vaccination", vaccinationRouter);
router.use("/test", testRouter);

module.exports = router;
