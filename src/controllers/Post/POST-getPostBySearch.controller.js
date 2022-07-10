const { getPostBySearchService } = require('../../services/Post/POST-getPostBySearch.service');

async function getPostBySearchController(req, res) {
  const { q: searchTerm } = req.query;
  const data = await getPostBySearchService(searchTerm);
  return res.status(200).json(data);
}

module.exports = { getPostBySearchController };