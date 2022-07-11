const { BlogPost } = require('../../database/models/index');
const { getUserId } = require('../../helpers/getUser');
const { CustomError } = require('../../utils/CustomError');

async function verifyUser(token) {
  const userId = await getUserId(token);
  return userId;
}

async function deletePostService(id, token) {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) throw new CustomError(404, 'Post does not exist');
  const userId = await verifyUser(token);
  const userIsAuthorized = userId === post.userId;
  if (!userIsAuthorized) throw new CustomError(401, 'Unauthorized user');
  await BlogPost.destroy({ where: { id } });
}

module.exports = { deletePostService };