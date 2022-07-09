const { User } = require('../../database/models/index');
const { CustomError } = require('../../utils/CustomError');
const { generateToken } = require('../../utils/token/generateToken');

async function registerUserService(user) {
  const registeredUser = await User.findOne({ where: { email: user.email } });
  if (registeredUser) throw new CustomError(409, 'User already registered');
  await User.create(user);
  const token = generateToken(user);
  return token;
}

module.exports = { registerUserService };