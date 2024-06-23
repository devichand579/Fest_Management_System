// Import necessary modules
const express = require('express');
const router = express.Router();
const pool = require('../../db'); // Assuming you have a database connection pool

// GET request to fetch event winners
router.get('/', async (req, res) => {
    try {
        const eventId = req.query.eventId;

        // Fetch winners_list for the specified event ID from the database
        const winnersQuery = await pool.query(
            'SELECT winners_list FROM event WHERE id = $1',
            [eventId]
        );

        // Check if any winners were found
        const winnersList = winnersQuery.rows[0].winners_list;
        if (!winnersList || winnersList.length === 0) {
            console.log('Winners Yet to be Declared');
            return res.status(404).json({ error: 'Winners Yet to be Declared' });
        }
// Fetch details of winners from the participant table
        const winnersDetailsQuery = await pool.query(`
            SELECT p.id AS pid,
                CASE 
                    WHEN p.type = true THEN s.name
                    ELSE e.name
                END AS winner_name,
                CASE 
                    WHEN p.type = true THEN 'IIT KHARAGPUR' -- College name for students
                    ELSE e.college_name -- College name for external participants
                END AS college_name
            FROM participant p
            LEFT JOIN student s ON p.sid = s.id AND p.type = true
            LEFT JOIN externalparticipant e ON p.sid = e.id AND p.type = false
            WHERE p.id IN (${winnersList.join(',')})
        `);


        // Check if any winners details were found
        if (winnersDetailsQuery.rows.length === 0) {
            console.log('No winners found');
            return res.status(404).json({ error: 'No winners found' });
        }

        // Send the winners details back to the frontend
        res.json({ winners: winnersDetailsQuery.rows });
    } catch (error) {
        console.error('Error fetching event winners:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
module.exports = router;
