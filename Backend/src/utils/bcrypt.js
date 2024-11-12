const bcrypt = require("bcrypt");

class BcryptUtil {
  async hash(plainText, saltRounds) {
    try {
      const hashed = await bcrypt.hash(plainText, saltRounds);
      return hashed;
    } catch (err) {
      throw new Error("we had an error trying to hash");
    }
  }

  async compareText(input, stored) {
    try {
      const match = await bcrypt.compare(input, stored);
      return match;
    } catch (err) {
      throw new Error("We had an error trying to compare");
    }
  }
}

module.exports = new BcryptUtil();
