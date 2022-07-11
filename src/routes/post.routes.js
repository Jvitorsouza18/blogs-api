const { Router } = require('express');
const { addPostController } = require('../controllers/Post/POST-addPost.controller');
const { deletePostController } = require('../controllers/Post/POST-deletePost.controller');
const { getAllPostControllers } = require('../controllers/Post/POST-getAllPosts.controller');
const { getPostByIdController } = require('../controllers/Post/POST-getPostById.controller');
const { 
  getPostBySearchController,
} = require('../controllers/Post/POST-getPostBySearch.controller');
const { updatePostController } = require('../controllers/Post/POST-updatePost.controller');
const addPostValidation = require('../middlewares/addPostHandler');
const { tokenHandler } = require('../middlewares/tokenHandler');
const { updatePostValidation } = require('../middlewares/updatePostHandler');

const postRoute = Router();

postRoute
.get('/post/search', tokenHandler, getPostBySearchController)
.post('/post', tokenHandler, addPostValidation, addPostController)
.put('/post/:id', tokenHandler, updatePostValidation, updatePostController)
.get('/post', tokenHandler, getAllPostControllers)
.get('/post/:id', tokenHandler, getPostByIdController)
.delete('/post/:id', tokenHandler, deletePostController);

module.exports = { postRoute };