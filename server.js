const express = require('express');
const promisePool = require('./config/db');
const bcrypt = require('bcrypt');  // For password hashing
const cors = require('cors');  // Import cors package
require('dotenv').config(); // Load environment variables from .env file



const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');  // Basic response for the root URL
});

// Define a route to test the database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows, fields] = await promisePool.query('SELECT NOW() AS currentTime');
    res.json({ currentTime: rows[0].currentTime });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Define a route for user sign-up
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input fields
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user data into the logins table (not users table)
    const query = 'INSERT INTO logins (username, email, password) VALUES (?, ?, ?)';
    await promisePool.query(query, [username, email, hashedPassword]);

    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error, sign-up failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
