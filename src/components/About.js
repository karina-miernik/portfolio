import React from 'react';
import Title from './Title'
import '../styles/About.css'
const About = (props) => {
  return(
    <div>
      <Title title="Learn about me." />
      <div className='about-container'>
        <div className='about'>
          <p>I am Front-End Developer located in Poland. I am creative person, who always is eager to learn more.</p>
          <p>In private I am a book lover and amatour artist.</p>
          <h3>Find out more</h3>
          <a href="https://github.com/karina-miernik" target="_blank" rel="noreferrer">Github page</a>
          </div>
        <div className='about'>My image</div>
      </div>
    </div>    
  )

 
}

export default About;
