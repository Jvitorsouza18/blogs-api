const { CustomError } = require('../utils/CustomError');
const { verifyToken } = require('../utils/token/verifyToken');

async function tokenHandler(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw new CustomError(401, 'Token not found');
  const tokenIsValid = await verifyToken(authorization);
  if (!tokenIsValid) throw new CustomError(401, 'Expired or invalid token');
  return next();
}

module.exports = { tokenHandler };