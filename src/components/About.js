import React from "react";
import Title from "./Title";
import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const About = (props) => {
    return (
        <div className="wrapperAbout">
            <Title title="Learn about me." />
            <div className="about-container">
                <div className="about">
                    <div className="about-image"></div>
                </div>
                <div className="about-desc">
                    <p>
                        I am Frontend Developer with 6 years of experience,
                        including 4 years specializing in React and TypeScript,
                        with previous experience in VanillaJS and Ruby on Rails.
                    </p>
                    <p>
                        I value clear communication and friendly working
                        atmosphere. I am focused on finding effective solutions
                        and continuosly improving both my technical skills and
                        the quality of my work.
                    </p>
                    <h3>Find out more</h3>
                    <a
                        className="about-gh"
                        href="https://github.com/karina-miernik"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="about-icon"
                        />
                        Github page
                    </a>
                      <a
                        className="about-gh"
                        href="https://github.com/karinaMiernik"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="about-icon"
                        />
                        Work github page
                    </a>
                    <a
                        className="about-linkedin"
                        href="https://www.linkedin.com/in/karina-miernik/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="about-icon"
                        />
                        My Linkeding Profile
                    </a>

                    <a
                        className="about-linkedin"
                        href="mailto:karina.miernik@gmail.com"
                        data-link="mailto:karina.miernik@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="about-icon"
                        />
                        Contact me
                    </a>
                    <span className="about-phone">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="about-icon"
                        />
                        Phone: 660 347 707
                    </span>
                    <div id="special"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
