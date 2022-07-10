const { getAllPostService } = require('../../services/Post/POST-getAllPosts.service');

async function getAllPostControllers(req, res) {
  const data = await getAllPostService();
  return res.status(200).json(data);
}

module.exports = { getAllPostControllers };