/* IMPORT MODELS */
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

/* LOAD EXPRESS MODEL */
const app = express();

/* LOAD MONGOOSE MODEL */
const { Post, Contribution, Coordinator } = require('./db/models');

/* LOAD MIDDLEWARE */
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ROUTE HANDLER */

app.get('/guest', (req, res) => {
  //Return an array of all the posts in database
  Post.find({}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

/////////////////////////////////////////////////////// POST //////////////////////////////////////////////////////////////

app.get('/guest/guest-detail/:id', (req, res) => {
  //Return an array of all the posts in database
  Post.find({_id: req.params.id}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

app.post('/guest', (req, res) => {
  //Create a new post and return post document back to user (including post's id)
  //Post's info (fields) will be passed in via JSON request body
  let title = req.body.title
  let post = req.body.post
  let newPost = new Post({
    title, post
  });
  newPost.save().then((postDoc) => {
    //The full post document is returned (including id)
    res.send(postDoc);
  })
})

app.patch('/post/:id', (req, res) => {
  //Update a selected post (post document with id in the URL) with the new values specified in the JSON body of the request
  Post.findOneAndUpdate({_id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  })
})

app.delete('/post/:id', (req, res) => {
  //Delete a selected post (document with id in the URL)
  Post.findOneAndDelete({
    _id: req.params.id
  }).then((removePost) => {
    res.send(removePost);
  })
})

//////////////////////////////////////////////////////// COORDINATORS ////////////////////////////////////////////////////////////
//Contributions
app.get('/contributions', (req, res) => {
  Contribution.find({}).then((contributions) => {
      res.send(contributions);
  });
})
// app.get('/approvedcontributions', (req, res) => {
//   Contribution.find({pending: true}).then((contribution) => {
//       res.send(contribution);
//   });
// })
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
app.patch('/contributions/:id', (req, res) => {
  Contribution.findOneAndUpdate({_id: req.params.id},{
      $set: req.body
  }).then(() =>{
      res.sendStatus(200);
  });
});

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

///////////////////////////////////////////////////////////// USER /////////////////////////////////////////////////////////////

app.get('/user', (req, res) => {
  //Return an array of all the users in database
  User.find({_id: req.params.id}).then((user) => {
    res.send(user);
  }).catch((e) => {
    res.send(e);
  });
})

app.post('/guest', (req, res) => {
  //Create a new user and return user document back to client (including user's id)
  //User's info (fields) will be passed in via JSON request body
  let username = req.body.username
  let password = req.body.password
  let role = req.body.role
  let newUser = new User({
    username, password, role
  });
  newUser.save().then((userDoc) => {
    //The full user document is returned (including id)
    res.send(userDoc);
  })
})

app.patch('/user/:id', (req, res) => {
  //Update a selected user (user document with id in the URL) with the new values specified in the JSON body of the request
  User.findOneAndUpdate({_id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  })
})

app.delete('/user/:id', (req, res) => {
  //Delete a selected user (document with id in the URL)
  Post.findOneAndDelete({
    _id: req.params.id
  }).then((removeUser) => {
    res.send(removeUser);
  })
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000`)
})

