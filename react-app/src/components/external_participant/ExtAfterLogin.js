import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 

const ExtAfterLogin = () => {

    
    const { extInfo } = useLocation().state;
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []); // Fetch events when component mounts

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/ext/afterlogin/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const eventData = await response.json();
      setEvents(eventData);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to fetch events. Please try again later.');
    }
  };


  const handleParticipate = (eventId, eventInfo, extInfo) => {
    // Send POST request to specific URL for participation
    const temp = 1;
    fetch('http://localhost:5000/ext/afterlogin/participate_event/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eventInfo, extInfo, temp })
    })
    .then(response => {
      // Check if response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse response data
      return response.json();
    })
    .then(data => {
      // Display backend response as an alert message
      alert(data.message);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  };
  
;
  
const [showWinnersPopup, setShowWinnersPopup] = useState(false);
const [winners, setWinners] = useState([]);


const handleShowWinners = (eventId) => {
    // Create a URLSearchParams object and append the eventId as a query parameter
    const params = new URLSearchParams();
    params.append('eventId', eventId);
  
    fetch(`http://localhost:5000/student/afterlogin/event_winners?${params.toString()}`)
    .then(response => {
    if (!response.ok) {
        throw new Error('Winners yet to be declared');
    }
    return response.json();
    })
    .then(data => {
    setWinners(data.winners);
    setShowWinnersPopup(true);
    })
    .catch(error => {
    // Handle error
    alert(error.message); // Display the error message in an alert
    // console.error('Error:', error);
    });

  };
  


  return (
    <div>
      <h1>Welcome to External participant after login</h1>
      <div>
        <h2>Events:</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.name}, {event.type}
              <button onClick={() => handleParticipate(event.id, event, extInfo)}>Participate</button>
              <button onClick={() => handleShowWinners(event.id)}>Show Winners</button>
            </li>
          ))}
        </ul>
      </div>
      {showWinnersPopup && (
        <div className="winners-popup">
            <h2>Winners</h2>
            <table>
            <thead>
                <tr>
                <th>PID</th>
                <th>Winner Name</th>
                <th>College Name</th>
                </tr>
            </thead>
            <tbody>
                {winners.map((winner, index) => (
                <tr key={index}>
                    <td>{winner.pid}</td>
                    <td>{winner.winner_name}</td>
                    <td>{winner.college_name}</td>
                </tr>
                ))}
            </tbody>
            </table>
            <button onClick={() => setShowWinnersPopup(false)}>Close</button>
        </div>
        )}

    </div>
  );
};  
export default ExtAfterLogin;
