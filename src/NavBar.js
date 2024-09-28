    import React, { useState } from 'react';
    import { Menu, X } from 'lucide-react'; // Import both icons
    import './NavBar.css';

    export default function NavBar({ scrollTo }) { // Accept scrollTo as a prop
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        const closeMenu = () => {
            setIsMenuOpen(false);
        };

        const handleItemClick = (section) => {
            scrollTo(section); // Call the scrollTo function passed as a prop
            closeMenu(); // Close the menu after clicking an item
        };

        return (
            <nav className="nav">
                <button className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Toggle icon based on state */}
                </button>
                <div className="logo">
                    <span className="icon">A</span>
                    <span className="logoText">ATHARVA</span>
                </div>

                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className="menuItem" onClick={() => handleItemClick('about')}>About Me</li>
                    <li className="menuItem" onClick={() => handleItemClick('skills')}>Skills</li>
                    <li className="menuItem" onClick={() => handleItemClick('projects')}>Projects</li>
                    <li className="menuItem" onClick={() => handleItemClick('contact')}>Contact Me</li>
                </ul>
                {isMenuOpen && <div className="overlay open" onClick={closeMenu}></div>}
            </nav>
        );
    }
