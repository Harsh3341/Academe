const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createAssignment } = require("../controllers/assignmentController");

// @desc    Create Assignment
// @route   POST /api/v1/assign
// @access  Admin
router.post("/assign", protect, createAssignment);

module.exports = router;
