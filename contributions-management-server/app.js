const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose')

const bodyParser = require('body-parser');


//lOAD IN MONGOOSE MODEL
const { Faculty, Contribution, Coordinator, Student, Role, User } = require('./db/models')

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
app.get('/contributions', (req, res) => {

    Contribution.find({}).then((reivews) => {
        res.send(reivews);
    });
})
app.get('/contributions/:_id', (req, res) => {

  Contribution.find({
    _id: req.params._id
  }).then((reivews) => {
      res.send(reivews);
  });
})
//POST Review
app.post('/contributions', (req, res) => {
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
app.patch('/contributions/:id', (req, res) => {
    Contribution.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(() =>{
        res.sendStatus(200);
    });
    });

/////////////////////////////////

//GET Profile Coordinator
app.get('/profiles', (req, res) => {

    Coordinator.find({}).then((profiles) => {
        res.send(profiles);
    });
})
//POST Profile Coordinator
app.post('/profiles', (req, res) => {
    let name = req.body.name;
    let address = req.body.address;

    let phone = req.body.phone;
    let email = req.body.email;
    let dob = req.body.dob;


    let newCoordinator = new Coordinator({
        name,address,dob,email,phone
    });
    newCoordinator.save().then((CoordinatorDoc) => {

        res.send(CoordinatorDoc);
    })
})


//GET Coordinator
app.get('/coordinators', (req, res) => {
  Coordinator.find({}).then((coordinators) => {
      res.send(coordinators);
  });
});

//POST Coordinator
app.post('/coordinators', (req, res) => {
  let name = req.body.name;
  let address = req.body.address;
  let phone = req.body.phone;
  let dob = req.body.dob;
  let email = req.body.email;

  let newCoordinator = new Coordinator({
      name,
      address,
      phone,
      dob,
      email
  });
  newCoordinator.save().then((listDoc) => {

      res.send(listDoc);
  })
});

// Get contribution which is modified by specific coordinator
app.get('/coordinators/:coordinatorId/contributions', (req, res) => {
  Contribution.find({
    _coordinatorId: req.params.coordinatorId
  }).then((contributions) => {
    res.send(contributions);
  })
});
app.post('/coordinators/:coordinatorId/contributions', (req, res) => {
  let newContribution = new Contribution({
      description: req.body.description,
      date: req.body.date,
      status: req.body.status,
      pending: req.body.pending,
      _coordinatorId: req.params.coordinatorId
  });
  newContribution.save().then((newDoc) => {
    res.send(newDoc)
  })
});
app.patch('/coordinators/:coordinatorId/contributions/:contributionId', (req, res) =>{
  Contribution.findOneAndUpdate({
    _id: req.params.contributionId,
    _coordinatorId: req.params.coordinatorId
  }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  })
})

app.post('/users', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let newUser = new User({
      username, password
  });
  newUser.save().then((listDoc) => {

      res.send(listDoc);
  })
})

app.get('/users', (req, res) => {

  User.find({}).then((users) => {
      res.send(users);
  });
})

//////////////////////////////////////
app.listen(3000, () => {
    console.log("Connection on port 3000");
})

