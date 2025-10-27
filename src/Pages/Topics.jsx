// Header.jsx
import React from "react";
import "../App.css";

const Topics = () => {
  return (
    <section>
      <div className="topic-section">
        <h1 className="topic-heading">
          <span>Wh</span>at will you learn?
        </h1>
        <div className="topic-learn">
          <ul>
            <li>What are frequencies?</li>
            <li>Using DAW</li>
            <li>Vocal Processing</li>
            <li>Mixing</li>
            <li>Minxing Console</li>
            <li>Mastering</li>
          </ul>
          <div className="topic-image-container">
            <img src="\topic.png" alt="Topic banner" className="topic-image" />
            <div className="topic-image-cover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
