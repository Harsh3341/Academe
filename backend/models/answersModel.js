const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "userData",
    },
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Assignments",
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Answers", answerSchema);
