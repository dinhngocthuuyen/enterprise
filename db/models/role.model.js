const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,

  },
});

const Role = mongoose.model('Role', RoleSchema);
module.exports = {
    Role
}
