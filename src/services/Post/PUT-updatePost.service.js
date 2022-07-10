const { BlogPost, User, Category } = require('../../database/models/index');
const { getUserId } = require('../../helpers/getUser');
const { CustomError } = require('../../utils/CustomError');

async function verifyUser(token) {
  const userId = await getUserId(token);
  return userId;
}

async function updatePostService(paramsId, token, updatedPost) {
  const post = await BlogPost.findOne({ where: { id: paramsId } });
  const userId = await verifyUser(token);
  const userIsAuthorized = userId === post.userId;
  if (!userIsAuthorized) throw new CustomError(401, 'Unauthorized user');
  await BlogPost.update({ ...updatedPost, updated: new Date() }, { where: { id: paramsId } });
  const updatedPostResult = await BlogPost.findOne({ 
    where: { id: paramsId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
   });
  return updatedPostResult;
}

module.exports = { updatePostService };