const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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
module.exports = { User };
