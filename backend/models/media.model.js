const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Genre: {
    type: Array,
    required: true,
  },
  Synopsis: {
    type: String,
    required: true,
  },
  Trailer: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  },
  Poster: {
    type: String,
    required: true,
  },
  Pegi: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('media', MediaSchema);
