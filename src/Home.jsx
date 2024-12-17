import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="location-container">
      <div className="header">
        <h1>Location</h1>
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/50" // Replace with the user's image URL
            alt="Profile"
          />
        </div>
      </div>
      <div className="destination-input">
        <p>Where we headed?</p>
        <div className="input-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Enter destination"
            className="destination-field"
          />
        </div>
      </div>
      <div className="quick-buttons">
        <button className="button police">
          🚔 Police stations
        </button>
        <button className="button hospital">
          🏥 Hospitals
        </button>
        <button className="button pharmacy">
          💊 Pharmacies
        </button>
      </div>
    </div>
  );
};

export default Home;
