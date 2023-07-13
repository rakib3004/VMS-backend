const contentNegotiation = require("../utils/content-negotiation.util");
const vaccinationService = require("../services/vaccination.service");

exports.getVaccinationDate = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;

    const vaccinationResponse = await vaccinationService.getVaccinationDate(
      user_id
    );

    return contentNegotiation.sendResponseInContentNegotiation(
      req,
      res,
      200,
      vaccinationResponse
    );
  } catch (err) {
    next(err);
  }
};
