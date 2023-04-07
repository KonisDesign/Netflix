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
  List: {
    type: Array,
    default: [],
  }
});

module.exports = mongoose.model('User', UserSchema);
