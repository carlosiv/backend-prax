const express = require("express");
const router = express.Router();
const {
  getItems,
  addItem,
  editItem,
  deleteItem,
} = require("../Controllers/cartController");

router.route("/").get(getItems).post(addItem);

router.route("/item/:id").put(editItem).delete(deleteItem);

module.exports = router;
