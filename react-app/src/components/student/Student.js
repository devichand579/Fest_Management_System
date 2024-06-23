import React from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
    return (
      <div>
        <h1>Welcome to Student page</h1>
        <div>
          <Link to="/">Go back to Home</Link>
        </div>
        <div>
          <Link to="/Student/Register">Register</Link> 
        </div>
        <div>
          <Link to="/Student/Login">Login</Link>  
        </div>
      </div>
    );
  };

export default Student;
