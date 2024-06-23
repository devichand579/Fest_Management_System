// routes.js
const express = require('express');
const router = express.Router();
  
const { Pool } = require('pg');
const pool = require('../../db');

// POST request to handle login
router.post('/', async (req, res) => {
  const { name,roll,dept,gender,password,confirmPassword,instiEmail } = req.body;

  try {
    // Insert the username and password into the users table
    const insertUserQuery = `
      INSERT INTO STUDENT (name,roll,department,Gender, password,Institute_Email)
      VALUES ($1, $2, $3, $4, $5 ,$6)
      RETURNING *;
    `;

    const result = await pool.query(insertUserQuery, [name,roll,dept,gender, password,instiEmail]);

    console.log('Student registered successfully(b):', result.rows[0]);

    res.status(201).json({ message: 'Student registered successfully(f)', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'An error occurred while registering user' });
  }
});

module.exports = router;
