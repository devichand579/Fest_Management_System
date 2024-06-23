const express = require('express');
const router = express.Router();
const pool = require('../../db'); // Import the pool object for database connection

// POST request to handle login
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database to find a user with the provided username and password
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result.rows.length === 1) {
      // If a user is found, login is successful
      console.log('Login successful');
      res.json({ message: 'Login successful' });
    } else {
      // If no user is found, login failed
      console.log('Invalid username or password');
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

module.exports = router;
