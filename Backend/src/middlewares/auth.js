const jwt = require('../utils/jwt');
const config = require('../config');

exports.verifySession = function (req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const user = req.body.user;

    if (!authHeader) {
        return next(new Error("Token not provided"));
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return next(new Error("Invalid token format"));
    }

    const token = parts[1];
    const decoded = jwt.verifyToken(token, config.keys_auth.jwt);

    if(user !== decoded.user){
      return next(new Error("Invalid or expired token"));
    }
    
    next();
  } catch (err) {
    next(new Error("Invalid or expired token"));
  }
};
