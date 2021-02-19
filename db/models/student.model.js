const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,

  },
  _userId: {
    type: mongoose.Types.ObjectId
  }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = {
    Student
}
