const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  // user_id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  n_id: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[1-9]\d{12}$/.test(value);
      },
      message: "Invalid NID number format",
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Vaccine Schema
const vaccineSchema = new Schema({
  vaccine_id: { type: String, required: true },
  vaccine_name: { type: String, required: true },
});

const Vaccine = mongoose.model("Vaccine", vaccineSchema);

// Vaccination Schema
const vaccinationSchema = new Schema({
  user_id: { type: String, required: true },
  vaccine_id: { type: String, required: true },
  vaccination_date: { type: Date, required: true },
});

const Vaccination = mongoose.model("Vaccination", vaccinationSchema);

module.exports = { User, Vaccine, Vaccination };
