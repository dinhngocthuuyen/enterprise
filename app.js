/* IMPORT MODELS */
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const nodemailer = require("nodemailer");
/* LOAD EXPRESS MODEL */
const app = express();

/* LOAD MONGOOSE MODEL */
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const { Post, Contribution, Coordinator, User, Role, Student, Message, Faculty, Comment} = require('./db/models');
=======

>>>>>>> 3b0042d482dacf9dd9d611b56bde9a0c753a0f69
const { Post, Contribution, Coordinator, User, Role, Student, Message, Faculty, Comment, Closure } = require('./db/models');
const { info } = require('console');
const { result } = require('lodash');

/* LOAD GLOBAL MIDDLEWARE */
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the req from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
  res.header('Access-Control-Expose-Headers', "x-access-token, x-refresh-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  next();
});

/* MIDDLEWARES APPLY TO USER ONLY */

//Verify refresh token middleware (which will be verifying the session)
let verifySession = ((req, res, next) => {
  //Grab refresh token from req header
  let refreshToken = req.header('x-refresh-token');
  //Grab id from req header
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
      //The session is valid, call next() to continue with processing this web req
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

//Authentication middleware (check whether the req has valid JWT access token)
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


/* CONNECT TO MONGODB */
const connectionString = 'mongodb+srv://dbUser:db123456@cluster0.ulahg.mongodb.net/EnterpriseDB?retryWrites=true&w=majority';
const conn = mongoose.createConnection(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

/* LOAD GRIDFS*/
let gfs;
conn.once('open', () => {
  // Initialize stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: connectionString,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      // crypto.randomBytes(16, (err, buf) => {
      //   if (err) {
      //     return reject(err);
      //   }
        // const filename = buf.toString('hex') + path.extname(file.originalname);
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
          metadata: req.body
        };
        resolve(fileInfo);
      // });
    });
  }
});

const upload = multer({ storage });

/***************************************************** ROUTE HANDLER **********************************************************/

/////////////////////////////////////////////////////// UPLOAD //////////////////////////////////////////////////////////////

// student gets files
app.get('/upload/:facultyId/:userId', (req, res) => {
  gfs.files.find({
    metadata: {
      _facultyId: req.params.facultyId,
      _userId: req.params.userId,
    }
  }).toArray((err, files) => {
    if (!files || files.length  === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }
    return res.json(files);
  })
})
// coordinator gets files
app.get('/upload/:facultyId', (req, res) => {
  gfs.files.find({
    "metadata._facultyId": req.params.facultyId,
  }).toArray((err, files) => {
    if (!files || files.length  === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }
    return res.json(files);
  })
})

//Download file
app.get('/upload/download/:facultyId/:userId/:filename', (req, res) => {
  gfs.files.findOne({
    metadata: {
      _facultyId: req.params.facultyId,
      _userId: req.params.userId,
    },
    filename : req.params.filename
  }, (err, file) => {
    if (!file || file.length  === 0) {
      return res.status(404).json({
        err: 'No file exists'
      })
    }
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res); 
  })
})

//Upload a single file to MongoDB
app.post('/upload', upload.single('uploaded_file'), (req, res) => {
  res.send('File uploaded successfully')
})

app.delete('/upload/:id', (req, res) => {
  gfs.remove({_id : req.params.id, root: 'uploads'}, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    res.send('Delete successfully')
  })
})


/////////////////////////////////////////////////////// POST //////////////////////////////////////////////////////////////

//Return an array of all the posts in database that belongs to the authenticated user
app.get('/post', (req, res) => {
  Post.find({}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

app.get('/post/:id', (req, res) => {
  //Return an array of all the posts in database
  Post.find({_id: req.params.id}).then((post) => {
    res.send(post);
  }).catch((e) => {
    res.send(e);
  });
})

app.post('/post', authenticate, (req, res) => {
  //Create a new post and return post document back to user (including post's id)
  //Post's info (fields) will be passed in via JSON req body
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
  //Update a selected post (post document with id in the URL) with the new values specified in the JSON body of the req
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

//GET Profile Coordinator
app.get('/profile/profile-detail/:id', (req, res) => {
  //Return an array of all the posts in database
  User.find({_id: req.params.id}).then((user) => {
    res.send(user);
  }).catch((e) => {
    res.send(e);
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
app.patch('/profile/:id', (req, res) => {
  //Update a selected post (post document with id in the URL) with the new values specified in the JSON body of the req
  User.findOneAndUpdate({_id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  })
})

app.put('/coordinators/:_id' ,(req, res) => {
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
    })
  }).catch((e) => {
    res.status(400).send();
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
  //Update a selected user (user document with id in the URL) with the new values specified in the JSON body of the req
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




app.get('/faculty/:id', (req, res) => {
  Faculty.find({_id: req.params.id}).then((faculty) => {
      res.send(faculty);
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

<<<<<<< HEAD
=======
app.get('/faculties', (req, res) => {
  Faculty.find({}).then((user) => {
    res.send(user);
 });
})

>>>>>>> 3b0042d482dacf9dd9d611b56bde9a0c753a0f69
app.post('/closure', (req, res) => {
  let newClosure = new Closure(req.body);
  newClosure.save().then((ClosureDoc) => {

    res.send(ClosureDoc);
  })
});

app.get('/closure', (req, res) => {
  Closure.find({}).then((closure) => {
    res.send(closure);
 });
})

//app.controller('MainClosure', function($scope) {
//  $scope.Date = '20210313T00:00:00';
  
 // $scope.DateTimeEnd = '20210313T00:00:00';
//});

//////  Coordinator get contributions and send approve

app.get('/coordinator/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId
  }).then((contributions) => {
    res.send(contributions);
  })
});
app.get('/contribution/:id', (req, res) => {
  Contribution.find({_id: req.params.id}).then((contributions) => {
      res.send(contributions);
  });
})
app.patch('/contributions/:id', (req, res) => {
  Contribution.findOneAndUpdate({_id: req.params.id},{
      $set: req.body
  }).then(() =>{
      res.sendStatus(200);
  });
});
<<<<<<< HEAD
app.get('/getMonth/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId
  }, {month: {$month: "$date"}, _id: 0}).then((contributions) => {
=======
app.get('/getYear/:facultyId/contributions/:cyear', (req, res) => {
  // Contribution.aggregate({
  //   _facultyId: req.params.facultyId
  // }, {month: [{$month: "$date"}, 2], _id: 0})
  Contribution.aggregate([
    {
      $project: {year: {$year: "$date"}}
    },
    {
      $match: {year: parseInt(req.params.cyear)}
    }
  ])
  .then((contributions) => {
>>>>>>> 245c6594b526988184b81f282fc79a63debbe5ee
    res.send(contributions);
  })
});
app.get('/getYear/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId
  }, {year: {$year: "$date"}, _id: 0}).then((contributions) => {
    res.send(contributions);
  })
});
app.get('/pending/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId,
    status: "Pending"
  }).then((contributions) => {
    res.send(contributions);
  })
});
app.get('/approved/:facultyId/contributions', (req, res) => {
  Contribution.find({
    _facultyId: req.params.facultyId,
    status: {$ne: "Pending"}
  }).then((contributions) => {
    res.send(contributions);
  })
});
/////// Comment
app.get('/:contributionId/comments', (req, res) => {
  Comment.find({
    _contributionId: req.params.contributionId,
  }).then((comments) => {
    res.send(comments);
  })
});
app.post('/:contributionId/comments', (req, res) => {
  let newCmt = new Comment({
      comment: req.body.comment,
      date: Date.now().toString(),
      _contributionId: req.params.contributionId,
  });
  newCmt.save().then((newDoc) => {
    res.send(newDoc)
  })
});
/////Student create contributions////
// app.get('/users/:userId/contributions', (req, res) => {
//   Contribution.find({
//     _userId: req.params.userId
//   }).then((contributions) => {
//     res.send(contributions);
//   })
// });
// app.post('/users/:userId/contributions', (req, res) => {
//   let newContribution = new Contribution({
//       file: req.body.file,
//       date: Date.now().toString(),
//       status: "Pending",
//       _userId: req.params.userId,
//       _facultyId: req.body.facultyId
//   });
//   newContribution.save().then((newDoc) => {
//     res.send(newDoc)
//   })
// });

app.get('/contributions', (req, res) => {
  Contribution.find({}).then((roles) => {
      res.send(roles);
  });
})

app.get('/:facultyId/coordinator', (req, res) => {
  User.find({
    _facultyId: req.params.facultyId,
    role: "coordinator",
  }).then((coor) => {
    res.send(coor);
  })
});

app.get('/:facultyId/students', (req, res) => {
  User.find({
    _facultyId: req.params.facultyId,
    role: "student",
  }).then((coor) => {
    res.send(coor);
  })
});
/////////////////message//////////////////
app.get('/messages/:facultyId/:studentId', (req, res) => {
  Message.find({
    _studentId: req.params.studentId,
    _facultyId: req.params.facultyId
  }).then((msg) => {
    res.send(msg);
  })
});

app.post('/messages/:facultyId/:studentId', (req, res) => {
  let newMess = new Message({
    text: req.body.text,
    date: Date.now().toString(),
    reply: req.body.reply,
    _studentId: req.params.studentId,
    _facultyId: req.params.facultyId
});
  newMess.save().then((MessageDoc) => {
    res.send(MessageDoc);
  })
})




//////////////////////send mail/////////////
// app.post('/sendMail', (req, res) => {
//   console.log("request came")
//   User.find({_id: req.params.id}).then((user) => {
//       res.send(user);
//   }).catch((e) => {
//     res.send(e);
//   });
// })
app.get('/sendMail/:id', (req, res) => {
  User.find({  _userId: req.params.userId,
  }).then((user) => {
      res.send(user);
  }).catch((e) => {
    res.send(e);
  });
})

app.post('/sendMail', (req, res) => {
  console.log("request came")
  let username = req.body.username;
  let name = req.body.name;


  let email = new User({
    username,name
  });
  sendMail(email, info =>{
    res.send(info)
  })
})
// const CLIENTID='263011216435-sk4g07kjfrb4mt0t5dpml2fkvimv89s1.apps.googleusercontent.com';
// const CLIENTSECRET ='xdatDMw7ET7cTCoPiLJsmcFg';
// const REDIRECTURI ='https://developers.google.com/oauthplayground';
// const REFRESHTOKEN ='//04MMc5Bqs-QsjCgYIARAAGAQSNwF-L9IrCg-1VUaT8zq4A76uj8uXsq7i-FKOpWZVSkG4yvD-49S5ZClJG6CX7PDrv8apzvy80O8';

async function sendMail(){

    // const accessToken = await oAuth2Client.generateAccessAuthToken
    const transporter = nodemailer.createTransport({

      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      service:'gmail',
      auth: {
        // Your full email address
        user: 'dungndtgcs17091@fpt.edu.vn',
        // Your Gmail password or App Password
        pass: '30121999'

        // type: 'OAuth2',
        // user: 'dungndtgcs17091@fpt.edu.vn',
        // clientId: CLIENTID,
        // clientSecret: CLIENTSECRET,
        // redirectUri:REDIRECTURI,
        // refreshToken:REFRESHTOKEN,
      }
      })


    const mailOption = {
      from: 'Dung <dungndtgcs17091@fpt.edu.vn>',// sender address
      to: "ndtd3012199@gmail.com",
     subject: "New submission" , // Subject line
      html: "<b>a new report has been submitted http://localhost:4200/coordinator/60335f75415f78217707d45d/review/60336c3eee28af28831ad73b</b>", // html body
    }
    transporter.sendMail(mailOption, function(error){
      if(error){
        console.log(error);
      }else{
        console.log('Email send success ')
      }
    })
}
////////////////////////////////////////viewprofile/////////////////////////////
app.get('/viewprofile', authenticate, (req, res) => {
  //Return an array of all the posts in database that belongs to the authenticated user
  User.find({role:"student"}).then((viewprofile) => {
    res.send(viewprofile)
  }).catch((e) => {
    res.send(e);
  });
})


app.get('/viewcoor', authenticate, (req, res) => {
  //Return an array of all the posts in database that belongs to the authenticated user
  User.find({role:"coordinator"}).then((viewcoor) => {
    res.send(viewcoor)
  }).catch((e) => {
    res.send(e);
  });
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000`)
})

<<<<<<< HEAD
})
=======

>>>>>>> 3b0042d482dacf9dd9d611b56bde9a0c753a0f69
