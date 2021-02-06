/* IMPORT MODELS */
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

/* LOAD EXPRESS MODEL */
const app = express();

/* LOAD MONGOOSE MODEL */
const { Post } = require('./db/models/post.model');

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



app.listen(3000, () => {
  console.log(`App is listening at http://localhost:3000`)
})

