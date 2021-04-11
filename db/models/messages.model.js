const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  date: Date,
  reply: Boolean,
  _studentId: mongoose.Types.ObjectId,
  _facultyId: mongoose.Types.ObjectId
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = { Message }

