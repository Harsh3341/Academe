const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createNews } = require("../controllers/newsController");

//Create News
//POST /api/v1/news
//Admin
router.post("/news", protect, createNews);

module.exports = router;
