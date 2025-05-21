// components/Education.js
import React from "react";
import "../styles/Education.css";

const Education = () => {
  const education = [
    {
      institution: "Massai School",
      degree: "Software Developer",
      period: "October 2025 - Present",
      location: "Bengaluru",
      coursework: [
        "Data Structures and Algorithms (JavaScript)",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
      ],
    },
    {
      institution: "Greater Noida Institute of Technology",
      degree: "Bachelor of Technology",
      period: "April 2021 - March 2024",
      location: "Knowledge Park 2, Uttar Pradesh",
      coursework: ["Electronics and Communication Engineering"],
    },
  ];

  const certifications = [
    "Masai School Hackathon Certifications (Feb-Mar)",
    "Masai School Hackathon Certification (Jan)",
    "Masai Speaking Marathon",
    "Certified in Mixed Martial Arts (MMA)",
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-list">
            {education.map((edu, index) => (
              <div className="education-item" key={index}>
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="period-location">
                  <span className="period">{edu.period}</span>
                  <span className="location">{edu.location}</span>
                </p>
                <div className="coursework">
                  <h4>Relevant Coursework:</h4>
                  <ul>
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="certifications">
            <h3>Achievements & Certifications</h3>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
