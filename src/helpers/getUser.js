const { User } = require('../database/models/index');
const { verifyToken } = require('../utils/token/verifyToken');

async function getUserId(token) {
  const user = await verifyToken(token);
  const userData = await User.findOne({ where: { email: user.email } });
  return userData.dataValues.id;
}

module.exports = { getUserId };