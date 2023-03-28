const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createAssignment,
  getAssignments,
  getAssignment,
  answerAssignment,
} = require("../controllers/assignmentController");

// @desc    Create Assignment
// @route   POST /api/v1/assign
// @access  Admin
router.post("/assign", protect, createAssignment);

// @desc    Get Assignments
// @route   GET /api/v1/assign
// @access  Public
router.get("/assign", protect, getAssignments);

// @desc    Get Assignment
// @route   GET /api/v1/assign/:id
// @access  Public
router.get("/assign/:id", protect, getAssignment);

// @desc    Answer Assignment
// @route   POST /api/v1/assign/:id
// @access  Public
router.post("/assign/:id", protect, answerAssignment);

module.exports = router;
