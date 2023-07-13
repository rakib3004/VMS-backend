const contentNegotiation = require("../utils/content-negotiation.util");
const userService = require("../services/user.service");

exports.getUserByNID = async (req, res, next) => {
  try {
    const n_id = req.params.n_id;
    const userResponse = await userService.getUserByNID(n_id);

    return contentNegotiation.sendResponseInContentNegotiation(
      req,
      res,
      200,
      userResponse
    );
  } catch (err) {
    next(err);
  }
};
