const mongoose = require('mongoose');

const CoordinatorSchema = new mongoose.Schema({
  name: {
  type: String,
  // required: true,
  // minlength: 1,
  // trim: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
  },

})

const Coordinator = mongoose.model('Coordinator', CoordinatorSchema)
module.exports = { Coordinator }

