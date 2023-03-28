const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createNews, getNews } = require("../controllers/newsController");

//Create News
//POST /api/v1/news
//Admin
router.post("/news", protect, createNews);

//Get News
//GET /api/v1/news
//Admin
router.get("/news", protect, getNews);

module.exports = router;
