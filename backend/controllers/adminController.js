const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const { validationResult } = require("express-validator");

// @desc    Register new admin
// @route   POST /api/admins
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
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
  const { name, email, password } = req.body;

  // Check if admin exists
  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error("admin already exists");
  }

  if (!name || !email || !password) {
    console.log("register");
    res.status(400);
    throw new Error("Please add all fields");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creat admin
  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token: generateToken(admin._id, admin.isAdmin),
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});
// @desc    authentificate a admin
// @route   POST /api/admins
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for admin email

  const admin = await Admin.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id, admin.isAdmin),
    });
    console.log(admin);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    getMe
// @route   GET /api/admins
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  const { name, email, password } = await Admin.findById(req.admin.id);

  res.status(200).json({ name, email, password });
});
//generate JTW
const generateToken = (id, isAdmin) =>
  jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "30d" });

module.exports = {
  registerAdmin,
  loginAdmin,
  getMe,
};
