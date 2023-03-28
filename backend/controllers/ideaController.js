const asyncHandler = require("express-async-handler");
const ideaSchema = require("../models/ideaModel");
const User = require("../models/userModel");

const createIdea = asyncHandler(async (req, res) => {
  const { idea } = req.body;

  if (!idea) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const data = await ideaSchema.create({
    user: req.user._id,
    idea,
  });

  if (data) {
    res.status(201).json({
      success: true,
      message: "Idea created successfully",
      data: {
        _id: data._id,
        idea: data.idea,
      },
    });
  } else {
    res.status(400);
    throw new Error("Idea not created");
  }
});

const getIdeas = asyncHandler(async (req, res) => {
  const ideas = await ideaSchema.find();

  if (ideas) {
    res.status(200).json({
      success: true,
      message: "Ideas fetched successfully",
      data: ideas,
    });
  } else {
    res.status(400);
    throw new Error("Ideas not fetched");
  }
});

module.exports = {
  createIdea,
  getIdeas,
};
