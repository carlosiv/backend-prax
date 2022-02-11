const getPosts = (req, res) => {
  res.status(200).json({ posts: "posts" });
};

const addPost = (req, res) => {
  if (!req.body.post) {
    res.status(400);
    throw new Error("Please add post");
  }
  res.status(200).json({ message: `${req.body.post} added successfully` });
};

const editPost = (req, res) => {
  res.status(200).json({ posts: `update post ${req.params.id}` });
};

const deletePost = (req, res) => {
  res.status(200).json({ posts: `delete post ${req.params.id}` });
};

module.exports = {
  getPosts,
  addPost,
  editPost,
  deletePost,
};
