const { BlogPost, User, Category } = require('../../database/models/index');
const { CustomError } = require('../../utils/CustomError');

const getPostByIdService = async (paramsId) => {
  const post = await BlogPost.findOne({
    where: {
      id: paramsId,
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw new CustomError(404, 'Post does not exist');

  return post;
};

module.exports = { getPostByIdService };