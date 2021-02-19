const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,

    },
    password: String,
    _roleId: {
      type: mongoose.Types.ObjectId
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = {
    User
}
