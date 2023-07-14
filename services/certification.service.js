const certificationRepository = require("../repositories/certification.repository");
const userService = require("../services/user.service");
const vaccinationService = require("../services/vaccination.service");
const vaccineService = require("../services/vaccine.service");

const { AppError } = require("../utils/error.handler.util");

exports.getCertificate = async (n_id) => {
  const certificate = await certificationRepository.getCertificate(n_id);
  if (!certificate) {
    return "Empty";
  }
  return certificate;
};

exports.createCertificate = async (body) => {
  const name = body.name;
  const n_id = body.n_id;

  console.log("Creating Certificate");

  const userDTO = await userService.getUserByNID(n_id);
  const user = userDTO.user;
  const user_id = user._id;
  console.log("Get User");

  const vaccinations = await vaccinationService.getVaccination(n_id);
  console.log("Creating Vaccination");

  console.log("first", vaccinations);
  const newVaccinationInfo = await Promise.all(
    vaccinations.map(async (vaccination) => {
      const vaccine_id = vaccination.vaccine_id;
      const vaccine = await vaccineService.getVaccineNameByID(vaccine_id);
      console.log("vaccine", vaccine);
      const vaccine_name = vaccine[0].vaccine_name;
      const vaccination_date = vaccination.vaccination_date;
      return { vaccine_name, vaccination_date };
    })
  );
  console.log("second", newVaccinationInfo);
  const certificateResponse = await certificationRepository.createCertificate(
    name,
    n_id,
    newVaccinationInfo
  );

  return certificateResponse;
};
