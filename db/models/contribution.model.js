const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  //////
  status: {
    type: String,
  },
  _facultyId: { type: mongoose.Types.ObjectId },
  _userId: {
    type: mongoose.Types.ObjectId
  }
})

const Contribution = mongoose.model('Contribution', ContributionSchema)
module.exports = { Contribution }

