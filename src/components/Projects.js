import React from 'react';
import PageWrapper from './PageWrapper'
import Title from './Title'
import Card from './Card'
import '../styles/Projects.css'
import herbmed from '../assets/herbmed.png'
import zdroweat from '../assets/zdroweat.png'
import weather from '../assets/weather.png'
import countries from '../assets/countries.png'
const Projects = () => {
  const projects = [
    {
      "name": "ZdrowEat",
      "description" : "A team project. ZdrowEat is an app for finding heathy recipes. Build in React.",
      "link" : "http://app.zdroweat.jfdz14.is-academy.pl/",
      "image": zdroweat
    },
    {
      "name": "Herbmed",
      "description" : "Herbmed App build in React with Hooks. Created for finding herbs that may heal certain diseases.",
      "link" : "https://karina-miernik.github.io/herbmed/",
      "image" : herbmed
    },
    {
      "name": "Countries App",
      "description" : "Countries App build in React",
      "link" : "https://karina-miernik.github.io/countries-app/",
      "image": countries
    },
    {
      "name": "Weather App",
      "description" : "Weather App build in React with Hooks. Checks for a weather in a certain city or country.",
      "link" : "https://karina-miernik.github.io/weather-app/",
      "image" : weather
    }
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
  console.log(projects[1].image)
  return(
    <PageWrapper>
    <div className='home'>
      <Title title="My projects."/>
      <div className='project'>
        {renderedProjects}
      </div>
    </div>
  </PageWrapper>
  )
};

export default Projects;
