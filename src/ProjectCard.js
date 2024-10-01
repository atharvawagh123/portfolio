import React from 'react';
import './ProjectCard.css';

const projects = [
    {
        title: "mern-stack-ecommerce",
        description: "E-commerece website",
        source: "https://github.com/atharvawagh123/mern-stack-ecommerce",
        
    },
    {
        title: "MERN-Booking-App-main",
        description: "MERN-Booking-App-main web application ",
        source: "https://github.com/atharvawagh123/MERN-Booking-App-main",
        live: "https://yourwebsite.com/project2",
    },
    {
        title: "MERN-gmailclone-App-main",
        description: "mernstack-gmailclone-main web application ",
        source: "https://github.com/atharvawagh123/mernstack-gmailclone-main",
        live: "https://yourwebsite.com/project2",
    },
    {
        title: "bookmySeat",
        description: "bookmyseat web application",
        source: "https://github.com/atharvawagh123/bookmy",
        live: "https://yourwebsite.com/project2",
    },
    {
        title: "ChatBot web application",
        description: "char-bot web application ",
        source: "https://github.com/atharvawagh123/chat-bot",
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
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
