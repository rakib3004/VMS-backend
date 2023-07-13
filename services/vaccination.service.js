const vaccinationRepository = require("../repositories/vaccination.repository");
const { AppError } = require("../utils/error.handler.util");

exports.getVaccination = async (user_id) => {
  const vaccinationResponse = await vaccinationRepository.getVaccination(
    user_id
  );

  if (!vaccinationResponse) {
    throw new AppError("Vaccine not Found", 404);
  }
  return vaccinationResponse;
};
exports.createVaccination = async (body) => {
  const user_id = body.user_id;
  const vaccine_id = body.vaccine_id;
  const vaccination_date = Date.now(); // implement vaccination date within 5 to 12 days

  const vaccinationResponse = await vaccinationRepository.createVaccination(
    user_id,
    vaccine_id,
    vaccination_date
  );

  return vaccinationResponse;
};
