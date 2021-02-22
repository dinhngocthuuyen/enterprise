/* IMPORT MODELS */
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

/* LOAD EXPRESS MODEL */
const app = express();

/* LOAD MONGOOSE MODEL */
const { send } = require('process');
const { asap } = require('rxjs');
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const { Post, Contribution, Coordinator, User, Role, Student, Message, Faculty } = require('./db/models');

/* LOAD GLOBAL MIDDLEWARE */
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
  res.header('Access-Control-Expose-Headers', "x-access-token, x-refresh-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  next();
});

/* MIDDLEWARES APPLY TO USER ONLY */

//Verify refresh token middleware (which will be verifying the session)
let verifySession = ((req, res, next) => {
  //Grab refresh token from request header
  let refreshToken = req.header('x-refresh-token');
  //Grab id from request header
  let _id = req.header('_id');
  User.findByIdAndToken(_id, refreshToken).then((user) => {
    if (!user) {
      //User couldn't be found
      return Promise.reject({'error':'User not found. Make sure that refresh token and user id are correct'});
    }

    //If code reaches here, the user was found. Therefore, the refresh token exists in the database, but still have to check if it expires or not
    req._id = user._id;
    req.refreshToken = refreshToken;
    req.userObject = user;
    let isSessionValid = false;
    //Check if session has expired or not
    user.sessions.forEach((session) => {
      if (session.token === refreshToken) {
        if (User.hasRefreshTokenExpired(session.expiresAt) === false){
          isSessionValid = true;
        }
      }
    })
    if (isSessionValid) {
      //The session is valid, call next() to continue with processing this web request
      next();
    } else {
      return Promise.reject({
        //The session is not valid
        'error' : 'Refresh token has expired or the session is invalid'
      })
    }
  }).catch((e) => {
    res.status(401).send(e); //401: Unauthorized access
  })
})

//Authentication middleware (check whether the request has valid JWT access token)
let authenticate = (req, res, next) => {
  let token = req.header('x-access-token');
  //Verify JWT
  jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
    //If there is an error (invalid access token), DO NOT AUTHENTICATE
    if (err) {
      res.status(401).send(err);
    } else {
      //JWT is valid
      req._id = decoded._id;
      next();
    }
  })
}
/* END MIDDLEWARE*/

/* ROUTE HANDLER */

/////////////////////////////////////////////////////// POST //////////////////////////////////////////////////////////////

app.get('/post', authenticate, (req, res) => {
  //Return an array of all the posts in database that belongs to the authenticated user
  Post.find({_userId: req._id}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

app.get('/guest/guest-detail/:id', (req, res) => {
  //Return an array of all the posts in database
  Post.find({_id: req.params.id}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

app.post('/post', authenticate, (req, res) => {
  //Create a new post and return post document back to user (including post's id)
  //Post's info (fields) will be passed in via JSON request body
  let title = req.body.title
  let post = req.body.post
  let newPost = new Post({
    title,
    post,
    _userId: req._id
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

app.get('/contributions/:id', (req, res) => {
  Contribution.find({_id: req.params.id}).then((contributions) => {
      res.send(contributions);
  });
})
// app.get('/countcontributions', (req, res) => {
//   Contribution.count().then((count) => {
//       res.send(count);
//   });
// })
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

//GET Profile Coordinator
app.get('/profiles', (req, res) => {

    Coordinator.find({}).then((profiles) => {
        res.send(profiles);
    });
})

app.get('/coordinators/:id', (req, res) => {

    Coordinator.find({_id: req.params.id}).then((profiles) => {
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

app.put('/coordinators/:id' ,(req, res) => {
  Coordinator.findOneAndUpdate({_id: req.params.id},{
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

app.post('/users', (req, res) => {
  //Create a new user
  let body = req.body;
  let newUser = new User(body);
  newUser.save().then(() => {
    return newUser.createSession();
  }).then((refreshToken) => {
    //Session created successfully, refresh token returned
    //Now generate an access auth token for the user
    return newUser.generateAccessAuthToken().then((accessToken) => {
      //Access token generated successfully
      //Now return an object containing the auth tokens
      return { accessToken, refreshToken }
    })
  }).then((authTokens) => {
    //Now construct and send respond to user with their auth tokens in the header and user object in the body
    res
        .header('x-refresh-token', authTokens.refreshToken)
        .header('x-access-token', authTokens.accessToken)
        .send(newUser);
  }).catch((e) => {
    res.status(400).send(e);
  })
})

//User logins
app.post('/users/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.findByCredentials(username, password).then((user) => {
    return user.createSession().then((refreshToken) => {
      return user.generateAccessAuthToken().then((accessToken) => {
        return { accessToken, refreshToken }
      })
    }).then((authTokens) => {
      //Now construct and send respond to user with their auth tokens in the header and user object in the body
      res
          .header('x-refresh-token', authTokens.refreshToken)
          .header('x-access-token', authTokens.accessToken)
          .send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  })
})

//Generate and return access token
app.get('/users/me/access-token', verifySession, (req, res) => {
  //The user/caller is authenticated, user id and user object is available
  req.userObject.generateAccessAuthToken().then((accessToken) => {
    res.header('x-access-token', accessToken).send({ accessToken });
  }).catch((e) => {
    res.status(400).send(e);
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

app.get('/user/:id', (req, res) => {
  User.find({_id: req.params.id}).then((user) => {
      res.send(user);
  }).catch((e) => {
    res.send(e);
  });
})
app.get('/users', (req, res) => {
  User.find({}).then((user) => {
      res.send(user);
  });
})

app.post('/faculties', (req, res) => {
  let name = req.body.name;
  let newFaculty = new Faculty({
      name
  });
  newFaculty.save().then((FacultyDoc) => {

      res.send(FacultyDoc);
  })
});
app.get('/faculties/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId
  }).then((contributions) => {
    res.send(contributions);
  })
});
/////Student create contributions////
app.get('/users/:userId/contributions', (req, res) => {
  Contribution.find({
    _userId: req.params.userId
  }).then((contributions) => {
    res.send(contributions);
  })
});
app.post('/users/:userId/contributions', (req, res) => {
  let newContribution = new Contribution({
      file: req.body.file,
      date: req.body.date,
      status: "Pending",
      _userId: req.params.userId,
      _facultyId: req.params.facultyId
  });
  newContribution.save().then((newDoc) => {
    res.send(newDoc)
  })
});

app.get('/contributions', (req, res) => {
  Contribution.find({}).then((roles) => {
      res.send(roles);
  });
})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000`)
})

