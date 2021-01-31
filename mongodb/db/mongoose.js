const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/enterprise',{ useNewUrlParser: true }).then(() =>{
    console.log("connect mongodb success");
}).catch((e) =>{
    console.log("Error");
    console.log(e);
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}