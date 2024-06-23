import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
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
      const response = await fetch('http://localhost:5000/student/login/', {
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
      const studentInfo = responseData.student;
  
      // Redirect to AfterLogin page and pass studentInfo as state
      navigate('/Student/AfterLogin', { state: { studentInfo } });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Login failed. Please try again later.');
    }
  };
  
  return (
    <div>
      <h1>Welcome to student page login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Insti_email:</label>
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

export default StudentLogin;