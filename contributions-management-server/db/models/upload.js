const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const documentSchema = {
   docFile: {
      type: String
   }
};
mongoose.model('FileDocument', documentSchema);