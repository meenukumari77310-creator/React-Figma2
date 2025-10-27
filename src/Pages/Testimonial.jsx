// Header.jsx
import React from "react";
import "../App.css";

const Testimonial = () => {
  return (
    <section>
      <div className="testimonial-section">
        <h2 className="testimonial-heading">
          <span>Wh</span>at our students say?
        </h2>

        <div className="testmonial-card-container">
          <div className="testimonial-card">
            <img
              src="\Testimonial3.png"
              alt="Tesimonial banner"
              className="testimonial-image"
            />
            <div className="card-content">
              <h4>Peter Adams</h4>
              <p>This is a great course. I got to learn a lot.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <img
              src="\Testimonial2.png"
              alt="Tesimonial banner"
              className="testimonial-image"
            />
            <div className="card-content">
              <h4>Robert Fox</h4>
              <p>
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </p>
            </div>
          </div>

          <div className="testimonial-card">
            <img
              src="\Testimonial1.png"
              alt="Tesimonial banner"
              className="testimonial-image"
            />
            <div className="card-content">
              <h4>Emily Smith</h4>
              <p>Awesome! Great job!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
