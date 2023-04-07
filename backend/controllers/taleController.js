const asyncHandler = require("express-async-handler");
const Tale = require("../models/contentMdels/taleModel");
// @desc  Get tale
// @route  GET/api/tale
//@access  Private
const getTale = asyncHandler(async (req, res) => {
  const tale = await Tale.find();

  res.status(200).json(tale);
});

// @desc  Set tale
// @route  POST/api/tale
//@access  Private
const setTale = asyncHandler(async (req, res) => {
  if (!req.body.taleName) {
    res.status(400);
    throw new Error("Please add tale name");
  }
  const { taleName, taleDescription, URLtale } = req.body;
  const tale = await Tale.create({ URLtale, taleName, taleDescription });
  res.status(201).json(tale);
});

// @desc  Update tale
// @route  PUT/api/tale
//@access  Private
const updateTale = asyncHandler(async (req, res) => {
  const tale = await Tale.findById(req.params.id);
  //check if tale exist
  if (!tale) {
    res.status(400);
    throw new Error("tale not found");
  }
  const updatedtale = await Tale.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedtale);
});

// @desc  delete tale
// @route  DELETE/api/tale
//@access  Private
const deleteTale = asyncHandler(async (req, res) => {
  const tale = await Tale.findById(req.params.id);
  //check if tale exist
  if (!tale) {
    res.status(400);
    throw new Error("tale not found");
  }

  await Tale.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
});
module.exports = { getTale, setTale, deleteTale, updateTale };
