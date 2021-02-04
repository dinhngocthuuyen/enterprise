const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    post: String
});

const Post = mongoose.model('Post', PostSchema);
module.exports = { 
    Post 
}