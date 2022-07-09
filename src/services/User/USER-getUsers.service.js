const { User } = require('../../database/models/index');

async function getUsersService() {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
}

module.exports = { getUsersService };