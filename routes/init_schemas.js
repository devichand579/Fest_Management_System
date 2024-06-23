const express = require('express');
const router = express.Router();

const { Pool } = require('pg');
const pool = require('../db');

// Function to execute the SQL script
async function createTables() {
  try {
    // SQL script to create users table
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS admin (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS student (
      id SERIAL PRIMARY KEY,
      roll VARCHAR(20),
      name VARCHAR(100),
      department VARCHAR(100),
      gender VARCHAR(10),
      password VARCHAR(50),
      institute_email VARCHAR(100),
      Approved BOOLEAN DEFAULT false
    );
    
    CREATE TABLE IF NOT EXISTS event (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME WITHOUT TIME ZONE NOT NULL,
      type VARCHAR(100) NOT NULL,
      location VARCHAR(255) NOT NULL,
      winners_list INTEGER[]
    );
    
    CREATE TABLE IF NOT EXISTS organiser (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      username VARCHAR(50) UNIQUE,
      password VARCHAR(50),
      pastExperience TEXT,
      Approved BOOLEAN DEFAULT false
    );
    
    CREATE TABLE IF NOT EXISTS org_event (
      ID SERIAL PRIMARY KEY,
      OID INTEGER NOT NULL,
      EID INTEGER NOT NULL,
      FOREIGN KEY (OID) REFERENCES organiser(id) ON DELETE CASCADE,
      FOREIGN KEY (EID) REFERENCES event(id) ON DELETE CASCADE,
      Approved BOOLEAN DEFAULT false
    );
    
    CREATE TABLE IF NOT EXISTS volunteer (
      id SERIAL PRIMARY KEY,
      student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
      event_id INTEGER REFERENCES event(id) ON DELETE CASCADE,
      Approved BOOLEAN DEFAULT false
    );
    
    CREATE TABLE IF NOT EXISTS participant (
      id SERIAL PRIMARY KEY,
      eid INTEGER NOT NULL,
      type BOOLEAN NOT NULL,
      sid INTEGER NOT NULL,
      FOREIGN KEY (eid) REFERENCES event(id) ON DELETE CASCADE,
      CONSTRAINT check_participation_type CHECK (type IN (true, false))
    );
    
    CREATE TABLE IF NOT EXISTS externalparticipant (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      college_name VARCHAR(100),
      gender VARCHAR(10),
      gmail VARCHAR(100),
      password VARCHAR(50),
      food VARCHAR(10),
      hall VARCHAR(20),
      Approved BOOLEAN DEFAULT false
    );

    DROP TRIGGER IF EXISTS trigger_delete_student_participant ON student;
    DROP FUNCTION IF EXISTS delete_student_participant;
    DROP TRIGGER IF EXISTS trigger_delete_externalparticipant_participant ON externalparticipant;
    DROP FUNCTION IF EXISTS delete_externalparticipant_participant;
    
    CREATE OR REPLACE FUNCTION  delete_student_participant()
    RETURNS TRIGGER AS $$
    BEGIN
        DELETE FROM participant WHERE type = true AND sid = OLD.id;
        RETURN OLD;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER trigger_delete_student_participant
    AFTER DELETE ON student
    FOR EACH ROW
    EXECUTE FUNCTION delete_student_participant();

    
    CREATE OR REPLACE FUNCTION delete_externalparticipant_participant()
    RETURNS TRIGGER AS $$
    BEGIN
        DELETE FROM participant WHERE type = false AND sid = OLD.id;
        RETURN OLD;
    END;
    $$ LANGUAGE plpgsql;

    CREATE TRIGGER trigger_delete_externalparticipant_participant
    AFTER DELETE ON externalparticipant
    FOR EACH ROW
    EXECUTE FUNCTION delete_externalparticipant_participant();





  
    `;

    // Execute the SQL script
    await pool.query(createTableQuery);

    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    // Close the database connection pool
    //pool.end();
  }
}

// Call the function to create the table
createTables();

module.exports = router;
