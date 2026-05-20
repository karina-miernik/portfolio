import React from 'react';
import Title from './Title'
import Card from './Card'
import '../styles/Projects.css'
import zdroweat from '../assets/zdroweat.png'
import countries from '../assets/countries.png'
import cottage from '../assets/cottage.png'
const Projects = () => {
  const projects = [
    {
      "name": "Holiday cottage",
      "description" : "Portfolio for holiday cottage (in Polish). Build in React & Tailwindcss.",
      "link" : "https://domekzwidokiem.netlify.app/",
      "image": cottage
    },
    {
      "name": "ZdrowEat",
      "description" : "A team project. ZdrowEat is an app for finding heathy recipes. Build in React.",
      // "link" : "http://app.zdroweat.jfdz14.is-academy.pl/",
      "image": zdroweat
    },
    // {
    //   "name": "Herbmed",
    //   "description" : "Herbmed App build in React with Hooks. Created for finding herbs that may heal certain diseases.",
    //   "link" : "https://karina-miernik.github.io/herbmed/",
    //   "image" : herbmed
    // },
    {
      "name": "Countries App",
      "description" : "Countries App build in React",
      "link" : "https://countries-search-page.netlify.app/",
      "image": countries
    },
  ]

  const renderedProjects = projects.map(project => {
    return(
      <Card
      name={project.name}
      description={project.description}
      link={project.link}
      image={project.image}
      />
    )
  })
  return(
    <div className='projects-wrapper'>
      <Title title="My projects."/>
      <div className='project'>
        {renderedProjects}
      </div>
    </div>
  )
};

export default Projects;
