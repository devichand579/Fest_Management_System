// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Admin from './components/admin/Admin';
// import Student from './components/student/Student';
// import Organiser from './components/organiser/Organiser';
// import AdminRegister from './components/admin/AdminRegister';
// import AdminLogin from './components/admin/AdminLogin';
// import AdminAfterLogin from './components/admin/AdminAfterLogin';
// import AdminAddAdmin from './components/admin/AdminAddAdmin';

// import StudentRegister from './components/student/StudentRegister';
// import StudentLogin from './components/student/StudentLogin';
// import StudentAfterLogin from './components/student/StudentAfterLogin';
     

// import Ext from './components/external_participant/Ext';
// import ExtRegister from './components/external_participant/ExtRegister';
// import ExtLogin from './components/external_participant/ExtLogin';
// import ExtAfterLogin from './components/external_participant/ExtAfterLogin';





// // Define a component for the initial page
// const Home = () => {
//     return (
//       <div>
//         <h1>Welcome to Home </h1>
//         <div>
//           <Link to="/Student">Go to Student </Link>
//         </div>
//         <div>
//           <Link to="/ExternalParticipant">Go to External Participant </Link>
//         </div>
//         <div>
//           <Link to="/Organiser">Go to Organiser </Link>
//         </div>
//         <div>
//           <Link to="/Admin">Go to Admin </Link>
//         </div>
//       </div>
//     );
//   };
  

// const App = () => {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/Student" element={<StudentLogin />} />
//           <Route path="/ExternalParticipant" element={<Ext />} />
//           <Route path="/Organiser" element={<Organiser />} />

//           <Route path="/Admin/Register" element={<AdminRegister />} />
//           <Route path="/Admin/Login" element={<AdminLogin />} />
//           <Route path="/Admin/AfterLogin" element={<AdminAfterLogin />} />
//           <Route path="/Admin/AfterLogin/AddAdmin" element={<AdminAddAdmin />} />

//           <Route path="/Student/Register" element={<StudentRegister />} />
//           <Route path="/Student/Login" element={<StudentLogin />} />
//           <Route path="/Student/AfterLogin" element={<StudentAfterLogin />} />


//           <Route path="/Ext/Register" element={<ExtRegister />} />
//           <Route path="/Ext/Login" element={<ExtLogin />} />
//           <Route path="/Ext/AfterLogin" element={<ExtAfterLogin />} />

//         </Routes>
//       </Router>
//     );
//   };
  
//   export default App;






import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import styles from './css/home.module.css';

import Admin from './components/admin/Admin';
import Student from './components/student/Student';
import Organiser from './components/organiser/Organiser';
import AdminRegister from './components/admin/AdminRegister';
import AdminLogin from './components/admin/AdminLogin';
import AdminAfterLogin from './components/admin/AdminAfterLogin';
import AdminAddAdmin from './components/admin/AdminAddAdmin';

import StudentRegister from './components/student/StudentRegister';
import StudentLogin from './components/student/StudentLogin';
import StudentAfterLogin from './components/student/StudentAfterLogin';
     

import Ext from './components/external_participant/Ext';
import ExtRegister from './components/external_participant/ExtRegister';
import ExtLogin from './components/external_participant/ExtLogin';
import ExtAfterLogin from './components/external_participant/ExtAfterLogin';

// Define a component for the initial page



// const Home = () => {

//     useEffect(() => {
//         // Load external stylesheets and fonts dynamically
    
//         const preconnectLink = document.createElement('link');
//         preconnectLink.href = 'https://fonts.gstatic.com/';
//         preconnectLink.rel = 'preconnect';
//         document.head.appendChild(preconnectLink);
    
//         const fontLink = document.createElement('link');
//         fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap';
//         fontLink.rel = 'stylesheet';
//         document.head.appendChild(fontLink);
    
//         const fontAwesomeLink = document.createElement('link');
//         fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
//         fontAwesomeLink.rel = 'stylesheet';
//         document.head.appendChild(fontAwesomeLink);
    
//         return () => {
//           // Cleanup when component unmounts
//           document.head.removeChild(fontLink);
//           document.head.removeChild(fontAwesomeLink);
//         };
//       }, []); // Run only once on component mount
    
//     const navigate = useNavigate();

//   const goToStudent = () => {
//     navigate('/Student');
//   };

//   const goToExternalParticipant = () => {
//     navigate('/ExternalParticipant');
//   };

//   const goToOrganiser = () => {
//     navigate('/Organiser');
//   };

//   const goToAdmin = () => {
//     navigate('/Admin');
//   };
//     return (
//         <div className={styles.background} style={{ backgroundImage: 'url(https://wallpaperboat.com/wp-content/uploads/2019/10/cool-website-background-13.jpg)' }}>
//                 <h1 style={{ textAlign: 'center', color: '#ffffff', fontFamily: "'Poppins', sans-serif", marginTop: '0px' }}>The Carnivl Fest</h1>
//        <form>
//         <button className="btn" onClick={goToStudent}>Go to Student</button>
//         <button className="btn" onClick={goToExternalParticipant}>Go to External Participant</button>
//         <button className="btn" onClick={goToOrganiser}>Go to Organiser</button>
//         <button className="btn" onClick={goToAdmin}>Go to Admin</button>
//       </form>
//       </div>
      
//     );
//   };
  


const Home = () => {

  useEffect(() => {
      // Load external stylesheets and fonts dynamically
  
      const preconnectLink = document.createElement('link');
      preconnectLink.href = 'https://fonts.gstatic.com/';
      preconnectLink.rel = 'preconnect';
      document.head.appendChild(preconnectLink);
  
      const fontLink = document.createElement('link');
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
  
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      fontAwesomeLink.rel = 'stylesheet';
      document.head.appendChild(fontAwesomeLink);
  
      return () => {
        // Cleanup when component unmounts
        document.head.removeChild(fontLink);
        document.head.removeChild(fontAwesomeLink);
      };
    }, []); // Run only once on component mount
  
  const navigate = useNavigate();

  const goToStudent = () => {
      navigate('/Student');
  };

  const goToExternalParticipant = () => {
      navigate('/ExternalParticipant');
  };

  const goToOrganiser = () => {
      navigate('/Organiser');
  };

  const goToAdmin = () => {
      navigate('/Admin');
  };
  
  return (
    <div className={`${styles.background} ${styles.homePage}`} style={{ backgroundImage: 'url(https://wallpaperboat.com/wp-content/uploads/2019/10/cool-website-background-13.jpg)' }}>
      <h1 style={{ textAlign: 'center', color: '#ffffff', fontFamily: "'Poppins', sans-serif", marginTop: '20px' }}>The Carnivl Fest</h1>
      <form className={styles.homeForm}>
        <button className="btn" onClick={goToStudent}>Go to Student</button>
        <button className="btn" onClick={goToExternalParticipant}>Go to External Participant</button>
        <button className="btn" onClick={goToOrganiser}>Go to Organiser</button>
        <button className="btn" onClick={goToAdmin}>Go to Admin</button>
      </form>
    </div>
  );
  
  
};




const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Student" element={<StudentLogin />} />
          <Route path="/ExternalParticipant" element={<Ext />} />
          <Route path="/Organiser" element={<Organiser />} />

          <Route path="/Admin/Register" element={<AdminRegister />} />
          <Route path="/Admin/Login" element={<AdminLogin />} />
          <Route path="/Admin/AfterLogin" element={<AdminAfterLogin />} />
          <Route path="/Admin/AfterLogin/AddAdmin" element={<AdminAddAdmin />} />

          <Route path="/Student/Register" element={<StudentRegister />} />
          <Route path="/Student/Login" element={<StudentLogin />} />
          <Route path="/Student/AfterLogin" element={<StudentAfterLogin />} />


          <Route path="/Ext/Register" element={<ExtRegister />} />
          <Route path="/Ext/Login" element={<ExtLogin />} />
          <Route path="/Ext/AfterLogin" element={<ExtAfterLogin />} />

        </Routes>
      </Router>
    );
  };
  
  export default App;