const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ posts: "posts" });
});
const addPost = asyncHandler(async (req, res) => {
  if (!req.body.post) {
    res.status(400);
    throw new Error("Please add post");
  }
  res.status(200).json({ message: `${req.body.post} added successfully` });
});

const editPost = asyncHandler(async (req, res) => {
  res.status(200).json({ posts: `update post ${req.params.id}` });
});

const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ posts: `delete post ${req.params.id}` });
});
module.exports = {
  getPosts,
  addPost,
  editPost,
  deletePost,
};
