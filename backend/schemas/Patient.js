const mongoose = require("mongoose");
const { Schema } = mongoose;

const PatSchema = new Schema({
  name: String,
  mail: {
    type: String,
    unique: true,
  },
  appointment: Array,
  doctor: Array,
});

module.exports = mongoose.model("Patients", PatSchema);
