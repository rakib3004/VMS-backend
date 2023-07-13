const mongoose = require("mongoose");
const { Schema } = mongoose;

const certificationSchema = new Schema({
  name: { type: String, required: true },
  n_id: { type: String, required: true },
  vaccinations: [
    {
      vaccine_name: { type: String, required: true },
      vaccination_date: { type: String, required: true },
    },
  ],
});

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;
