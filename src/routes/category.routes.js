const { Router } = require('express');
const { 
  getCategoriesController,
} = require('../controllers/Category/CATEGORY-getCategories.controller');
const controller = require('../controllers/Category/CATEGORY-register.controller');
const categoryRegisterValidation = require('../middlewares/categoryRegister');
const { tokenHandler } = require('../middlewares/tokenHandler');

const categoryRoute = Router();

categoryRoute
  .post(
    '/categories',
    tokenHandler, categoryRegisterValidation,
    controller.registerCategoryController,
  )
  .get('/categories', tokenHandler, getCategoriesController);

  module.exports = { categoryRoute };