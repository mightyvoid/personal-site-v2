import React, { useState, useEffect } from 'react';
import './css/staticHeader.css'; // We'll define the CSS in a separate file
import { scrollIntoView } from './utils';

 export const StaticHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (<>{!isScrolled && ( <>
      <nav className={`navbar${isScrolled ? 'scrolled' : ''}`}>
      <ul className="nav-links">
      <li><a  onClick={()=>scrollIntoView('landing-page-container')}>Home</a></li>
        <li><a  onClick={()=>scrollIntoView('experience-main-container')}>Work</a></li>
        <li><a href="#contact" >Projects</a></li>
        <li><a href="#about">Contact</a></li>
        <li><a href="#contact">Social</a></li>
      </ul>
    </nav>
  </>
  )}
</>
  );
};

// export default StaticHeader