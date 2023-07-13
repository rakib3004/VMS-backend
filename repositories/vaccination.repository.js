const { Vaccination } = require("../models/index.model");

exports.getVaccinationDate = async (user_id) => {
  try {
    const vaccination = await Vaccination.find({
      user_id: user_id,
    });
    return vaccination;
  } catch (error) {
    console.error("Error fetching vaccination details:", error);
    throw error;
  }
};
