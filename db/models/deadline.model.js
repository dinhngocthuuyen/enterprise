const { getLocaleDateTimeFormat } = require('@angular/common');
const mongoose = require('mongoose');

const DeadlineSchema = new mongoose.Schema({
  startdate: {
    type: Date,

  },
  deadline1: {
    type: Date,
  },
  deadline2: {
    type: Date,
  }
});

const Deadline = mongoose.model('Deadline', DeadlineSchema);
module.exports = {
    Deadline
}
