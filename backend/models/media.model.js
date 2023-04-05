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
  Time: {
    type: String,
    default: "1 h 30 min",
  },
  Seasons: {
    type: String,
    default: "0",
  },
  Season1Title: {
    type: Array,
    default: [],
  },
  Season2Title: {
    type: Array,
    default: [],
  },
  Season3Title: {
    type: Array,
    default: [],
  },
  Season4Title: {
    type: Array,
    default: [],
  },
  Season5Title: {
    type: Array,
    default: [],
  },
  Season6Title: {
    type: Array,
    default: [],
  },
  Season7Title: {
    type: Array,
    default: [],
  },
  Season8Title: {
    type: Array,
    default: [],
  },
  Season9Title: {
    type: Array,
    default: [],
  },
  Season10Title: {
    type: Array,
    default: [],
  },
  Season11Title: {
    type: Array,
    default: [],
  },
  Season12Title: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('media', MediaSchema);
