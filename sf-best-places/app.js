const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const users = require('./routes/users');

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session middleware
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret
  resave: false,
  saveUninitialized: true
}));

// MongoDB connection
const db = 'YOUR_MONGODB_ATLAS_CONNECTION_STRING'; // Replace with your MongoDB Atlas connection string
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Serve static files
app.use(express.static('public'));

// Routes
app.use('/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
