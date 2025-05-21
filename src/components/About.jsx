// components/About.js
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Software Developer proficient in JavaScript, HTML/CSS, and modern
              frameworks like React.js and React Native for building responsive
              web and mobile applications.
            </p>
            <p>
              Skilled in backend integration with Node.js and Firebase, and
              crafting polished UIs. Developed projects with features such as
              JWT authentication, real-time databases, and cross-platform
              compatibility.
            </p>
            <p>
              Combines strong foundational programming skills with a passion for
              clean, efficient code and problem-solving.
            </p>
            <div className="about-links">
              <a
                href="https://github.com/nikhil-khulbe"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-khulbe-a461b5282"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
          <div className="about-skills">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
