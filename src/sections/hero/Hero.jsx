import React from "react";
import "./hero.css";

import avatarPic from "../../assets/avatar_pic.jpeg";

const Hero = () => {
  return (
    <div id="home" className="portfolio__hero --section-padding">
      <div style={{ width: "min-content" }}>
        <div className="portfolio__hero_avatarPic_container">
          <img src={avatarPic} alt="Norman Cade" />
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: 15,
            fontFamily: "var(--font-family-secondary)",
            letterSpacing: 0.5,
          }}
        >
          {"< "}Norman C.{" />"}
        </p>
      </div>

      <p className="portfolio__hero_tagline">
        I’m a dynamic full-stack software
        <br /> developer specializing in web and <br />
        app development.
      </p>
    </div>
  );
};

export default Hero;
