const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  duration: {
    type: Int,
    required: true,
  },
  questions: {
    type: array,
    required: true,
  },
  schedule_time: {
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

const Exam = mongoose.model("exam-tantra", ExamSchema);
module.exports = Exam;