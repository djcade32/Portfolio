import React, { useEffect, useState } from "react";
import "./skills.css";

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandPython, TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoJava, BiLogoReact } from "react-icons/bi";

const Skills = () => {
  const [skillIconSize, setSkillIconSize] = useState(102);

  useEffect(() => {
    const updateDimension = () => {
      if (window.innerWidth < 1440) {
        setSkillIconSize(70);
      } else if (window.innerWidth > 1440) {
        setSkillIconSize(102);
      }
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <div className="portfolio__skills">
      <div className="portfolio__skills_container --section-padding">
        <div className="portfolio__skills_container_skill">
          <p>HTML</p>
          <AiOutlineHtml5 size={skillIconSize} color="var(--color-lightGray)" />
        </div>
        <div className="portfolio__skills_container_skill">
          <p>Java</p>
          <BiLogoJava size={skillIconSize} color="var(--color-lightGray)" />
        </div>
        <div className="portfolio__skills_container_skill">
          <p>CSS</p>
          <TbBrandCss3 size={skillIconSize} color="var(--color-lightGray)" />
        </div>
        <div className="portfolio__skills_container_skill">
          <p>Javascript</p>
          <RiJavascriptLine size={skillIconSize} color="var(--color-lightGray)" />
        </div>
        <div className="portfolio__skills_container_skill">
          <p>Python</p>
          <TbBrandPython size={skillIconSize} color="var(--color-lightGray)" />
        </div>
        <div className="portfolio__skills_container_skill">
          <p>React</p>
          <BiLogoReact size={skillIconSize} color="var(--color-lightGray)" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
