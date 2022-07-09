const { Category } = require('../../database/models/index');

async function getCategoriesService() {
  const categories = await Category.findAll();
  return categories;
}

module.exports = { getCategoriesService };
