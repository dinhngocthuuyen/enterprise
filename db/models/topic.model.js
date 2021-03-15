const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: String,
    deadline1: Date,
    deadline2: Date
});

const Topic = mongoose.model('Topic', TopicSchema);
module.exports = { 
    Topic 
}