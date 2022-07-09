const jwt = require('jsonwebtoken');
const { CustomError } = require('../CustomError');
require('dotenv').config();

async function verifyToken(token) {
  return new Promise((resolve, _reject) => {
    const credentials = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new CustomError(401, 'Expired or invalid token');
      }
      resolve(decoded);
    });
    return credentials;
  }); 
}

module.exports = { verifyToken };
