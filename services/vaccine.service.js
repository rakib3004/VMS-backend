const vaccineRepository = require("../repositories/vaccine.repository");
const { AppError } = require("../utils/error.handler.util");

exports.getRandomVaccine = async () => {
  const vaccineResponse = await vaccineRepository.getRandomVaccine();

  console.log(vaccineResponse);
  return vaccineResponse;
};

exports.getVaccine = async (vaccine_name) => {
  const vaccineResponse = await vaccineRepository.getVaccine(vaccine_name);

  if (!vaccineResponse) {
    throw new AppError("Vaccine not Found", 404);
  }
  return vaccineResponse;
};

exports.getVaccineNameByID = async (vaccine_id) => {
  const vaccineResponse = await vaccineRepository.getVaccineNameByID(
    vaccine_id
  );

  if (!vaccineResponse) {
    throw new AppError("Vaccine not Found", 404);
  }
  return vaccineResponse;
};

exports.createVaccine = async (body) => {
  const vaccine_name = body.vaccine_name;

  const vaccineResponse = await vaccineRepository.createVaccine(vaccine_name);

  return vaccineResponse;
};
