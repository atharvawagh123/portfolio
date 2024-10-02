import React from 'react';
import './ProjectCard.css';

// General Projects
const projects = [
    {
        title: "E-commerce",
        description: "E-commerce website",
        source: "https://github.com/atharvawagh123/mern-stack-ecommerce",
    },
    {
        title: "Booking-App",
        description: "MERN-Booking-App-main web application",
        source: "https://github.com/atharvawagh123/MERN-Booking-App-main",
       
    },
    {
        title: "Gmail-Clone",
        description: "MERN-gmailclone-main web application",
        source: "https://github.com/atharvawagh123/mernstack-gmailclone-main",
       
    },
    {
        title: "BookmySeat",
        description: "bookmyseat web application",
        source: "https://github.com/atharvawagh123/bookmy",
       
    },
    {
        title: "ChatBot",
        description: "chat-bot web application",
        source: "https://github.com/atharvawagh123/chat-bot",
    },
];



const ProjectCard = () => {
    return (
        <div className="project-container">
            <h2 className="project-heading">My Projects</h2>
            <div className="project-cards">
                
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h4>{project.title}</h4>
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
