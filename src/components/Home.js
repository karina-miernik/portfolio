import React, {useState} from 'react';
import '../styles/Home.css';
import PageWrapper from './PageWrapper'
import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom";
const Home = () => {  

  return(
    // <PageWrapper>
      <div className='home'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello! I\'m Karina')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteChars(6)
            typewriter.typeString('Frontend Developer')
              .callFunction(() => {
                console.log('New string typed out');
              })
              .start()
          }}
        />
        <div className='button-container'>
          <div><Link to="/portfolio/projects" className='link-button'>My projects</Link></div>
          <div><Link to="/portfolio/about" className='link-button'>About me</Link></div>
          
        </div>
        <div className='img'/>
      </div>
    // </PageWrapper>
  )
}


export default Home;
