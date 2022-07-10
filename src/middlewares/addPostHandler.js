const { CustomError } = require('../utils/CustomError');

function addPostValidation(req, res, next) {
  const { title, content, categoryIds } = req.body;
  if (
    !title
    || !content
    || !categoryIds
  ) throw new CustomError(400, 'Some required fields are missing');
  
  next();
}

module.exports = addPostValidation;