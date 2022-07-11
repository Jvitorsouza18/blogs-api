const { getUserId } = require('../../helpers/getUser');
const { User } = require('../../database/models/index');

async function deleteUserService(token) {
  const userId = await getUserId(token);
  await User.destroy({ where: { id: userId } });
}

module.exports = { deleteUserService };