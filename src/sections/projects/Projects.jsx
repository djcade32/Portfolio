import React, { useEffect, useState } from "react";
import "./projects.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { data } from "../../data/projectsData";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const DEVICE_SCREEN_WIDTH = {
  mobile: 750,
  laptop: { big: 1440, small: 1024 },
  tablet: 768,
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <BsFillArrowRightCircleFill
      onMouseOver={({ target }) => (target.style.opacity = 0.7)}
      onMouseOut={({ target }) => (target.style.opacity = 1)}
      size={35}
      style={{ position: "absolute", right: 0 }}
      cursor="pointer"
      onClick={() => onClick()}
    />
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <BsFillArrowLeftCircleFill
      onMouseOver={({ target }) => (target.style.opacity = 0.7)}
      onMouseOut={({ target }) => (target.style.opacity = 1)}
      size={35}
      style={{ position: "absolute", left: 0 }}
      cursor="pointer"
      onClick={() => onClick()}
    />
  );
};

const Projects = () => {
  const [carouselColumns, setCarouselColumns] = useState(3);

  return (
    <div id="projects" className="portfolio__projects">
      <h1 style={{ textAlign: "center" }}>
        {"< "}Projects{" />"}
      </h1>
      <div className="--section-padding">
        <Carousel
          responsive={responsive}
          slidesToSlide={3}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          containerClass="carousel_container"
          removeArrowOnDeviceType={["mobile", "tablet"]}
        >
          {data.map((project, index) => (
            <div
              key={project.name + index}
              style={{
                display: "flex",
                height: 600,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProjectCard
                img={project.img}
                name={project.name}
                description={project.description}
                tools={project.tools}
                website={project.website}
                imgPosition={project.imgPosition}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
