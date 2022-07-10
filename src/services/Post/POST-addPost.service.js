const { BlogPost } = require('../../database/models/index');
const { Category } = require('../../database/models/index');
const { PostCategory } = require('../../database/models/index');
const { getUserId } = require('../../helpers/getUser');
const { CustomError } = require('../../utils/CustomError');

async function verifyCategory(post) {
  const categoriesData = await Category.findAll({
    where: { id: post.categoryIds },
  });
  const categories = categoriesData.map((e) => e.dataValues.id);
  if (
    post.categoryIds.length !== categories.length
  ) throw new CustomError(400, '"categoryIds" not found');
}

async function addPostService(post, token) {
  await verifyCategory(post);
  const userId = await getUserId(token);
  const newPost = { title: post.title,
    content: post.content,
    userId,
    published: Date(),
    updated: Date(),
  };
  
  const { dataValues: { id, updated, published } } = await BlogPost.create(newPost);
  await Promise.all(post.categoryIds.map(async (e) => {
    await PostCategory.create({
      postId: id, categoryId: e,
    });
  }));
  newPost.id = id; newPost.published = published; newPost.updated = updated;
  return newPost;
}

module.exports = { addPostService };