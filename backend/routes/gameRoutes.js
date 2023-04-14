const express = require("express");

const router = express.Router();
const {
  getGame,
  setGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");
const { protect } = require("../middleware/authAdminMiddleware");

router.route("/").get(protect, getGame).post(protect, setGame);

router.route("/:id").delete(protect, deleteGame).put(protect, updateGame);

module.exports = router;
