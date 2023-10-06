import React from "react";
import "./projectCard.css";

const ProjectCard = ({ img, name, description, tools, website, imgPosition }) => {
  return (
    <div className="portfolio__projectCard" key={name} style={{ display: "flex" }}>
      <div
        className="portfolio__projectCard_image"
        style={{ backgroundImage: ` url(${img})`, backgroundPosition: imgPosition }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "var(--font-size-md)",
          }}
        >
          <a href={website} target="_blank">
            View Live Demo
          </a>
        </div>
      </div>
      <div className="portfolio__projectCard_content">
        <div className="portfolio__projectCard_description">
          <div style={{ height: "85%" }}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="portfolio__projectCard_description_tools">
          {tools.map((tool, index) => (
            <div key={index + tool} style={{ display: "flex", alignItems: "center" }}>
              <p>{tool}</p>
              {index + 1 !== tools.length && <span>|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
