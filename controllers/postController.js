const postData = require("../data/postData");
// Index
const index = (req, res) => {
  let postFiltered = postData;
  const { tags } = req.query;
  if (tags) {
    postFiltered = postFiltered.filter((post) => post.tags.includes(tags));
  }
  res.json(postFiltered);
};
// Show
const show = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  res.json(post);
};
// Store
const store = (req, res) => {
  res.send("Creazione nuovo post");
};
// Update
const update = (req, res) => {
  res.send(`Modifica integrale del post: ${req.params.id}`);
};
// Modify
const modify = (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
};
// Delete
const destroy = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  postData.splice(postData.indexOf(post), 1);
  res.sendStatus(204);
};
module.exports = { index, show, store, update, modify, destroy };
