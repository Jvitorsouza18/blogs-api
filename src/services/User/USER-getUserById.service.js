const { User } = require('../../database/models/index');
const { CustomError } = require('../../utils/CustomError');

async function getUserByIdService(paramsId) {
  console.log('PARAMS ID:', paramsId);
  const user = await User.findOne({
    where: { id: Number(paramsId) }, 
    attributes: { exclude: ['password'] },
  });
  if (!user) throw new CustomError(404, 'User does not exist');
  return user;
}

module.exports = { getUserByIdService };