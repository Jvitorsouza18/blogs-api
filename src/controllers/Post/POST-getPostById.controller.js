const { getPostByIdService } = require('../../services/Post/POST-getPostById.service');

async function getPostByIdController(req, res) {
  const { id } = req.params;
  const data = await getPostByIdService(id);
  return res.status(200).json(data);
}

module.exports = { getPostByIdController };