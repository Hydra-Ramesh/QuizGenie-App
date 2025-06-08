export const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = 'Something went wrong';
  if (err.status) {
    status = err.status;
  }
  if (err.message) {
    message = err.message;
  }
  const errorResponse = {
    error: message,
  };
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }
  res.status(status).json(errorResponse);
};
