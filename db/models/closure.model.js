const { getLocaleDateTimeFormat } = require('@angular/common');
const mongoose = require('mongoose');

const ClosureSchema = new mongoose.Schema({
  topic: {
    type: String,
  },
  startdate: {
    type: String,
  },
  deadline1: {
    type: String,
  },
  deadline2: {
    type: String,
  }
})

const Closure = mongoose.model('Closure', ClosureSchema);
module.exports = {
  Closure
}
