// @desc  Get content
// @route  Put/api/admin
//@access  Private
const geContent = (req, res) => {
  res.status(200).json({ message: "get content" });
};
// @desc  Set content
// @route  POST/api/admin
//@access  Private
const setContent = (req, res) => {
  res.status(200).json({ message: "get content" });
};
// @desc  Update content
// @route  PUT/api/admin/
//@access  Private
const updateContent = (req, res) => {
  res.status(200).json({ message: "get content" });
};

// @desc  delete content
// @route  DELETE/api/admin
//@access  Private
const deleteContent = (req, res) => {
  res.status(200).json({ message: "get content" });
};
module.exports = { geContent, setContent, deleteContent, updateContent };
