const { Category } = require('../../database/models/index');

async function registerCategory(category) {
  const id = await Category.create(category);
  const confirmRegister = { ...category, id: id.null };
  return confirmRegister;
}

module.exports = { registerCategory };