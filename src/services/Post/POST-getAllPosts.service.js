const { BlogPost, User, Category } = require('../../database/models/index');

async function getAllPostService() {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },      
    ],
  });

  return posts;
}

module.exports = { getAllPostService };