const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  created_at: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tone: {
    type: String,
    required: true
  }
});

module.exports = {
  Tweet
};
