const { Vaccine } = require("../models/vaccine.model");

exports.getRandomVaccine = async () => {
  try {
    const randomVaccine = await Vaccine.aggregate([{ $sample: { size: 1 } }]);

    if (!randomVaccine || randomVaccine.length === 0) {
      throw new Error("No vaccine found");
    }

    return randomVaccine;
  } catch (error) {
    console.error("Error fetching random vaccine:", error);
    throw error;
  }
};

exports.getVaccine = async (vaccine_name) => {
  try {
    const vaccine = await Vaccine.find({
      vaccine_name: vaccine_name,
    });
    return vaccine;
  } catch (error) {
    console.error("Error fetching vaccine details:", error);
    throw error;
  }
};

exports.createVaccine = async (vaccine_name) => {
  try {
    const vaccine = new Vaccine({
      vaccine_name: vaccine_name,
    });

    const newVaccine = await vaccine.save();
    return newVaccine;
  } catch (error) {
    console.log(error);
    // throw new Error("Database Error when creating user");
  }
};
