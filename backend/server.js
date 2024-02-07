const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const Poll = require('./pollModel');
// const io = socketIo(server);

const PORT = 3010;

app.use(cors());
app.use(express.json());

const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // personal chat
  // socket.on('chat message', (message) => {
  //   console.log('Received message:', message);
  //   io.emit('chat message', message);
  // });

  //group chat
  socket.on('join group', (groupName) => {
    socket.join(groupName);
  });

  socket.on('join user', ({ groupName, userName }) => {
    socket.to(groupName).emit('chat message', `[Server]: ${userName} joined the room.`);
  });

  socket.on('chat message', ({ groupName, userName, message }) => {
    io.to(groupName).emit(`chat message:${groupName}`, `[${userName}]: ${message}`);
  });

  socket.on('leave group', (groupName) => {
    socket.leave(groupName);
  });

  socket.on("pollControllRequest", async (id) => {
    console.log('Coming socket for pollControllRequest', id);

    try {
      // Update the poll status using Mongoose
      const updatedPoll = await Poll.findOneAndUpdate(
        { _id: id },
        { $set: { isControlling: true } },
        { new: true } // Return the modified document
      );
      console.log("updatedPoll-->", updatedPoll)
      if (updatedPoll) {
        socket.emit("pollcontrolledsuccess", { status: "CONTROLL_SUCCESS" });
      } else {
        console.log('Failed to update poll status');
        // Handle the failure case if necessary
      }
    } catch (error) {
      console.error('Error updating poll status:', error);
      // Handle the error case if necessary
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

mongoose.connect('mongodb://localhost:27017/auth-demo', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
  username: String,
  password: String,
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log("reg username, password ---->", username, password);
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("username, password--->", username, password)

  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ username }, 'happy-faces', { expiresIn: '1h' });
    console.log("token--->", token)
    res.json({ token });
  } else {
    console.log('Invalid credentials:', { username, password });
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'happy-faces', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.json({ message: 'Access granted to protected route', user: decoded });
  });
});

app.post('/create-polls', async (req, res) => {
  try {
    // Check if data already exists (Optional)
    const existingData = await Poll.findOne({ id: '1234567' });

    if (!existingData) {
      // Create a new document using the Mongoose model
      const newPoll = new Poll({
        isControlling: true, // or true based on your requirement
        // Other fields as needed
      });

      // Save the document to the database
      await newPoll.save();
      console.log('Initial data saved to the database.');
    } else {
      console.log('Initial data already exists.');
    }

    res.status(201).json({ message: 'Poll created successfully' });
  } catch (error) {
    console.error('Error creating poll:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/get-polls', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    console.error('Error retrieving polls:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});









// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/auth-demo', { useNewUrlParser: true, useUnifiedTopology: true });

// const User = mongoose.model('User', {
//   username: String,
//   password: String,
// });

// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   console.log("reg username, password ---->", username, password);
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   console.log("username, password--->", username, password)

//   const user = await User.findOne({ username });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     const token = jwt.sign({ username }, 'happy-faces', { expiresIn: '1h' });
//     console.log("token--->", token)
//     res.json({ token });
//   } else {
//     console.log('Invalid credentials:', { username, password });
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// app.get('/protected', (req, res) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, 'happy-faces', (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     res.json({ message: 'Access granted to protected route', user: decoded });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });