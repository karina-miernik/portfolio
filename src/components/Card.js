import React from "react";
import "../styles/Card.css";
const Card = ({ description, name, link, image }) => {
    return (
        <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <div className="card">
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
                <div className="details-container">
                    <div className="name">{name}</div>
                    <div className="desc">{description}</div>
                    {`Visit ${name}`}
                </div>
            </div>
        </a>
    );
};

export default Card;
