import React from 'react';
import './cardWithImg.css';


interface CardProps {
  imgSrc: any;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, description, link }) => {

  return (
    <div className="card">
      <img src={imgSrc} alt="Card Image" className="card-image" />
      <div className="card-content">
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" id="card-checkout-link">
          Check out
        </a>
      </div>
    </div>
  );
};

export default Card;
