import React from 'react';
import './ProjectCard.css';

const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        source: "https://github.com/yourusername/project1",
        live: "https://yourwebsite.com/project1",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        source: "https://github.com/yourusername/project2",
        live: "https://yourwebsite.com/project2",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        source: "https://github.com/yourusername/project2",
        live: "https://yourwebsite.com/project2",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        source: "https://github.com/yourusername/project2",
        live: "https://yourwebsite.com/project2",
    },
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            <h2 className="project-heading">My Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="button-container">
                            <a href={project.source} target="_blank" rel="noopener noreferrer">View Source</a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
