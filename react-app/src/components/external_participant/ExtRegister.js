import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExtRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    college_name: '',
    gender: '',
    password: '',
    confirmPassword: '',
    email: '',
    food: '',
    hall: '',
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
      const response = await fetch('http://localhost:5000/ext/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Printing response', response);
      alert('Registration successful!');
      navigate('/Ext/Login'); // Redirect to student login page
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Registration failed. Please try again later.');
    }
  };

  return (
    <div>
  <h1>Welcome to external participant register page</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    </div>
    <div>
      <label>College Name:</label>
      <input type="text" name="college_name" value={formData.college_name} onChange={handleChange} required />
    </div>
    <div>
      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div>
      <label>Gmail:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />
    </div>
    <div>
      <label>Confirm Password:</label>
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
    </div>
    <div>
      <label>Food:</label>
      <select name="food" value={formData.food} onChange={handleChange} required>
        <option value="">Select Food</option>
        <option value="veg">Vegetarian</option>
        <option value="nonveg">Non-Vegetarian</option>
      </select>
    </div>
    <div>
      <label>Hall:</label>
      <select name="hall" value={formData.hall} onChange={handleChange} required>
        <option value="">Select Hall</option>
        <option value="hall1">Hall 1</option>
        <option value="hall2">Hall 2</option>
        <option value="hall3">Hall 3</option>
        <option value="hall4">Hall 4</option>
        <option value="hall5">Hall 5</option>
      </select>
    </div>
    <button type="submit">Register</button>
  </form>
</div>
    );
};
export default ExtRegister;
