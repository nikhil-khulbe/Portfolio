// components/Projects.js
import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "SwiftCart",
      description:
        "Mobile e-commerce app inspired by Flipkart using React Native and Firebase.",
      features: [
        "Responsive product listings and single product pages",
        "Firebase for user authentication",
        "Real-time database for product and order data",
        "Cart, order placement, and user login features",
      ],
      technologies: ["React Native", "JavaScript", "Firebase"],
      link: "https://github.com/nikhil-khulbe/project-ecommerce-submodule",
    },
    {
      title: "Nova Academy",
      description:
        "Web-based educational platform inspired by Khan Academy with interactive learning tools.",
      features: [
        "Firebase for user authentication",
        "Role-based dashboards (parents/teachers)",
        "Responsive design for cross-device accessibility",
        "Deployed on Netlify",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://khan-acadmey-clone.netlify.app",
      github: "https://github.com/The-Debuggers",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4>Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
