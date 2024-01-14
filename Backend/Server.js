// Example backend server using Node.js and Express

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://sugato:passwordstronghai@cluster0.br86gpa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User model (replace with your actual MongoDB schema)
const User = mongoose.model('User', {
  name: String,
  username: String,
  password: String,
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Implement actual authentication logic (compare with database)
  const user = await User.findOne({ username, password });

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, username, password } = req.body;

  // Implement actual signup logic (store in database)
  const newUser = new User({ name, username, password });
  await newUser.save();

  res.json({ success: true });
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
