const asyncHandler = require("express-async-handler");
const assignmentSchema = require("../models/assignmentModel");
const User = require("../models/userModel");
const answerSchema = require("../models/answersModel");

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

const getAssignments = asyncHandler(async (req, res) => {
  const assignments = await assignmentSchema.find();

  if (assignments) {
    res.status(200).json({
      success: true,
      message: "Assignments fetched successfully",
      data: assignments,
    });
  } else {
    res.status(400);
    throw new Error("Assignments not fetched");
  }
});

const getAssignment = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const assignment = await assignmentSchema.findById(id);

  if (assignment) {
    const user = await User.findById(assignment.user);

    res.status(200).json({
      success: true,
      message: "Assignment fetched successfully",
      data: {
        _id: assignment._id,
        title: assignment.title,
        description: assignment.description,
        user: user.name,
      },
    });
  } else {
    res.status(400);
    throw new Error("Assignment not fetched");
  }
});

const answerAssignment = asyncHandler(async (req, res) => {
  const { answer } = req.body;
  const id = req.user._id;
  const assignmentId = req.params.id;

  if (!answer) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const data = await answerSchema.create({
    user: id,
    assignment: assignmentId,
    answer: answer,
  });

  if (data) {
    res.status(201).json({
      success: true,
      message: "Answer submitted successfully",
      data: {
        _id: data._id,
        answer: data.answer,
      },
    });
  } else {
    res.status(400);
    throw new Error("Answer not submitted");
  }
});

module.exports = {
  createAssignment,
  getAssignments,
  getAssignment,
  answerAssignment,
};
