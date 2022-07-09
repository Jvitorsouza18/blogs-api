const { Router } = require('express');
const controller = require('../controllers/Category/CATEGORY-register.controller');
const categoryRegisterValidation = require('../middlewares/categoryRegister');
const { tokenHandler } = require('../middlewares/tokenHandler');

const categoryRoute = Router();

categoryRoute
  .post(
    '/categories',
    tokenHandler, categoryRegisterValidation,
    controller.registerCategoryController,
  );

  module.exports = { categoryRoute };