const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login Successful",
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, userId, email, password, role } = req.body;

  if (!name || !userId || !email || !password || !role) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({
    userId,
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    userId,
    email: email.toLowerCase(),
    password: hashedPassword,
    role: role.toLowerCase(),
  });

  if (user) {
    sendToken(generateToken(user._id), 200, res, user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = {
  loginUser,
  registerUser,
};
