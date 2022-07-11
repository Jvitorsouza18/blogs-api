const { deleteUserService } = require('../../services/User/USER-deleteUser.service');

async function deleteUserController(req, res) {
  const token = req.headers.authorization;
  await deleteUserService(token);
  return res.status(204).end();
}

module.exports = { deleteUserController };