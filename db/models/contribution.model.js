const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  status: {
    type: String,
  },
  _facultyId: { type: mongoose.Types.ObjectId },
  _userId: { type: mongoose.Types.ObjectId },
  _topicId: { type: mongoose.Types.ObjectId },
  file: [{
    _filename: String,
  }]
})

const Contribution = mongoose.model('Contribution', ContributionSchema)
module.exports = { Contribution }

