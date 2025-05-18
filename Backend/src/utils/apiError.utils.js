class apiError extends Error {
  constructor(statusCode, message, data, stack) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
