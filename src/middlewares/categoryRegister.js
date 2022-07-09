const { CustomError } = require('../utils/CustomError');

function categoryRegisterValidation(req, res, next) {
  const { name } = req.body;
  if (!name) throw new CustomError(400, '"name" is required');
  next();
}

module.exports = categoryRegisterValidation;