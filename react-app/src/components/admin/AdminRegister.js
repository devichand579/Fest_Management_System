import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Send formData to backend
    console.log(formData); // Replace this with your backend submission code
    try {
      const response = await fetch('http://localhost:5000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Printing response',response);
      alert('Registration successful!');
      navigate('/Admin/Login'); // Redirect to admin login page
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Registration failed. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Welcome to admin page register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
