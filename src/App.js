import React, { useRef } from 'react';
import NavBar from './NavBar'; // Import your NavBar component
import Main from './Main'; // Your Main component
import ScrollText from './ScrollText'; // Your ScrollText component
import Skills from './Skills'; // Your Skills component
import FlipCard from './ProjectCard'; // Your FlipCard component
import ContactMe from './ContactMe'; // Your ContactMe component

export default function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    console.log("helo")
    // Smooth scroll to the specified section
    switch (section) {
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break; 
    }
  };

  return (
    <div>
      <NavBar scrollTo={scrollTo} /> {/* Pass scrollTo function to NavBar */}
      <div ref={aboutRef}>
        <Main />
      </div>
      <ScrollText />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <FlipCard />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>

    </div>
  );
}
