const { User } = require('../../database/models/index');
const { CustomError } = require('../../utils/CustomError');
const { generateToken } = require('../../utils/token/generateToken');

async function loginService(login) {
  const users = await User.findOne({ where: { email: login.email } });
  if (!users) throw new CustomError(400, 'Invalid fields');
  const validUser = users.password === login.password;
  if (!validUser) throw new CustomError(400, 'Invalid fields');
  const token = generateToken(login);
  return token;
}

module.exports = { loginService };
