const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,

    }
})

const Faculty = mongoose.model('Faculty', FacultySchema)
module.exports = { Faculty }