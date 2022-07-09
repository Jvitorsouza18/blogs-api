const service = require('../../services/Category/CATEGORY-getCategories');

async function getCategoriesController(req, res) {
  const categories = await service.getCategoriesService();
  return res.status(200).json(categories);
}

module.exports = { getCategoriesController };