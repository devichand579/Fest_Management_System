// authRoutes.js

const express = require('express');
const router = express.Router();
const pool = require('../../db'); // Import the pool object for database connection


// GET request to retrieve events from the database
router.get('/', async (req, res) => {
  try {
    // Query the database to retrieve events
    const result = await pool.query(`
    SELECT e.* 
    FROM event e
    INNER JOIN org_event oe ON e.id = oe.EID AND oe.approved = true;
  `);
    // Send the retrieved events to the frontend
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

module.exports = router;
