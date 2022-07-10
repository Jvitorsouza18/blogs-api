const { Category } = require('../../database/models/index');

async function registerCategory(category) {
  const { id } = await Category.create(category);
  const confirmRegister = { ...category, id };
  return confirmRegister;
}

module.exports = { registerCategory };