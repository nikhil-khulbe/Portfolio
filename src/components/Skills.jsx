// components/Skills.js
import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = {
    Languages: ["JavaScript", "Python", "HTML/CSS"],
    Frontend: ["React.js", "React Native", "Redux", "Bootstrap", "Tailwind"],
    Tools: ["Git", "GitHub", "Postman", "VS Code"],
    Concepts: ["Responsive Design", "State Management", "Authentication (JWT)"],
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category}</h3>
              <ul className="skill-list">
                {items.map((skill, i) => (
                  <li key={i}>
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
