const vaccineRepository = require("../repositories/vaccine.repository");

exports.getVaccine = async () => {
  const vaccineResponse = await vaccineRepository.getVaccine();

  if (!vaccinationResponse) {
    throw new AppError("Vaccine not Found", 404);
  }
  return vaccineResponse;
};
