const service = require('../../services/User/USER-getUsers.service');

async function getUsersController(req, res) {
  const users = await service.getUsersService();
  return res.status(200).json(users);
}

module.exports = { getUsersController };