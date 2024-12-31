import React, { useEffect } from 'react';
import Navbar from './Navbar';
import FlightBooking from './FlightBooking';
import Footer from './Footer';
import './styles/Home.css'; // Import Home.css
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { MdArrowOutward } from 'react-icons/md'; // Import the arrow icon

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-top">
        <div className="home-image-container">
          <img
            src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640906/intern%20frontend/813332880475470663_cqexlh.png"
            alt="Top Section"
            className="home-image"
          />
          <div className="home-image-overlay"></div>
        </div>
        <div className="home-text-overlay">
          <h1>Explore the World Together <br /> with Premium Travel</h1>
          <p className="discount-text">Get up to 51% Discount</p>
          <button className="buy-now-button">
            Buy Now <MdArrowOutward className="buy-now-icon" />
          </button>
        </div>
      </div>
      <div className="flight-booking-wrapper">
        <FlightBooking />
      </div>
      <div className="home-bottom">
        <div className="left-section">
          <h1>How it Works</h1>
          <p>
            These are the simple procedures that will make your purchasing process super easy and smooth. 
            And will help you to get your flight easily.
          </p>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up">
              <span className="timeline-step">1</span>
              <div className="timeline-content">
                <h3>Search Flights</h3>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up">
              <span className="timeline-step">2</span>
              <div className="timeline-content">
                <h3>Fill Contact Form</h3>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up">
              <span className="timeline-step">3</span>
              <div className="timeline-content">
                <h3>Choose Your Airline</h3>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up">
              <span className="timeline-step">4</span>
              <div className="timeline-content">
                <h3>Booking in 10 Minutes!</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/PTOAoH_MMwY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
