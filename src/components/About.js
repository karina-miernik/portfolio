import React from 'react';
import Title from './Title'
import '../styles/About.css'
const About = (props) => {
  return(
    <div>
      <Title title="Learn about me." />
      <div className='about-container'>
        <div className='about'>I am....</div>
        <div className='about'>My image</div>
      </div>
    </div>    
  )

 
}

export default About;
