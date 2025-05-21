// components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Nikhil Khulbe</h3>
            <p>
              Software Developer building responsive web and mobile
              applications.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a
                href="https://github.com/nikhil-khulbe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-khulbe-a461b5282"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:emerkkhu@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Nikhil Khulbe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
