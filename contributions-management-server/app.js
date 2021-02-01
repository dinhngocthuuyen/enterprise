const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose')

const bodyParser = require('body-parser');


//lOAD IN MONGOOSE MODEL
const { Faculty } = require('./db/models')

//load middleware
 app.use(bodyParser.json());


//CORS HEADER MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

//ROUTE HANDLERS
//LIST ROUTES

//GET
app.get('/faculties', (req, res) => {

    Faculty.find({}).then((faculties) => {
        res.send(faculties);
    });
})

//POST
app.post('/faculties', (req, res) => {
    let name = req.body.name;

    let newFaculty = new Faculty({
        name
    });
    newFaculty.save().then((listDoc) => {

        res.send(listDoc);
    })
})

//PATCH
app.patch('/faculties/:id', (req, res) => {
Faculty.findOneAndUpdate({_id: req.params.id},{
    $set: req.body
}).then(() =>{
    res.sendStatus(200);
});
});

//DELETE
app.delete('/faculties/:id', (req, res) => {
Faculty.findByIdAndRemove({
    _id: req.params.id
}).then((removeFacultyDoc)=>{
    res.send(removeFacultyDoc);
})
});
app.listen(3000, () => {
    console.log("Connection on port 3000");
})
