// Header.jsx
import React from "react";
import "../App.css";

const Blog = () => {
  return (
    <section>
      <div className="blog-section">
        <h2 className="blog-heading">
          <span>Lat</span>est Posts
        </h2>
        <div className="blog-container">
          <div className="blog-post">
            <img src="\blog1.png" alt="Blog banner" className="blog-image" />
            <button className="tag">DAW</button>
            <p>How To Use Drum Machine in Logic Pro X</p>
          </div>

          <div className="blog-post">
            <img src="\blog2.png" alt="Blog banner" className="blog-image" />
            <button className="tag">Mixing</button>
            <p>How To Mix Guitars Effectively</p>
          </div>

          <div className="blog-post">
            <img src="\blog3.png" alt="Blog banner" className="blog-image" />
            <button className="tag">Vox</button>
            <p>The Real Power of Harmonies in Music Production</p>
          </div>
        </div>
        <button className="all-post">All Posts</button>
      </div>
    </section>
  );
};

export default Blog;
