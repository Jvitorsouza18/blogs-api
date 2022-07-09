const express = require('express');
const { userRoute } = require('./user.routes');

const Router = express.Router();
Router.use(userRoute);

module.exports = Router;