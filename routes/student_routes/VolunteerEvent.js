// Import necessary modules
const express = require('express');
const router = express.Router();
const pool = require('../../db'); // Assuming you have a database connection pool


// POST request to handle participation
router.post('/', async (req, res) => {
    try {
      // Extract eventInfo and studentInfo from the request body
      const { eventInfo, studentInfo} = req.body;
  
      // Extract event_id and student_id from eventInfo and studentInfo respectively
      const eventId = eventInfo.id;
      const studentId = studentInfo.id;
      
      // Check if the record already exists in the participant table
      const existingRecord = await pool.query(`
        SELECT * FROM volunteer WHERE event_id = $1 AND student_id = $2 ;
      `, [eventId, studentId]);
  
      // If no existing record found, insert participation record into the participant table
      if (existingRecord.rows.length === 0) {
        const result = await pool.query(`
          INSERT INTO volunteer (event_id, student_id)
          VALUES ($1, $2)
          RETURNING *;
        `, [eventId, studentId]);
  
        // Send a success response
        res.json({ message: 'Volunteer request sent successfully, Wait for Approval' });
      }
     else {
        // If record already exists, check if it's approved
        const isApproved = existingRecord.rows[0].approved;
      
        if (isApproved) {
          // If already approved, send a message indicating it
          res.json({ message: 'You have already been approved as a volunteer' });
        } else {
          // If not approved, send a message indicating it
          res.json({ message: 'You have already requested to volunteer. Please be patient for approval' });
        }
      }
      
    } catch (error) {
      console.error('Error inserting or checking participation record:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  });
  
  module.exports = router;
  