// components/Contact.js
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <ul className="info-list">
              <li>
                <i className="fas fa-phone"></i>
                <span>971-766-5258</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>emerkkhu@gmail.com</span>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/nikhil-khulbe-a461b5282"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/nikhil-khulbe
                </a>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <a
                  href="https://github.com/nikhil-khulbe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/nikhil-khulbe
                </a>
              </li>
            </ul>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
