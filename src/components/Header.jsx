// components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Nikhil Khulbe</h1>
        <nav className="nav">
          <ul className="nav-list">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
