import React, { useState } from 'react';
import './styles/FlightBooking.css';

const FlightBooking = () => {
  const [selectedClass, setSelectedClass] = useState('Business Class');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    alert(
      `Class: ${selectedClass}\nDeparture: ${departureCity}\nArrival: ${arrivalCity}\nDeparture Date: ${departureDate}\nArrival Date: ${arrivalDate}\nPassengers: ${passengers}`
    );
  };

  return (
    <div className="flight-booking-page">
      <div className="class-selection">
        <button
          className={`class-button ${selectedClass === 'Business Class' ? 'active' : ''}`}
          onClick={() => setSelectedClass('Business Class')}
        >
          Business Class
        </button>
        <button
          className={`class-button ${selectedClass === 'First Class' ? 'active' : ''}`}
          onClick={() => setSelectedClass('First Class')}
        >
          First Class
        </button>
      </div>

      <div className="flight-booking-container">
        <div className="booking-form">
          <div className="form-group departure-city">
            <label>Departure City</label>
            <select
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              <option value="">Select Departure City</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>

          <div className="form-group arrival-city">
            <label>Arrival City</label>
            <select
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            >
              <option value="">Select Arrival City</option>
              <option value="Dubai">Dubai</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
            </select>
          </div>

          <div className="form-group departure-date">
            <label>Departure Date</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="form-group arrival-date">
            <label>Arrival Date</label>
            <input
              type="date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>

          <div className="form-group passengers">
            <label>Passengers</label>
            <input
              type="number"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
        </div>

        <button className="search-button" onClick={handleSearch}>
          Search Flight
        </button>
      </div>
    </div>
  );
};

export default FlightBooking;
