// Header.jsx
import React from "react";
import "../App.css";

const Info = () => {
  return (
    <section>
      <div className="info-section">
      <div className="info-image-cover"></div>
        <div className="student-info">
          <div className="student1">
            <img src="st1.svg" alt="student-info" className="student1-image" />
            <h4>23,000+</h4>
            <p>Students</p>
          </div>
          <div className="student2">
            <img src="st2.svg" alt="student-info" className="student2-image" />
            <h4>26 Hrs</h4>
            <p>Video Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
