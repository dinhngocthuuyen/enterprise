//Handle connection logic to the MongoDB database

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbUser:db123456@cluster0.ulahg.mongodb.net/EnterpriseDB?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to Mongo");
    console.log(e);
})

//Prevent deprecation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };

//mongodb://localhost:27017/PostDB
//mongodb+srv://dbUser:db123456@cluster0.ulahg.mongodb.net/EnterpriseDB?retryWrites=true&w=majority
