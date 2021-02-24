const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  date: {
    type: Date,
  },
  _contributionId: {
    type: mongoose.Types.ObjectId,
  }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = {
    Comment
}
