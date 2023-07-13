const certificationRepository = require("../repositories/certification.repository");

const { AppError } = require("../utils/error.handler.util");

exports.getCertificate = async (n_id) => {
  const certificate = await certificationRepository.getCertificate(n_id);
  if (!certificate) {
    throw new AppError("No Certificate still achived", 404);
  }
  return user;
};

exports.createCertificate = async (body) => {
  const name = body.name;
  const n_id = body.n_id;
  //get automatically
  const vaccinations = [
    { vaccine_name: "Moderna", vaccination_date: new Date() },
    { vaccine_name: "Pfizer", vaccination_date: new Date() },
  ];
  const certificateResponse = await certificationRepository.createCertificate(
    name,
    n_id,
    vaccinations
  );

  return certificateResponse;
};
