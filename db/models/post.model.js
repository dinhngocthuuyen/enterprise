const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    post: String,
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = { 
    Post 
}