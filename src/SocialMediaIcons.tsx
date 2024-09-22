import React from 'react';
import './css/socialMediaIcons.css';

const SocialMediaIcons: React.FC = () => {
  return (
    <>
    <div className="social-icons">
           
      <a href="https://www.linkedin.com/in/navinravindran" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/mightyvoid" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:navinanbu@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
    <div className='connect-with-me'>
    <h6>Connect with me</h6>
    </div>
    </>
  );
};

export default SocialMediaIcons;
