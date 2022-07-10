const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../../database/models/index');

const getPostBySearchService = async (searchTerm) => {
  const results = await BlogPost.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.substring]: searchTerm,  
        },
        content: {
          [Op.substring]: searchTerm,
        },
      },      
    },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return results;
};

module.exports = { getPostBySearchService };