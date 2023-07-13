const contentNegotiation = require("../utils/content-negotiation.util");
const vaccineService = require("../services/vaccine.service");

exports.getVaccine = async (req, res, next) => {
  try {
    const vaccine_name = req.params.vaccine_name;

    const vaccinationResponse = await vaccineService.getVaccine(vaccine_name);

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

exports.createVaccine = async (req, res, next) => {
  try {
    const body = req.body;

    const vaccinationResponse = await vaccineService.createVaccine(body);

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
