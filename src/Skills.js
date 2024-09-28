import React from 'react';
import { FaGitAlt, FaJs, FaSass, FaNode } from 'react-icons/fa'; // Ensure FaNode is imported
import { SiStorybook, SiSocketdotio, SiReact, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import './Skills.css';

const skillsData = [
    { Icon: FaGitAlt, label: 'Git' },
    { Icon: FaJs, label: 'JavaScript' },
    { Icon: SiReact, label: 'React.js' },
    { Icon: SiMongodb, label: 'MongoDB' },
    { Icon: SiExpress, label: 'Express.js' },
    { Icon: SiTailwindcss, label: 'Tailwind CSS' },
    { Icon: FaNode, label: 'Node.js' }, // Keep FaNode here
    
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <skill.Icon className="skill-icon" />
                        <p className="skill-label">{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
