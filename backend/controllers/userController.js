const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(
      errors
        .array()
        .map((error) => error.msg)
        .join("\n")
    );
  }
  const { fullname, phone, childName, childSex, email, password } = req.body;

  if (!fullname || !phone || !childName || !childSex || !email || !password) {
    console.log("register");
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creat user
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    phone,
    childName,
    childSex,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      childName: user.childName,
      childSex: user.childSex,
      token: generateToken(user._id, user.isAdmin),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
// @desc    authentificate a user
// @route   POST /api/users
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      childName: user.childName,
      childSex: user.childSex,
      token: generateToken(user._id, user.isAdmin),
    });
    console.log(user);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    getMe
// @route   GET /api/users
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  const { fullname, phone, childName, childSex, email, password } =
    await User.findById(req.user.id);

  res
    .status(200)
    .json({ fullname, phone, childName, childSex, email, password });
});
//generate JTW
const generateToken = (id, isAdmin) =>
  jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "30d" });

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
