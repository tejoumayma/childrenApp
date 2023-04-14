const express = require("express");

const router = express.Router();
const {
  getTale,
  setTale,
  updateTale,
  deleteTale,
} = require("../controllers/taleController");
const { protect } = require("../middleware/authAdminMiddleware");

router.route("/").get(protect, getTale).post(protect, setTale);

router.route("/:id").delete(protect, deleteTale).put(protect, updateTale);

module.exports = router;
