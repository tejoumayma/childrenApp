const express = require("express");

const router = express.Router();
const {
  getVideo,
  setVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videosController");
const { protect } = require("../middleware/authmiddleware");

router.route("/").get(protect, getVideo).post(protect, setVideo);

router.route("/:id").delete(protect, deleteVideo).put(protect, updateVideo);

module.exports = router;
