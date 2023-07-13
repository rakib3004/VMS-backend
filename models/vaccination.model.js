const mongoose = require("mongoose");
const { Schema } = mongoose;
const vaccinationSchema = new Schema({
  user_id: { type: String, required: true },
  vaccine_id: { type: String, required: true },
  vaccination_date: { type: String, required: true },
});

const Vaccination = mongoose.model("Vaccination", vaccinationSchema);

module.exports = { Vaccination };
