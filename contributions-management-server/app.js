const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose')

const bodyParser = require('body-parser');


//lOAD IN MONGOOSE MODEL
const { Faculty, Contribution } = require('./db/models')

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

//GET faculty
app.get('/faculties', (req, res) => {

    Faculty.find({}).then((faculties) => {
        res.send(faculties);
    });
})

//POST faculty
app.post('/faculties', (req, res) => {
    let name = req.body.name;

    let newFaculty = new Faculty({
        name
    });
    newFaculty.save().then((listDoc) => {

        res.send(listDoc);
    })
})

//PATCH faculty
app.patch('/faculties/:id', (req, res) => {
Faculty.findOneAndUpdate({_id: req.params.id},{
    $set: req.body
}).then(() =>{
    res.sendStatus(200);
});
});

//DELETE faculty
app.delete('/faculties/:id', (req, res) => {
Faculty.findByIdAndRemove({
    _id: req.params.id
}).then((removeFacultyDoc)=>{
    res.send(removeFacultyDoc);
})
});

////////////////////////////////////

//GET Review
app.get('/reviews', (req, res) => {

    Contribution.find({}).then((reivews) => {
        res.send(reivews);
    });
})
//POST Review
app.post('/reviews', (req, res) => {
    let description = req.body.description;
    let date = req.body.date;

    let status = req.body.status;
    let pending = req.body.pending;


    let newContribution = new Contribution({
        description,date,status,pending
    });
    newContribution.save().then((ContributionDoc) => {

        res.send(ContributionDoc);
    })
})
//PATCH Review
app.patch('/reviews/:id', (req, res) => {
    Contribution.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
    });
app.listen(3000, () => {
    console.log("Connection on port 3000");
})
