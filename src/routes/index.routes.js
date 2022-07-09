const express = require('express');
const { categoryRoute } = require('./category.routes');
const { userRoute } = require('./user.routes');

const Router = express.Router();
Router.use(userRoute);
Router.use(categoryRoute);

module.exports = Router;