const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  marks: {
    type: Int,
    reuired: true,
  },
  submitted_by: {
    type: String,
    reuired: true,
  },
  title: {
    type: String,
    required: true,
  },
  conducted_by: {
    type: String,
    required: true,
  },
});

const Response = mongoose.model("exam-tantra", ResponseSchema);
module.exports = Response;