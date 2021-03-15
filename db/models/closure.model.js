const { getLocaleDateTimeFormat } = require('@angular/common');
const mongoose = require('mongoose');

const ClosureSchema = new mongoose.Schema({
  startdate: {
    type: String,
  },
  deadline1: {
    type: String,
  },
  deadline2: {
    type: String,
  },
  _facultyId: {
    type: mongoose.Types.ObjectId,
  },
  _userId: {
    type: mongoose.Types.ObjectId,
  },
});

const Closure = mongoose.model('Closure', ClosureSchema);
module.exports = {
  Closure
}
