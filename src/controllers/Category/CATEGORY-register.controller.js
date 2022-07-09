const { registerCategory } = require('../../services/Category/CATEGORY-register.service');

async function registerCategoryController(req, res) {
  const data = req.body;
  const confirmRegister = await registerCategory(data);
  return res.status(201).json(confirmRegister);
}

module.exports = { registerCategoryController };