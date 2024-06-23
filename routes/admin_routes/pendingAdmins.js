const express = require('express');
const router = express.Router();
  
// Example data for pending admins (replace this with actual data retrieval logic)
let pendingAdmins = [
  { id: 1, name: 'Pending Admin 1' },
  { id: 2, name: 'Pending Admin 2' },
  { id: 3, name: 'Pending Admin 3' }
];

// Route handler to handle requests for pending admins
router.get('/pendingAdmins', (req, res) => {
  try {
    // Retrieve the list of pending admins from the data source
    // For now, using the example data
    res.json(pendingAdmins);
  } catch (error) {
    console.error('Error fetching pending admins:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route handler to handle requests to add a new admin
router.post('/addAdmin/:id', (req, res) => {
  try {
    const { id } = req.params;
    // Here, you would perform the logic to add the user with the specified ID as an admin
    // For now, just log the ID
    console.log(`Adding user with ID ${id} as admin`);
    res.json({ message: `User with ID ${id} added as admin` });
  } catch (error) {
    console.error('Error adding admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route handler to handle requests to delete an admin
router.delete('/deleteAdmin/:id', (req, res) => {
  try {
    const { id } = req.params;
    // Here, you would perform the logic to delete the admin with the specified ID
    // For now, just remove the admin from the pendingAdmins array
    pendingAdmins = pendingAdmins.filter(admin => admin.id !== parseInt(id));
    res.json({ message: `Admin with ID ${id} deleted successfully` });
    console.log(`Deleting user with ID ${id}`);
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
