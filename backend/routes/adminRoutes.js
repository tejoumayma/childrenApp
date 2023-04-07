const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getMe,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authAdminMiddleware");

router.post("/", registerAdmin);
router.post("/login", loginAdmin);
router.get("/me", protect, getMe);

module.exports = router;
