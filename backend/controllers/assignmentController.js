const asyncHandler = require("express-async-handler");
const assignmentSchema = require("../models/assignmentModel");

const createAssignment = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const data = await assignmentSchema.create({
    user: req.user._id,
    title,
    description,
  });

  if (data) {
    res.status(201).json({
      success: true,
      message: "Assignment created successfully",
      data: {
        _id: data._id,
        title: data.title,
        description: data.description,
      },
    });
  } else {
    res.status(400);
    throw new Error("Assignment not created");
  }
});

module.exports = {
  createAssignment,
};
