const asyncHandler = require("express-async-handler");

const getItems = asyncHandler(async (req, res) => {
  res.status(200).json({ items: "items" });
});
const addItem = asyncHandler(async (req, res) => {
  if (!req.body.item) {
    res.status(400);
    throw new Error("Please add item");
  }
  res.status(200).json({ message: `${req.body.item} added successfully` });
});

const editItem = asyncHandler(async (req, res) => {
  res.status(200).json({ item: `update item ${req.params.id}` });
});

const deleteItem = asyncHandler(async (req, res) => {
  res.status(200).json({ item: `delete item ${req.params.id}` });
});
module.exports = {
  getItems,
  addItem,
  editItem,
  deleteItem,
};
