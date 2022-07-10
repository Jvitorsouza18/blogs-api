const service = require('../../services/Post/POST-addPost.service');

async function addPostController(req, res) {
  const token = req.headers.authorization;
  const post = req.body;
  const data = await service.addPostService(post, token);
  return res.status(201).json(data);
}

module.exports = { addPostController };