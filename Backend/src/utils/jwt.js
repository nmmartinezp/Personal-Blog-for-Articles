const jwt = require("jsonwebtoken");

class JwtUtil {
  generateToken(payload, key, exp) {
    try {
      const options = {
        expiresIn: exp,
      };
      const token = jwt.sign(payload, key, options);
      return token;
    } catch (err) {
      console.error("We had an error generating the token: " + err);
    }
  }

  verifyToken(token, key) {
    try {
      const decoded = jwt.verify(token, key);
      return decoded;
    } catch (err) {
      console.error("We had an error verifying the token: " + err);
    }
  }
}

module.exports = new JwtUtil();
