const asyncHandler = require("express-async-handler");
const Game = require("../models/contentMdels/gamesModel");

// @desc  Get game
// @route  GET/api/game
//@access  Private
const getGame = asyncHandler(async (req, res) => {
  const game = await Game.find();

  res.status(200).json(game);
});

// @desc  Set game
// @route  POST/api/game
//@access  Private
const setGame = asyncHandler(async (req, res) => {
  if (!req.body.gameName) {
    res.status(400);
    throw new Error("Please add game name");
  }
  const { gameName, URLgame } = req.body;
  const game = await Game.create({ URLgame, gameName });
  res.status(201).json(game);
});

// @desc  Update game
// @route  PUT/api/game
//@access  Private
const updateGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);
  //check if game exist
  if (!game) {
    res.status(400);
    throw new Error("game not found");
  }
  const updatedgame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedgame);
});

// @desc  delete game
// @route  DELETE/api/game
//@access  Private
const deleteGame = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);
  //check if game exist
  if (!game) {
    res.status(400);
    throw new Error("game not found");
  }

  await Game.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
});
module.exports = { getGame, setGame, deleteGame, updateGame };
