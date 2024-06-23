// routes.js
const express = require('express');
const router = express.Router();
  
const { Pool } = require('pg');
const pool = require('../../db');

// POST request to handle login
router.post('/', async (req, res) => {
  const { name,username, password,confirmPassword } = req.body;

  try {
    // Insert the username and password into the users table
    const insertUserQuery = `
      INSERT INTO ADMIN (username, password)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const result = await pool.query(insertUserQuery, [username, password]);

    console.log('Admin registered successfully(b):', result.rows[0]);

    res.status(201).json({ message: 'User registered successfully(f)', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering user' });
  }
});

module.exports = router;
