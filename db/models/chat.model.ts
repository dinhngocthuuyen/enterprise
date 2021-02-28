const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({

})

const Chat = mongoose.model('Chat', ChatSchema)
module.exports = { Chat }

