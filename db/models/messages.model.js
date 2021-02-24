const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: String,
  date: Date,
  _userId: {
    type: mongoose.Types.ObjectId
  },
  userName:{
    type: mongoose.Types.ObjectId

  }
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = { Message }

