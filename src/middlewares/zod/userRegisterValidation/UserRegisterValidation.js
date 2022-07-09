const { CustomError } = require('../../../utils/CustomError');
const { userRegisterSchema } = require('./userRegisterSchema');

class UserRegisterValidation {
  constructor(schema) {
    this.schema = schema;
  }

  validate(req, res, next) {
    const newUser = req.body;
    const result = this.schema.safeParse(newUser);
    if (result.success) return next();
    const { issues: [{ message }] } = result.error;
    throw new CustomError(400, message);
  }
}

const userRegistrationValidation = new UserRegisterValidation(userRegisterSchema);

module.exports = { userRegistrationValidation };