const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashPassword = async (Password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(Password, salt);
    return hash;
  } catch (err) {
    throw new Error('Hashing failed', err);
  }
};

exports.checkPassword = async (Password, hashedPassword) => {
  try {
    console.log('hashedPassword', hashedPassword);
    console.log('providedPassword', Password);
    const match = await bcrypt.compare(Password, hashedPassword);
    return match;
  } catch (err) {
    throw new Error('Comparison failed', err);
  }
};
