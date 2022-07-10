const { Router } = require('express');
const { addPostController } = require('../controllers/Post/POST-addPost.controller');
const { getAllPostControllers } = require('../controllers/Post/POST-getAllPosts.controller');
const { getPostByIdController } = require('../controllers/Post/POST-getPostById.controller');
const { updatePostController } = require('../controllers/Post/POST-updatePost.controller');
const addPostValidation = require('../middlewares/addPostHandler');
const { tokenHandler } = require('../middlewares/tokenHandler');
const { updatePostValidation } = require('../middlewares/updatePostHandler');

const postRoute = Router();

postRoute
  .post('/post', tokenHandler, addPostValidation, addPostController)
  .put('/post/:id', tokenHandler, updatePostValidation, updatePostController)
  .get('/post', tokenHandler, getAllPostControllers)
  .get('/post/:id', tokenHandler, getPostByIdController);

module.exports = { postRoute };