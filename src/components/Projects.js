import React from "react";
import Title from "./Title";
import Card from "./Card";
import "../styles/Projects.css";
import zdroweat from "../assets/zdroweat.png";
import portal from "../assets/portal.png";
import events from "../assets/events.png";
import cottage from "../assets/cottage.png";
import entonal from "../assets/entonal.png";
import hr from "../assets/hr.png";

const Projects = () => {
    const projects = [
        {
            name: "Portal",
            description:
                "I was responsible for frontend side of an app. Portal shows availability at catering locations for big restaurants groups. Frontend build in React & TypeScript.",
            link: "https://portal.gastroplanner.no/p/ocQkZY",
            image: portal,
            description2: "Work project",
        },
        {
            name: "Tickets",
            description:
                "I was responsible for frontend side of an app. Website for booking and buying tickets for events. Frontend build in React & TypeScript.",
            link: "https://event.gastroplanner.no/tickets/demo",
            description2: "Work project",

            image: events,
        },
        {
            name: "Entonal studio",
            description:
                "I was responsible for frontend side of an app. Product page for digital tools for the future of music. Frontend build in Ruby on Rails with Tailwind CSS.",
            link: "https://node.audio/",
            description2: "Work project",
            image: entonal,
        },
               {
            name: "Hypothesis Research",
            description:
                "I was responsible for frontend side of an app. Website providing investment research and analitycal services. Frontend build in Ruby on Rails with Tailwind CSS.",
            link: "https://www.hypothesisresearch.com/",
            description2: "Work project",
            image: hr,
        },
        {
            name: "Holiday cottage",
            description:
                "Portfolio for holiday cottage. Build in React & Tailwindcss.",
            link: "https://domekzwidokiem.netlify.app/",
            image: cottage,
        },
        {
            name: "ZdrowEat",
            description:
                "A team project. ZdrowEat is an app for finding heathy recipes. Build in React.",
            // "link" : "http://app.zdroweat.jfdz14.is-academy.pl/",
            image: zdroweat,
            visit: false,
        },
        // {
        //     name: "Countries App",
        //     description: "Countries App build in React",
        //     link: "https://countries-search-page.netlify.app/",
        //     image: countries,
        // },
    ];

    const renderedProjects = projects.map((project) => {
        return (
            <Card
                name={project.name}
                description={project.description}
                description2={project.description2}
                link={project.link}
                image={project.image}
                visit={project.visit}
            />
        );
    });
    return (
        <div className="projects-wrapper">
            <Title title="Projects." />
            <div className="project">{renderedProjects}</div>
        </div>
    );
};

export default Projects;
