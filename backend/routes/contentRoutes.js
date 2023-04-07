const express = require("express");

const router = express.Router();
const {
  getContent,
  setContent,
  updateContent,
  deleteContent,
} = require("../controllers/contentController");
const { protect } = require("../middleware/authmiddleware");

router.route("/").get(protect, getContent).post(protect, setContent);

router.route("/:id").delete(protect, deleteContent).put(protect, updateContent);

module.exports = router;
