const mongoose = require("mongoose");
const { Schema } = mongoose;
const docSchema = new Schema({
  name: String,
  age: Number,
  experience: Number,
  category: String,
  mail: {
    type: String,
    unique: true,
  },
  img: String,
  qualifications: String,
  reviews: Array,
  patients: Number,
});

module.exports = mongoose.model("doctors", docSchema);
