// Header.jsx
import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <section>
      <div className="footer-section">
        <div className="footer-container">
          
          {/* Card 1 */}
          <div className="footer-card1">
            <h4>
              Sound<span>DZign</span>
            </h4>
            <div className="social-links">
              <img src="\face.svg" alt="Facebook" className="social-link-image" />
              <img src="\twitter.svg" alt="Twitter" className="social-link-image" />
              <img src="\insta.svg" alt="Instagram" className="social-link-image" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="footer-card2">
            <h4>
              <span>Quick Links</span>
            </h4>
            <ul>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="footer-card3">
            <h4>
              <span>Contact Us</span>
            </h4>
            <ul>
              <li>contact@email.com</li>
              <li>+1 999 9999 999</li>
            </ul>
          </div>

        </div>

        <div className="footer-text">
          This website is designed by GTCoding Ⓒ 2022
        </div>
      </div>
    </section>
  );
};


export default Footer;
