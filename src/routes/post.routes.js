const { Router } = require('express');
const { addPostController } = require('../controllers/Post/addPost.controller');
const addPostValidation = require('../middlewares/addPostHandler');
const { tokenHandler } = require('../middlewares/tokenHandler');

const postRoute = Router();

postRoute
  .post('/post', tokenHandler, addPostValidation, addPostController);

module.exports = { postRoute };