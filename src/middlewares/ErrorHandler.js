const { CustomError } = require('../utils/CustomError');

class ErrorHandler {
  constructor(defaultStatus = 500) { this.defaultStatus = defaultStatus; }

  handle(error, req, res, _next) {
    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(this.defaultStatus).json({ message: 'Internal error' });
  }
}

const errorHandler = new ErrorHandler();

module.exports = errorHandler;