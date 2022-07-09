const service = require('../../services/User/USER-login.service');

async function loginController(req, res) {
    const data = req.body;
    const token = await service.loginService(data);
    return res.status(200).json({ token });
}

module.exports = { loginController };