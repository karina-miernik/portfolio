import React, {useState} from 'react';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';
import {Link} from "react-router-dom";
const Home = () => {  

  return(
      <div className='home'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello! I\'m Karina')
              .callFunction(() => {
              })
              .pauseFor(1000)
              .deleteChars(6)
            typewriter.typeString('a Frontend Developer')
              .callFunction(() => {
              })
              .start()
          }}
        />
        <div className='button-container'>
          <Link to="/portfolio/projects" className='link-button projects'>My projects</Link>
          <Link to="/portfolio/about" className='link-button about-me'>About me</Link>
        </div>
        <div className='img'/>
      </div>
  )
}


export default Home;
