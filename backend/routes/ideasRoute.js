const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createIdea, getIdeas } = require("../controllers/ideaController");

//Create Idea
//POST /api/v1/idea
//Admin
router.post("/idea", protect, createIdea);

//Get Ideas
//GET /api/v1/idea
//Public
router.get("/idea", protect, getIdeas);

module.exports = router;
