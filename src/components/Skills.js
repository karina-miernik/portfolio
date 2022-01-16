import React from 'react';
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JS from '../assets/JS.svg'
import Re from '../assets/Re.svg'
import CSS from '../assets/CSS.svg'
import HTML from '../assets/HTML.svg'
import RoR from '../assets/RoR.svg'
import Git from '../assets/Git.svg'
import AWS from '../assets/AWS.svg'
import '../styles/Skills.css'
import { renderMatches } from 'react-router-dom';
const skills = [
  {
    "name": "Java Script",
    "icon" : JS,
  },
  {
    "name": "React",
    "icon" : Re
  },
  {
    "name": "CSS",
    "icon" : CSS
  },
  {
    "name": "HTML",
    "icon" : HTML
  },
  {
    "name": "Ruby on Rails",
    "icon" : RoR
  },
  {
    "name": "Git",
    "icon" : Git
  },
  {
    "name": "AWS",
    "icon" : AWS
  }
]
const Skills = (props) => {
  return <div className='skills-wrapper'>
      <Title title="My stack."/>
      <div className='skills'>
      {
        skills.map(skill => {
          return(
         <div className='skill'> 
          <p className='hidden-p'></p>  
          <img src={skill.icon} alt="Icon image"/>
          <p>{skill.name}</p>
        </div>
          )
        })
      }  
      </div> 

  </div>
};

export default Skills;
