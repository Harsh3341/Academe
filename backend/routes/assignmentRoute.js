const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createAssignment,
  getAssignment,
} = require("../controllers/assignmentController");

// @desc    Create Assignment
// @route   POST /api/v1/assign
// @access  Admin
router.post("/assign", protect, createAssignment);

// @desc    Get Assignments
// @route   GET /api/v1/assign
// @access  Public
router.get("/assign", protect, getAssignment);

module.exports = router;
