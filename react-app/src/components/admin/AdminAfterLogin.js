import React from 'react';
import { Link } from 'react-router-dom';

const AdminAfterLogin = () => {
    return (
      <div>
        <h1>Welcome Admin</h1>
        <div>
        <Link to="/Admin/AfterLogin/AddAdmin">Add Admin</Link>
        </div>
        <div>
        <Link to="/Admin/AfterLogin/EditEvents">Edit Events</Link>
        </div>
        <div>
        <Link to="/Admin/AfterLogin/EditOrganisers">Edit Organisers</Link>
        </div>
        <div>
        <Link to="/Admin/AfterLogin/EditStudents">Edit Students</Link>
        </div>
        <div>
        <Link to="/Admin/AfterLogin/EditExternalParticipants">Edit ExternalParticipants</Link>
        </div>
        {/* <Link to="/">Go back to Home</Link> */}
      </div>
    );
  };

export default AdminAfterLogin;
