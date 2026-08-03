import React from "react";
import "../styles/Card.css";
const Card = ({
    description,
    name,
    link,
    image,
    visit = true,
    description2,
}) => {
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
                    <div className="desc">
                        <div className="desc2">{description2}</div>
                        {description}
                    </div>
                    {visit && <div className="visit">{`Visit ${name}`}</div>}
                </div>
            </div>
        </a>
    );
};

export default Card;
