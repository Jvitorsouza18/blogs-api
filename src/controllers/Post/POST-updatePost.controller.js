const { updatePostService } = require('../../services/Post/POST-updatePost.service');

async function updatePostController(req, res) {
  const { id } = req.params;
  const token = req.headers.authorization;
  const post = req.body;
  const data = await updatePostService(id, token, post);
  return res.status(200).json(data);
}

module.exports = { updatePostController };