const asyncHandler = require("express-async-handler");
const video = require("../models/contentMdels/videosModel");
const game = require("../models/contentMdels/gamesModel");
const tale = require("../models/contentMdels/taleModel");
// @desc  Get content
// @route  GET/api/content
//@access  Private
const getContent = asyncHandler(async (req, res) => {
  const content = await content.find();

  res.status(200).json(content);
});

// @desc  Set content
// @route  POST/api/content
//@access  Private
const setContent = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add content name");
  }
  res.status(200).json({ message: "Set content" });
});

// @desc  Update content
// @route  PUT/api/content
//@access  Private
const updateContent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update  content ${req.params.id}` });
});

// @desc  delete content
// @route  DELETE/api/content
//@access  Private
const deleteContent = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete  content ${req.params.id}` });
});
module.exports = { getContent, setContent, deleteContent, updateContent };
