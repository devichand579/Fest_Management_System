import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExtLogin = () => {
    const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/ext/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse response data
      const responseData = await response.json();
      const extInfo = responseData.ext;
  
      // Redirect to AfterLogin page and pass studentInfo as state
      navigate('/Ext/AfterLogin', { state: { extInfo } });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Login failed. Please try again later.');
    }
  };
  
  return (
    <div>
      <h1>Welcome to external participant page login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ExtLogin;
