// Import necessary modules
const express = require('express');
const router = express.Router();
const pool = require('../../db'); // Assuming you have a database connection pool


// POST request to handle participation
router.post('/', async (req, res) => {
    try {
      // Extract eventInfo and studentInfo from the request body
      const { eventInfo, studentInfo, temp } = req.body;
  
      // Extract event_id and student_id from eventInfo and studentInfo respectively
      const eventId = eventInfo.id;
      const studentId = studentInfo.id;
  
      // Determine the type based on the value of temp
      const type = temp === 0 ? true : false; 
      
      // Check if the record already exists in the participant table
      const existingRecord = await pool.query(`
        SELECT * FROM participant WHERE eid = $1 AND type = $2 AND sid = $3;
      `, [eventId, type, studentId]);
  
      // If no existing record found, insert participation record into the participant table
      if (existingRecord.rows.length === 0) {
        const result = await pool.query(`
          INSERT INTO participant (eid, type, sid)
          VALUES ($1, $2, $3)
          RETURNING *;
        `, [eventId, type, studentId]);
  
        // Send a success response
        res.json({ message: 'Registered for the Event Successfully' });
      } else {
        // If record already exists, send a message indicating it
        res.json({ message: 'You are already Registered' });
      }
    } catch (error) {
      console.error('Error inserting or checking participation record:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  });
  
  module.exports = router;


  