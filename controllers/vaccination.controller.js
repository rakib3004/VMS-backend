const contentNegotiation = require("../utils/content-negotiation.util");
const vaccinationService = require("../services/vaccination.service");

exports.getVaccinationDate = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;
    const vaccine_id = req.params.vaccine_id;

    const userResponse = await vaccinationService.getVaccinationDate(
      user_id,
      vaccine_id
    );

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
