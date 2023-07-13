const contentNegotiation = require("../utils/content-negotiation.util");
const certificationService = require("../services/certification.service");

exports.getCertificate = async (req, res, next) => {
  try {
    const n_id = req.params.n_id;
    const certificateResponse = await certificationService.getCertificate(n_id);

    return contentNegotiation.sendResponseInContentNegotiation(
      req,
      res,
      200,
      certificateResponse
    );
  } catch (err) {
    next(err);
  }
};

exports.createCertificate = async (req, res, next) => {
  try {
    const body = req.body;

    const certificateResponse = await certificationService.createCertificate(
      body
    );

    return contentNegotiation.sendResponseInContentNegotiation(
      req,
      res,
      200,
      certificateResponse
    );
  } catch (err) {
    next(err);
  }
};
