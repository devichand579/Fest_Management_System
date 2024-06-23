import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
      <div>
        <h1>Welcome to admin page</h1>
        <div>
          <Link to="/">Go back to Home</Link>
        </div>
        <div>
          <Link to="/Admin/Register">Register</Link> 
        </div>
        <div>
          <Link to="/Admin/Login">Login</Link>  
        </div>
      </div>
    );
  };

export default Admin;
