const { CustomError } = require('../utils/CustomError');

function updatePostValidation(req, res, next) {
  const { title, content } = req.body;
  
  if (!title || !content) throw new CustomError(400, 'Some required fields are missing');
  
  next();
}

module.exports = { updatePostValidation };