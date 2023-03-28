const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/userController");

// @desc    Login User
// @route   POST /api/v1/login
// @access  Public
router.post("/login", loginUser);

// @desc    Register User
// @route   POST /api/v1/register
// @access  Public
router.post("/register", registerUser);

module.exports = router;
