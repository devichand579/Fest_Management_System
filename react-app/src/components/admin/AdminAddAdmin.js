import React, { useState, useEffect } from 'react';

const AdminAddAdmin = () => {
  const [pendingAdmins, setPendingAdmins] = useState([]);

  useEffect(() => {
    fetchPendingAdmins();
  }, []);

  const fetchPendingAdmins = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pendingAdmins');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPendingAdmins(data);
    } catch (error) {
      console.error('Error fetching pending admins:', error);
    }
  };

  const handleAddAdmin = async (pendingAdminId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/addAdmin/${pendingAdminId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Add any required data to send to the backend here
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the added admin from the pending admins list
      setPendingAdmins(prevPendingAdmins => prevPendingAdmins.filter(admin => admin.id !== pendingAdminId));
      alert('New admin added successfully!');
    } catch (error) {
      console.error('Error adding admin:', error);
      alert('Failed to add admin. Please try again later.');
    }
  };

  const handleDeleteAdmin = async (pendingAdminId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/deleteAdmin/${pendingAdminId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted admin from the pending admins list
      setPendingAdmins(prevPendingAdmins => prevPendingAdmins.filter(admin => admin.id !== pendingAdminId));
      alert('Admin deleted successfully!');
    } catch (error) {
      console.error('Error deleting admin:', error);
      alert('Failed to delete admin. Please try again later.');
    }
  };

  return (
    <div>
      <p>Hello admin, you can add below members as admins.</p>
      <ul>
        {pendingAdmins.map((admin) => (
          <li key={admin.id}>
            {admin.name}
            <button onClick={() => handleAddAdmin(admin.id)}>Add</button>
            <button onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAddAdmin;
