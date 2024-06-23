// routes.js
const express = require('express');
const router = express.Router();
  
const { Pool } = require('pg');
const pool = require('../../db');

// POST request to handle login
router.post('/', async (req, res) => {
  const { name,college_name,gender,password,confirmPassword,email,food,hall } = req.body;

  try {
    // Insert the username and password into the users table
    const insertUserQuery = `
      INSERT INTO externalparticipant (name,college_name,Gender, gmail,password,food,hall)
    VALUES ($1, $2, $3, $4, $5 ,$6, $7)
      RETURNING *;
    `;

    const result = await pool.query(insertUserQuery, [name,college_name,gender, email,password,food,hall]);

    console.log('External participant registered successfully(b):', result.rows[0]);

    res.status(201).json({ message: 'External participant registered successfully(f)', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering external participant:', error);
    res.status(500).json({ error: 'An error occurred while registering user' });
  }
});

module.exports = router;
