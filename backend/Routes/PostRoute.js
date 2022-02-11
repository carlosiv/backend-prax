const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  editPost,
  deletePost,
} = require("../Controllers/postsController");

router.route("/").get(getPosts).post(addPost);

router.route("/:id").put(editPost).delete(deletePost);

module.exports = router;
