const service = require('../../services/User/USER-getUserById.service');

async function getUserByIdController(req, res) {
  const { id } = req.params;
  const user = await service.getUserByIdService(id);
  return res.status(200).json(user);
}

module.exports = { getUserByIdController };