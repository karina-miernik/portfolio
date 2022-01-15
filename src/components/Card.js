import React from 'react';
import '../styles/Card.css'
const Card = ({description, name, link, image}) => {
  return(
    <div className='card'>
      <div className='image-container'>
        <img src={image} alt="Project image"/>
      </div>
      <div className='details-container'>
        <div className='name'>{name}</div>
        <div className='desc'>{description}</div>
        <a className='project-link' href={link}>{`Visit ${name}`}</a>
      </div>
    </div>
  )
  };

export default Card;
