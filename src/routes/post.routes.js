const { Router } = require('express');
const { addPostController } = require('../controllers/Post/POST-addPost.controller');
const { updatePostController } = require('../controllers/Post/POST-updatePost.controller');
const addPostValidation = require('../middlewares/addPostHandler');
const { tokenHandler } = require('../middlewares/tokenHandler');
const { updatePostValidation } = require('../middlewares/updatePostHandler');

const postRoute = Router();

postRoute
  .post('/post', tokenHandler, addPostValidation, addPostController)
  .put('/post/:id', tokenHandler, updatePostValidation, updatePostController);

module.exports = { postRoute };