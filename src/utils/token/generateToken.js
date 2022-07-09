const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generateToken(credentials) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(credentials, process.env.JWT_SECRET, {
      expiresIn: '365d',
    }, (err, t) => {
      if (err) reject(err);
      resolve(t);
    });
    return token;
  });
}

module.exports = { generateToken };
