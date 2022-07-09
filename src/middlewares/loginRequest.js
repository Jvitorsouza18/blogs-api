const { CustomError } = require('../utils/CustomError');

function loginRequestValidation(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) throw new CustomError(400, 'Some required fields are missing');

  next();
}

module.exports = loginRequestValidation;