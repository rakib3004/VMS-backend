const contentNegotiation = require("../utils/content-negotiation.util");
const vaccinationService = require("../services/vaccination.service");

exports.getVaccination = async (req, res, next) => {
  try {
    const n_id = req.params.n_id;

    const vaccinationResponse = await vaccinationService.getVaccination(n_id);

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

exports.createVaccination = async (req, res, next) => {
  try {
    const body = req.body;

    const vaccinationResponse = await vaccinationService.createVaccination(
      body
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
