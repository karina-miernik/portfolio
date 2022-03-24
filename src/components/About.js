import React from 'react';
import Title from './Title'
import '../styles/About.css'
import me from '../assets/me.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const About = (props) => {
  return(
    <div className='wrapperAbout'>
      <Title title="Learn about me." />
      <div className='about-container'>
      <div className='about'><div className='about-image'></div></div>
        <div className='about-desc'>
          <p>I am a Front-End Developer located in Poland. I am a creative person, who always is eager to learn more.</p>
          <p>I work mainly with JavaScript and Ruby on Rails, but my passion is React.</p>
          <p>In private I am a book lover and amatour artist.</p>
          <h3>Find out more</h3>
          <a class="about-gh" href="https://github.com/karina-miernik" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className='about-icon'/>Github page
          </a>
          <a class="about-linkedin" href="https://www.linkedin.com/in/karina-miernik/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='about-icon'/>My Linkeding Profile
          </a>
          <a class="about-linkedin" href="mailto:karina.miernik@gmail.com" data-link="mailto:karina.miernik@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className='about-icon'/>Contact me
          </a>
        </div>
      </div>
    </div>    
  )

 
}

export default About;
