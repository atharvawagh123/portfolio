import React from 'react';
import './Main.css';
import { MdEmail } from "react-icons/md";
import image from './atharva.jpeg';

export default function Main() {
    return (
        <div className="container">
            <div className="left-content">
                <h1 className="main-heading">Hello I'm Atharva Wagh.</h1>
                <h2 className="sub-heading">
                    MERN Stack <span className="highlight">Developer</span>
                </h2>
                <h3 className="location">Based In India.</h3>
                <p className="description">
                    I am currently in my second year of BSc IT. I have a passion for developing web applications and continually improving my skills in the MERN stack.
                </p>
                <a href="mailto:youremail@example.com" className="email-button">
                    <MdEmail className='Email-icon' />
                </a>
            </div>
            <div className="right-content">
                <img src={image} alt="Atharva Wagh" className='image-1' />
            </div>
        </div>
    );
}
