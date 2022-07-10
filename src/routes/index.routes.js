const express = require('express');
const { categoryRoute } = require('./category.routes');
const { postRoute } = require('./post.routes');
const { userRoute } = require('./user.routes');

const Router = express.Router();
Router.use(userRoute);
Router.use(categoryRoute);
Router.use(postRoute);

module.exports = Router;