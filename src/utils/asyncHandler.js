// making utilities to make our work more efficient

//first method
/* const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
}; */

//second method
const asyncHandler = (requestHandler) => {
  async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)); // nextr is use for middlewares
  };
};

export { asyncHandler };
