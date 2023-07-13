const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccineSchema = new Schema({
  vaccine_name: { type: String, required: true, unique: true },
});

const Vaccine = mongoose.model("Vaccine", vaccineSchema);

module.exports = { Vaccine };
