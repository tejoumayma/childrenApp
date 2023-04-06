const express = require("express");

const router = express.Router();
const { getContent } = require("../controllers/contentController");

router.get("/", getContent);

router.post("/", (req, res) => {
  res.status(200).json({ message: "set content" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update  content ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete  content ${req.params.id}` });
});

module.exports = router;
