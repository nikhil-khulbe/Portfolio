// components/Hero.js
import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Nikhil Khulbe</h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-description">
            Building responsive web and mobile applications with modern
            technologies.
          </p>
          <div className="hero-links">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
