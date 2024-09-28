import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">Feel free to reach out through any of the platforms below!</p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className='social-icon' />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='social-icon' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='social-icon' />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='social-icon' />
                </a>
            </div>
        </div>
    );
};

export default ContactMe;
