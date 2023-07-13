const { Vaccine } = require("../models/index.model"); // Import your Mongoose model for Vaccine

exports.getRandomVaccine = async () => {
  try {
    const randomVaccine = await Vaccine.aggregate([{ $sample: { size: 1 } }]);

    if (!randomVaccine || randomVaccine.length === 0) {
      throw new Error("No vaccine found");
    }

    return randomVaccine[0];
  } catch (error) {
    console.error("Error fetching random vaccine:", error);
    throw error;
  }
};
