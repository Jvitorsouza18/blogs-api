const service = require('../../services/User/USER-register.service');

async function registerController(req, res) {
  const data = req.body;
  const token = await service.registerUserService(data);
  return res.status(201).json({ token });
}

module.exports = { registerController };