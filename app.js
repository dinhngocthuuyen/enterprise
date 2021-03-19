/* IMPORT MODELS */
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const dayjs = require('dayjs')

const nodemailer = require("nodemailer");
/* LOAD EXPRESS MODEL */
const app = express();

/* LOAD MONGOOSE MODEL */
const jwt = require('jsonwebtoken');

const {Contribution, Coordinator, User, Message, Faculty, Comment, Closure} = require('./db/models');
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
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
          metadata: req.body
        };
        resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

/***************************************************** ROUTE HANDLER **********************************************************/

/////////////////////////////////////////////////////// UPLOAD //////////////////////////////////////////////////////////////

// student gets files
app.get('/upload/:userId/:topicId', (req, res) => {
  gfs.files.find({
      "metadata._userId": req.params.userId,
      "metadata._topicId": req.params.topicId,
  }).toArray((err, files) => {
    if (!files || files.length  === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }
    return res.json(files);
  })
})

app.get('/upload/:filename', (req, res) => {
  gfs.files.find({
      filename: req.params.filename,
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
    "metadata._facultyId": req.params.facultyId,
    "metadata._userId": req.params.userId,
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
  Contribution.findOne({_userId: req.body._userId}).then((contribution) => {
    if(!contribution){
      console.log('no contribution')
      let date = Date.now();
      let status = req.body.status;
      let _userId = req.body._userId;
      let _facultyId = req.body._facultyId;
      let _topicId = req.body._topicId;
      let newContribution = new Contribution({
        date, status, _userId, _facultyId, _topicId,
      });
      newContribution.save()
    } else {
      console.log('have contribution')
      //file.push(upload)
    }
  })
  
  res.redirect('http://localhost:4200/student/' + req.body._userId + '/topic/' + req.body._topicId +'/upload-contributions')
})

app.delete('/upload/:id', (req, res) => {
  gfs.remove({_id : req.params.id, root: 'uploads'}, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    res.send('Delete successfully')
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
  User.find().then((user) => {
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

app.get('/faculties', (req, res) => {
  Faculty.find({}).then((user) => {
    res.send(user);
 });
})

app.post('/closure', (req, res) => {
  let newClosure = new Closure(req.body);
  newClosure.save().then((ClosureDoc) => {

    res.send(ClosureDoc);
  })
});

app.delete('/closure/:id', (req, res) => {
  //Delete a selected closure (document with id in the URL)
  Closure.findOneAndDelete({
    _id: req.params.id
  }).then((removePost) => {
    res.send(removePost);
  })
})

/**
 * Startdate tới deadline 1 là được nộp bài với sửa bài
 * Deadline 1 tới deadline 2 chỉ được nộp bài sửa nếu trước đó đã nộp file r
 */

 app.get('/closure/:facultyId/:userId', async (req, res) => {
  const getFileUpload = await gfs.files.find({
    metadata: {
      _facultyId: req.params.facultyId,
      _userId: req.params.userId,
    }
  }).toArray();

  const checkFileUpload = (fileUpload) => {
    if (fileUpload.length !== 0) {
      return true;
    }
    return false;
  }

  Closure.find({}).then((closure) => {
    const lastClosure = closure[closure.length -1];
    const currentDate = dayjs();
    const startdate = dayjs(lastClosure.startdate);
    const deadline1 = dayjs(lastClosure.deadline1);
    const deadline2 = dayjs(lastClosure.deadline2);

    const isSubmit = () => {
      const diffStartDate = deadline1.diff(startdate, 'DD-MM-YYY HH:mm');
      const diffDeadline1 = deadline1.diff(currentDate, 'DD-MM-YYY HH:mm');
      const diffDeadline2 = deadline2.diff(currentDate, 'DD-MM-YYY HH:mm');
      const isFileUpload = checkFileUpload(getFileUpload);

      // console.log('diffStartDate', diffStartDate);
      // console.log('diffDeadline1', diffDeadline1);
      // console.log('diffDeadline2', diffDeadline2);

      if (diffStartDate > diffDeadline1 && diffDeadline1 > 0) {
        console.log('Trường hợp 1 tính từ startdate -> deadline1: Mở form');
        return true;
      }

      if (diffDeadline2 < 0) {
        console.log('Trường hợp 3 quá hạn deadline2 & đã nộp bài: Đóng form');
        return false;
      }

      if (diffDeadline2 > diffDeadline1 && isFileUpload) {
        console.log('Trường hợp 2 tính từ deadline1 -> deadline2 & đã nộp bài: Mở form');
        return true;
      }

      return false;
    }
      
    res.send({
      closure: lastClosure,
      isSubmit: isSubmit(),
      filesUpload: getFileUpload,
    });
  })
})


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
app.get('/contribution/studentId/:id', (req, res) => {
  Contribution.findOne({_id: req.params.id}).then((contributions) => {
      res.send(contributions._userId);
  });
})
app.get('/contribution/date/:id', (req, res) => {
  Contribution.findOne({_id: req.params.id}).then((contributions) => {
      res.send(contributions.date);
  });
})

app.patch('/contributions/:id', (req, res) => {
  Contribution.findOneAndUpdate({_id: req.params.id},{
      $set: req.body
  }).then(() =>{
      res.sendStatus(200);
  });
});
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

app.post('/contribution', (req, res) => {
  let newContribution = new Contribution({
      date: Date.now(),
      status: "Pending",
      _userId: req.body.userId,
      _facultyId: req.body.facultyId,
      file: {
        _fileId: req.body.fileId,
        _filename: req.body.filename
      }
  });
  newContribution.save().then((newDoc) => {
    res.send(newDoc)
  })
});

app.get('/contributions', (req, res) => {
  Contribution.find({}).then((contributions) => {
      res.send(contributions);
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