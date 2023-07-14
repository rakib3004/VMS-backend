const vaccinationRepository = require("../repositories/vaccination.repository");
const { AppError } = require("../utils/error.handler.util");
const { getVaccinationDate } = require("../utils/vaccination.util");
const vaccineService = require("../services/vaccine.service");
const userService = require("../services/user.service");
const mongoose = require("mongoose");

exports.getVaccination = async (n_id) => {
  const userObject = await userService.getUserByNID(n_id);

  const user_id = userObject.user._id.toString();

  const vaccinationResponse = await vaccinationRepository.getVaccination(
    user_id
  );

  if (!vaccinationResponse) {
    return "Empty";
  }
  return vaccinationResponse;
};
exports.createVaccination = async (body) => {
  const n_id = body.n_id;
  const userObject = await userService.getUserByNID(n_id);

  const user_id = userObject.user._id.toString();

  //const vaccine = await vaccineService.getVaccine("Moderna");
  const vaccine = await vaccineService.getRandomVaccine();

  const vaccine_id = vaccine[0]._id.toString();

  const vaccination_date = await getVaccinationDate();

  const vaccinationResponse = await vaccinationRepository.createVaccination(
    user_id,
    vaccine_id,
    vaccination_date
  );

  return vaccinationResponse;
};
