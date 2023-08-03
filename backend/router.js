const app = require("express");
const Totalposts = require("./models/postSchema")
const User = require("./models/usersSchema")
const Category = require("./models/categorySchema")
const Comment = require("./models/commentSchema")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const express = require('express');

const fs = require('fs');
const route = app.Router()

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true });
var conn = mongoose.connection;
conn.on('connected', function () {
  console.log('database is connected successfully');
});
conn.on('disconnected', function () {
  console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

route.post("/submit-form", (req, res) => {
  var formData = req.body;
  var myData = new User(formData);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

route.get('/submitUserGet-form', async (req, res) => {
  let result = await User.find()
    .then((users) => {
      return users
    })
    .catch((error) => {
      return error
    });
  res.send(result)
})

route.post("/loginsubmit-form", async (req, res) => {
  var formData = req.body;
  const { fullName, password } = formData;
  let result = await User.findOne({ fullName }) 
try {  if (!result) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  if (result.blocked) {
    return res.status(403).json({ error: 'Your account is blocked. Contact the administrator for assistance.' });
  } 
  else if (result.password !== password) {
    console.log(" Ivalid user password ")
  }
  else {
    console.log("Success")
    res.send(result)
  }}catch (error){
    res.status(500).json({ error: 'Internal server error' });

  }
});

route.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file received' });
  }
 
  const originalFileName = path.parse(req.file.originalname).name;
  const fileExtension = path.extname(req.file.originalname);
  const newFileName = originalFileName + '-' + Date.now() + fileExtension;
  const newPath = path.join(__dirname, 'uploads', newFileName);
  fs.renameSync(req.file.path, newPath);

  return res.json({ filename: newFileName });
});

route.use('/uploads', express.static(path.join(__dirname, 'uploads')));

route.post('/submitPost-form', async (req, res) => {
  var formData = req.body;
  var myData = new Totalposts(formData);
console.log("feast",formData)
  try {
    await myData.save();
    res.send("success"); 
  } catch (error) {
    res.send("error");
  }
});

route.get('/submitGet-form', async (req, res) => {
  let result = await Totalposts.find()
    .then((users) => {
      return users
    })
    .catch((error) => {
      return "error"
    });
  res.send(result)
})

route.put('/updatePost/:id', async (req, res) => {
  const postId = req.params.id;
  const updatedPostData = req.body;
  const loggedInUser = req.body.localStorage 

  if (!loggedInUser || !updatedPostData.fullname) {
    return res.status(401).json({ error: 'You need to be logged in to edit a post' });
  }

  try {
    const post = await Totalposts.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.fullname.toString() !== updatedPostData.fullname) {
      return res.status(403).json({ error: 'You are not authorized to edit this post' });
    }

    const updatedPost = await Totalposts.findByIdAndUpdate(
      postId,
      { $set: updatedPostData },
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
});

route.post("/categoriespost-data", async (req, res) => {
  var formData = req.body;
  var myData = new Category(formData)
  let result = await myData.save().then((res) => {
    res.send("success")
    return "success"
  })
    .catch((error) => {
      return "error"
    });
  res.send(result) 
});

route.get('/categoriesget-data', async (req, res) => {
  let result = await Category.find()
    .then((users) => {
      return users
    })
    .catch((error) => {
      return "error"
    });
  res.send(result)
})
 
route.get("/categoriespostfilter-data", async (req, res) => {
  var formData = req.query.paramData
  let result = await Totalposts.find({ "category": formData })
  console.log(result)
  if (!result) {
    console.log("Category Not Found ")
  }
  else {
    console.log("Success")
    res.send(result)
  } 
});

route.get("/dategetfilter-data", async (req, res) => { 
  var formData = req.query.paramData
  let result = await Totalposts.find({ "month": formData })
  if (!result) { 
    console.log("Category Not Found ")
  }
  else {
    console.log("Success") 
    res.send(result)
  } 
});

route.post('/commentbox', async (req, res) => {
  try {
    const { postId, author, message } = req.body;
    const comment = new Comment({ postId, author, message });
    await comment.save();
    res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal server error' });
  }
});

route.get('/getcommentsdata', async (req, res) => {
  try {
    const { postId } = req.query;
    const comments = await Comment.find({ postId }); 
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

route.delete('/delete-posts/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userId", userId)
    await Totalposts.deleteMany({ userId: userId });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user posts' });
  }
});

route.delete('/delete-user/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log("errewr", userId)
  try {
      await Totalposts.deleteMany({ userId: userId });
    await User.findByIdAndDelete({ _id : userId});
    res.sendStatus(204); 
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

route.put('/block-user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const blocked = req.body.blocked;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { blocked },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to block/unblock user' });
  } 
});

route.delete('/delete-post/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    await Totalposts.findByIdAndDelete(postId);
    res.sendStatus(204); 
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
});

module.exports = route