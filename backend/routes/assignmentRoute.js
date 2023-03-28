const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createAssignment,
  getAssignments,
  getAssignment,
  answerAssignment,
} = require("../controllers/assignmentController");

//Create Assignment
//POST /api/v1/assign
//Admin
router.post("/assign", protect, createAssignment);

//Get Assignments
//GET /api/v1/assign
//Public
router.get("/assign", protect, getAssignments);

//Get Assignment
//GET /api/v1/assign/:id
//Public
router.get("/assign/:id", protect, getAssignment);

//Answer Assignment
//POST /api/v1/assign/:id
//Public
router.post("/assign/:id", protect, answerAssignment);

module.exports = router;
