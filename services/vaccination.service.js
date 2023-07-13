const vaccinationRepository = require("../repositories/vaccination.repository");
const { AppError } = require("../utils/error.handler.util");
const { getVaccinationDate } = require("../utils/vaccination.util");
const vaccineService = require("../services/vaccine.service");
const userService = require("../services/user.service");

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
  const n_id = body.n_id;
  const user_id = userService.getUserByNID(n_id);
  const vaccine = vaccineService.getVaccine();
  const vaccine_id = vaccine._id;
  const vaccination_date = getVaccinationDate();

  const vaccinationResponse = await vaccinationRepository.createVaccination(
    user_id,
    vaccine_id,
    vaccination_date
  );

  return vaccinationResponse;
};
