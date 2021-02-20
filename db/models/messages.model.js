const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  reply: Boolean,
  date: Date,
  _userId: {
    type: mongoose.Types.ObjectId
  }
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = { Message }

