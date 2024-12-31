import React from "react";
import "./styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section social-links">
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaYoutube className="social-icon" />
        </div>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>Submit Article</li>
          <li>Blog</li>
          <li>Freebies</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="footer-section contact-us">
        <h3>Contact Us</h3>
        <p>
          <span><MdLocalPhone  className="social-icon" /></span> (888) 231 4522 258
        </p>
        <p>
          <span><FaLocationDot className="social-icon" /></span> 3129 Doctors Drive, Los Angeles, California, USA
        </p>
      </div>
      <div className="footer-section gallery-showcase">
        <h3>Gallery Showcase</h3>
        <div className="gallery">
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735639456/intern%20frontend/813326657067760057_imlsmr.png" alt="Gallery 1" />
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640071/intern%20frontend/813328894745756046_wmaxhj.png" alt="Gallery 2" />
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640072/intern%20frontend/813328503903725869_kwjyqu.png" alt="Gallery 3" />
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640072/intern%20frontend/813328482428889082_v3aj8d.png" alt="Gallery 4" />
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640120/intern%20frontend/813329758034195872_j6jn6o.png" alt="Gallery 5" />
          <img src="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1735640207/intern%20frontend/813328941990396899_jnultf.png" alt="Gallery 6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
