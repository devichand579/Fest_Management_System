import React from 'react';
import { Link } from 'react-router-dom';

const Ext = () => {
    return (
      <div>
        <h1>Welcome to External Participant page</h1>
        <div>
          <Link to="/">Go back to Home</Link>
        </div>
        <div>
          <Link to="/Ext/Register">Register</Link> 
        </div>
        <div>
          <Link to="/Ext/Login">Login</Link>  
        </div>
      </div>
    );
  };

export default Ext;
