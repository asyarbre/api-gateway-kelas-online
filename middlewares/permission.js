module.exports = (...roles) => {
  return (req, res, next) => {
    const role = req.user.data.role;
    if (!roles.includes(role)) {
      return res.status(405).json({
        status: "error",
        message: "You are not authorized to access this resource",
      });
    }
    // if user role is authorized, continue to next middleware
    return next();
  };
};
