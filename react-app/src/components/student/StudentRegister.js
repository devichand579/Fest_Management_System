import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styles from '../../css/register.module.css'; // Import the CSS module

const StudentRegister = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '',
        roll: '',
        dept: '',
        gender: '',
        password: '',
        confirmPassword: '',
        instiEmail: ''
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
      const response = await fetch('http://localhost:5000/student/register/', {
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
      navigate('/Student/Login'); // Redirect to student login page
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Registration failed. Please try again later.');
    }
  };


    return (
        <div className={styles.background} style={{ backgroundImage: 'url(https://wallpaperboat.com/wp-content/uploads/2019/10/cool-website-background-13.jpg)' }}>
            <h1 className={styles.heading}>The Carnival Fest</h1>
            <form onSubmit={handleSubmit} className={styles.register_form}>
                <h2 className={styles.heading}>Signup</h2> {/* Added heading style */}
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Roll:</label>
                    <input type="text" name="roll" value={formData.roll} onChange={handleChange} required />
                </div>
                <div>
                    <label>Department:</label>
                    <input type="text" name="dept" value={formData.dept} onChange={handleChange} required />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
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
                    <label>Institute Email:</label>
                    <input type="email" name="instiEmail" value={formData.instiEmail} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default StudentRegister;
