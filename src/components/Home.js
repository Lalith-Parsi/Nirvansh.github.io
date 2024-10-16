// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Nirvansh Collections</h1>
          <p>Discover exquisite jewelry for every occasion.</p>
          <Link to="/shop">
            <button className="cta-button">Explore Collection</button>
          </Link>
        </div>
      </div>
      <section className="about">
        <h2>Our Story</h2>
        <p>We craft luxurious jewelry with precision, passion, and love.</p>
      </section>
      <section className="featured">
        <h2>Featured Collections</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <h3>Rings</h3>
            <p>Discover our elegant and timeless rings.</p>
          </div>
          <div className="featured-item">
            <h3>Necklaces</h3>
            <p>Explore luxurious necklaces for every occasion.</p>
          </div>
          <div className="featured-item">
            <h3>Bracelets</h3>
            <p>Beautifully crafted bracelets to adorn your wrist.</p>
          </div>
          <div className="featured-item">
            <h3>Earrings</h3>
            <p>Stunning earrings that add sparkle to your style.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
