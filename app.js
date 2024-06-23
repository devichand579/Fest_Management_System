// app.js or server.js
const express = require('express');
const app = express();
const routes1 = require('./routes/admin_routes/AdminLogin');
const routes2 = require('./routes/admin_routes/AdminRegister');
const routes3 = require('./routes/admin_routes/pendingAdmins');
const routes4 = require('./routes/init_schemas');
const route_student_register = require('./routes/student_routes/StudentRegister');
const route_student_login = require('./routes/student_routes/StudentLogin');
const route_student_after_login = require('./routes/student_routes/StudentAfterLogin');
const route_student_after_login_particiapte_event = require('./routes/student_routes/ParticipateEvent');
const route_student_after_login_volunteer_event = require('./routes/student_routes/VolunteerEvent');
const route_student_after_login_event_winners = require('./routes/student_routes/EventWinners');

const route_ext_register = require('./routes/ext_routes/ExtRegister');
const route_ext_login = require('./routes/ext_routes/ExtLogin');
const route_ext_after_login = require('./routes/ext_routes/ExtAfterLogin');
const route_ext_after_login_particiapte_event = require('./routes/ext_routes/ParticipateEvent');
const route_ext_after_login_event_winners = require('./routes/ext_routes/EventWinners');


const cors = require('cors');
app.use(cors());


app.use(express.json()); // Middleware to parse JSON bodies

// Use the router
app.use('/api/login', routes1);
app.use('/api/register', routes2);
app.use('/api', routes3);
app.use('/', routes4);
app.use('/student/register',route_student_register);
app.use('/student/login',route_student_login);
app.use('/student/afterlogin',route_student_after_login);
app.use('/student/afterlogin/participate_event',route_student_after_login_particiapte_event);
app.use('/student/afterlogin/volunteer_event',route_student_after_login_volunteer_event);
app.use('/student/afterlogin/event_winners', route_student_after_login_event_winners);


app.use('/ext/register',route_ext_register);
app.use('/ext/login',route_ext_login);
app.use('/ext/afterlogin',route_ext_after_login);
app.use('/ext/afterlogin/participate_event',route_ext_after_login_particiapte_event);
app.use('/ext/afterlogin/event_winners', route_ext_after_login_event_winners);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to the pg data base
const { Pool } = require('pg');




 