const { hashPassword, checkPassword } = require('../utils/password.utils');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
