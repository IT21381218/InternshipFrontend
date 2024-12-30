import React from 'react';
import Navbar from './Navbar';
import './styles/Home.css'; // Import Home.css

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-top">
        <img
          src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1731704487/my%20portfolio/796426334420222470_pmxogf.png" // Replace with your image URL
          alt="Top Section"
          className="home-image"
        />
        <div className="home-text-overlay">
          <h1>Explore the World Together <br /> with Premium Travel</h1>
          <p className="discount-text">Get up to 51% Discount</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
      <div className="home-bottom">
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
      </div>
    </div>
  );
};

export default Home;
