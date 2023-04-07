const asyncHandler = require("express-async-handler");
const Video = require("../models/contentMdels/videosModel");

// @desc  Get video
// @route  GET/api/video
//@access  Private
const getVideo = asyncHandler(async (req, res) => {
  const video = await Video.find();

  res.status(200).json(video);
});

// @desc  Set video
// @route  POST/api/video
//@access  Private
const setVideo = asyncHandler(async (req, res) => {
  if (!req.body.vdName) {
    res.status(400);
    throw new Error("Please add video name");
  }
  const { vdName, vdDescription, URLvd } = req.body;
  const video = await Video.create({ URLvd, vdName, vdDescription });
  res.status(201).json(video);
});

// @desc  Update video
// @route  PUT/api/video
//@access  Private
const updateVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  //check if video exist
  if (!video) {
    res.status(400);
    throw new Error("video not found");
  }
  const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedVideo);
});

// @desc  delete video
// @route  DELETE/api/video
//@access  Private
const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  //check if video exist
  if (!video) {
    res.status(400);
    throw new Error("video not found");
  }

  await Video.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = { getVideo, setVideo, deleteVideo, updateVideo };
