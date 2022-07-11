const { Router } = require('express');
const { deleteUserController } = require('../controllers/User/USER-deleteUser.controller');
const { getUserByIdController } = require('../controllers/User/USER-getUserById.controller');
const { getUsersController } = require('../controllers/User/USER-getUsers.controller');
const { loginController } = require('../controllers/User/USER-login.controller');
const { registerController } = require('../controllers/User/USER-register.controller');
const loginRequestValidation = require('../middlewares/loginRequest');
const { tokenHandler } = require('../middlewares/tokenHandler');
const { 
  userRegistrationValidation,
 } = require('../middlewares/zod/userRegisterValidation/UserRegisterValidation');

const userRoute = Router();

userRoute
  .post('/login', loginRequestValidation, loginController)
  .post(
    '/user', 
    (req, res, next) => userRegistrationValidation.validate(req, res, next), 
    registerController,
    )
  .get('/user', tokenHandler, getUsersController)
  .get('/user/:id', tokenHandler, getUserByIdController)
  .delete('/user/me', tokenHandler, deleteUserController);

module.exports = { userRoute };