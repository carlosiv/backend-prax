const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  editPost,
  deletePost,
} = require("../Controllers/postsController");

router.get("/", getPosts);

router.post("/", addPost);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

module.exports = router;
