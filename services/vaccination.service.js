const vaccinationRepository = require("../repositories/vaccination.repository");
const userNotFoundMessage = "User not found";
const { AppError } = require("../utils/error.handler.util");

exports.getVaccinationDate = async (n_id) => {
  const vaccinationResponse = await vaccinationRepository.getVaccinationDate(
    user_id,
    vaccine_id
  );

  if (!userResponse) {
    throw new AppError(userNotFoundMessage, 404);
  }
  return vaccinationResponse;
};
