import React, { useState } from "react";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="hero-section">
        <img src="\hero.png" alt="Hero Banner" className="hero-image" />

        {/* Navbar */}
        <div className="navbar-container">
          <h4 className="logo">
            Sound<span>DZign</span>
          </h4>

          {/* Desktop nav (always visible on large screens) */}
          <ul className="nav-link-container desktop">
            <li className="nav-item">About</li>
            <li className="nav-item">Course Details</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Testimonial</li>
          </ul>

          {/* Mobile open menu icon */}
          {!isOpen && (
            <div className="nav-toggle-open" onClick={() => setIsOpen(true)}>
              <img src="\menu.svg" alt="Open Menu" />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        <ul className={`nav-link-container ${isOpen ? "open" : ""}`}>
          {/* Close icon */}
          <div className="nav-toggle-close" onClick={() => setIsOpen(false)}>
            <img src="\times.svg" alt="Close Menu" />
          </div>

          <li className="nav-item">About</li>
          <li className="nav-item">Course Details</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Testimonial</li>
        </ul>

        {/* Hero Text */}
        <div className="hero-text">
          <h4>
            <span>Sound </span>Design Masterclass
          </h4>
          <h1>Learn the Art of Sound Design</h1>
          <button>Demo Lesson</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
