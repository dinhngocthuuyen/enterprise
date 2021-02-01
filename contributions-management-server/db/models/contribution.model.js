const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,

  },
  date: {
    type: Date,
   

  },
  status: {
    type: Boolean,
  },
  pending: {
    type: Boolean,
  }
})

const Contribution = mongoose.model('Contribution', ContributionSchema)
module.exports = { Contribution }

