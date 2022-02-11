const getPosts = (req, res) => {
  res.status(200).json({ posts: "posts" });
};

const addPost = (req, res) => {
  res.status(200).json({ posts: "set post" });
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
